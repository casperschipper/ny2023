port module Main exposing (..)

import Array exposing (Array)
import Background
import Browser
import Html exposing (Html)
import Html.Attributes as Attr
import Html.Events as Events
import Json.Decode as JD exposing (Decoder)
import Json.Encode as JE exposing (Value)
import List exposing (all)
import Random
import Time exposing (Posix)


port playNote : String -> Cmd msg


port copyJSON : String -> Cmd msg


blockSize =
    20


type PitchClass
    = C
    | CSharp
    | D
    | DSharp
    | E
    | F
    | FSharp
    | G
    | GSharp
    | A
    | ASharp
    | B


allPitchClasses : List PitchClass
allPitchClasses =
    [ C, CSharp, D, DSharp, E, F, FSharp, G, GSharp, A, ASharp, B ]


majorScale : List PitchClass
majorScale =
    [ C, D, E, F, G, A, B, C, D, E, F, G, A, B ]


pentaTonic : List PitchClass
pentaTonic =
    [ C, D, F, G, A, C, D, F, G, A ]


toInt : PitchClass -> Int
toInt p =
    case p of
        C ->
            0

        CSharp ->
            1

        D ->
            2

        DSharp ->
            3

        E ->
            4

        F ->
            5

        FSharp ->
            6

        G ->
            7

        GSharp ->
            8

        A ->
            9

        ASharp ->
            10

        B ->
            11


type alias Octave =
    Int


type Note
    = Note Octave PitchClass


encodeNote : Note -> Value
encodeNote (Note o p) =
    JE.object
        [ ( "pitch", JE.string (pAsString p) )
        , ( "octave", JE.int o )
        ]


decodeNote : Decoder Note
decodeNote =
    JD.map2 Note
        (JD.field "octave" JD.int)
        (JD.field "pitch" decodePitchClass)


decodePitchClass : Decoder PitchClass
decodePitchClass =
    JD.string
        |> JD.map
            (\str ->
                str
                    |> stringToPitchclass
                    |> Maybe.withDefault C
            )


withOctave : Octave -> Note -> Note
withOctave o (Note _ p) =
    Note o p


withPitchClass : PitchClass -> Note -> Note
withPitchClass pi (Note o _) =
    Note o pi


pAsString : PitchClass -> String
pAsString p =
    case p of
        C ->
            "C"

        CSharp ->
            "C#"

        D ->
            "D"

        DSharp ->
            "D#"

        E ->
            "E"

        F ->
            "F"

        FSharp ->
            "F#"

        G ->
            "G"

        GSharp ->
            "G#"

        A ->
            "A"

        ASharp ->
            "A#"

        B ->
            "B"


stringToPitchclass : String -> Maybe PitchClass
stringToPitchclass p =
    case p of
        "C" ->
            Just C

        "C#" ->
            Just CSharp

        "D" ->
            Just D

        "D#" ->
            Just DSharp

        "E" ->
            Just E

        "F" ->
            Just F

        "F#" ->
            Just FSharp

        "G" ->
            Just G

        "G#" ->
            Just GSharp

        "A" ->
            Just A

        "A#" ->
            Just ASharp

        "B" ->
            Just B

        _ ->
            Nothing


randomNote : Random.Generator Note
randomNote =
    let
        randClass =
            Random.int 0 (List.length allPitchClasses)
                |> Random.map
                    (\idx ->
                        Array.get idx (Array.fromList majorScale)
                            |> Maybe.withDefault C
                    )

        oct =
            Random.int 2 3
    in
    Random.map2 Note oct randClass


randomNoteOfClass : String -> Random.Generator Note
randomNoteOfClass str =
    let
        class =
            case str of
                "pentatonic" ->
                    pentaTonic

                "chromatic" ->
                    allPitchClasses

                "major" ->
                    majorScale

                _ ->
                    pentaTonic

        randClass =
            Random.int 0 (List.length class)
                |> Random.map
                    (\idx ->
                        Array.get idx (Array.fromList class)
                            |> Maybe.withDefault C
                    )

        oct =
            Random.weighted (1.0, 3) [(0.25,2),(0.25,4)]
    in
    Random.map2 Note oct randClass


asString : Note -> String
asString (Note oct pitch) =
    pAsString pitch ++ String.fromInt oct


selectPitch : (String -> msg) -> PitchClass -> Html msg
selectPitch onSelect currentPitch =
    let
        options =
            allPitchClasses
                |> List.map
                    (\p ->
                        let
                            ps =
                                pAsString p
                        in
                        Html.option [ Attr.value ps, Attr.selected (ps == pAsString currentPitch) ] [ Html.text ps ]
                    )
    in
    Html.select [ Events.onInput onSelect ] options


selectOctave : (String -> msg) -> Octave -> Html msg
selectOctave toMsg currentOct =
    let
        options =
            [ 1, 2, 3, 4, 5 ]
                |> List.map
                    (\o ->
                        let
                            os =
                                String.fromInt o
                        in
                        Html.option [ Attr.selected (o == currentOct), Attr.value os ] [ Html.text os ]
                    )
    in
    Html.select [ Events.onInput toMsg ] options



-- MAIN


main : Program ( Int, Int ) Model Msg
main =
    Browser.document { init = init, update = update, view = view, subscriptions = subscriptions }


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        (if model.playing then
            [ Time.every 75 Tick ]

         else
            []
        )


graphSize : Int
graphSize =
    16



-- MODEL


type GraphEntry
    = GraphEntry
        { array : Array Int
        , value : String
        , note : Note
        }


decodeGraphEntry : Decoder GraphEntry
decodeGraphEntry =
    JD.map3
        (\arr v n ->
            GraphEntry
                { array = arr
                , value = v
                , note = n
                }
        )
        (JD.field "array" (JD.array JD.int))
        (JD.field "value" JD.string)
        (JD.field "note" decodeNote)


encodeGraphEntry : GraphEntry -> JE.Value
encodeGraphEntry (GraphEntry g) =
    JE.object
        [ ( "array", JE.array JE.int g.array )
        , ( "value", JE.string g.value )
        , ( "note", encodeNote g.note )
        ]


entryAsString : GraphEntry -> String
entryAsString (GraphEntry g) =
    g.value ++ "\narray: " ++ Array.foldr (\x acc -> String.fromInt x ++ acc) "" g.array


intArrayToString : Array Int -> String
intArrayToString arr =
    arr |> Array.toList |> List.map String.fromInt |> String.join " "


type alias ScreenSize =
    { width : Int
    , height : Int
    }


type alias Scale =
    String


type alias Model =
    { current : Int
    , history : List Int
    , graph : Array GraphEntry
    , screenSize : ScreenSize
    , rndSeed : Random.Seed
    , scalePreset : Scale
    , playing : Bool
    , index : Int
    , showControls : Bool
    }


encodeModel : Model -> JE.Value
encodeModel model =
    JE.object
        [ ( "current", JE.int model.current )
        , ( "graph", JE.array encodeGraphEntry model.graph )
        ]


initGraph : Array GraphEntry
initGraph =
    let
        fromIndex idx =
            let
                nextSlot =
                    modBy graphSize (idx + 1)
            in
            GraphEntry { value = String.fromInt nextSlot, array = [ nextSlot ] |> Array.fromList, note = Note 3 C }
    in
    Array.initialize graphSize fromIndex


init : ( Int, Int ) -> ( Model, Cmd Msg )
init ( w, h ) =
    ( { current = 0
      , graph = initGraph
      , history = []
      , screenSize = { width = w, height = h }
      , rndSeed = Random.initialSeed 42
      , scalePreset = "pentatonic"
      , playing = True
      , index = 0
      , showControls = False
      }
        |> randomizeOpts
        |> randomizeAllNotes
        |> generateAll
    , Cmd.none
    )



-- UPDATE


type Msg
    = ChangedInput Int String
    | Tick Posix
    | SilentTick
    | SelectedOctave Int String
    | SelectedPitch Int String
    | TriggerRandomNote Int
    | SetNote Int Note
    | CopyJSON
    | RandomizeAll
    | RandomizeOpts
    | SetScale String
    | Start
    | Stop
    | ToggleControls


generateAll : Model -> Model
generateAll model =
    let
        num =
            Background.numOfBlocks model.screenSize.width model.screenSize.height blockSize
    in
    sequenceUpdates (List.repeat num handleTick) { model | history = [] }



-- use the func from background.elm


generateNext : Array Int -> Random.Generator Int
generateNext possible =
    let
        n =
            Array.length possible
    in
    case n of
        0 ->
            Random.constant -1

        nonZero ->
            Random.int 0 (nonZero - 1) |> Random.map (\idx -> Array.get idx possible |> Maybe.withDefault -1)


setNote : Int -> Note -> Model -> Model
setNote idx note model =
    let
        mentry =
            Array.get idx model.graph
    in
    case mentry of
        Just (GraphEntry g) ->
            { model | graph = Array.set idx (GraphEntry { g | note = note }) model.graph }

        Nothing ->
            model


modelAsJSON : Model -> String
modelAsJSON model =
    JE.encode 4 (encodeModel model)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangedInput idx str ->
            ( handleChangedInput idx str model |> generateAll, Cmd.none )

        Tick _ ->
            ( handleTick2 model, playNote (lookupSelectedNote model.index model.history model.graph) )

        SilentTick ->
            ( handleTick model, Cmd.none )

        SelectedOctave idx octStr ->
            ( selectedOctave idx octStr model, Cmd.none )

        SelectedPitch idx pitchStr ->
            ( selectedPitch idx pitchStr model, Cmd.none )

        SetNote idx note ->
            ( setNote idx note model, Cmd.none )

        TriggerRandomNote idx ->
            ( model, Random.generate (SetNote idx) randomNote )

        CopyJSON ->
            ( model, copyJSON (modelAsJSON model) )

        RandomizeAll ->
            ( randomizeAllNotes model |> generateAll, Cmd.none )

        RandomizeOpts ->
            ( randomizeOpts model |> generateAll, Cmd.none )

        SetScale scale ->
            ( setScale scale model, Cmd.none )

        Stop ->
            ( { model | playing = False }, Cmd.none )

        Start ->
            ( { model | playing = True, index = 0 }, Cmd.none )

        ToggleControls ->
            ( { model | showControls = not model.showControls }, Cmd.none )


setScale : String -> Model -> Model
setScale str model =
    let
        pitches =
            case str of
                "major" ->
                    majorScale

                "pentatonic" ->
                    pentaTonic

                "chromatic" ->
                    allPitchClasses

                _ ->
                    allPitchClasses

        updateEntry pitch (GraphEntry g) =
            GraphEntry { g | note = withPitchClass pitch g.note }

        nPitches =
            List.length pitches

        nMissing =
            if nPitches > Array.length model.graph then
                0

            else
                nPitches - Array.length model.graph

        graphEntry =
            GraphEntry { value = String.fromInt 0, array = [ 0 ] |> Array.fromList, note = Note 3 C }

        filledGraph =
            (model.graph |> Array.toList) ++ List.repeat nMissing graphEntry

        newGraph =
            List.map2 updateEntry pitches filledGraph |> Array.fromList
    in
    { model | graph = newGraph }


get : Int -> List a -> Maybe a
get nth list =
    list
        |> List.drop (nth - 1)
        |> List.head


randomChoice : a -> List a -> Random.Generator a
randomChoice first rest =
    Random.int 0 (List.length rest)
        |> Random.map
            (\idx ->
                case idx of
                    0 ->
                        first

                    n ->
                        get n (first :: rest) |> Maybe.withDefault first
            )


mostlyBelow : Int -> Int -> Random.Generator Int
mostlyBelow idx maxIdx =
    Random.int 0 3
        |> Random.andThen
            (\x ->
                if x < 2 then
                    Random.int 0 idx

                else
                    Random.int 0 maxIdx
            )


randomizeOpts : Model -> Model
randomizeOpts model =
    let
        maxIndex =
            Array.length model.graph

        fromChoice idx choice =
            Random.list choice (Random.int 0 idx)
                |> Random.map (\rlst -> (modBy maxIndex (idx + 1) :: rlst) |> Array.fromList)

        generator =
            List.range 0 maxIndex
                |> traverse
                    (\idx ->
                        randomChoice 0 [ 0, 1, 1, 2, 4 ]
                            |> Random.andThen (fromChoice idx)
                            |> Random.map (\opts -> setOptions idx opts)
                    )

        ( updates, newSeed ) =
            Random.step generator model.rndSeed

        newModel =
            sequenceUpdates updates model
    in
    { newModel | rndSeed = newSeed }



-- taken from Random.Extra


sequence : List (Random.Generator a) -> Random.Generator (List a)
sequence =
    List.foldr (Random.map2 (::)) (Random.constant [])


traverse : (a -> Random.Generator b) -> List a -> Random.Generator (List b)
traverse f =
    sequence << List.map f


sequenceUpdates : List (Model -> Model) -> Model -> Model
sequenceUpdates lst model =
    List.foldr (\f x -> f x) model lst


setOptions : Int -> Array Int -> Model -> Model
setOptions idx opts model =
    let
        mEntry =
            Array.get idx model.graph
    in
    case mEntry of
        Just (GraphEntry g) ->
            let
                newGraph =
                    Array.set idx (GraphEntry { g | array = opts, value = intArrayToString opts }) model.graph
            in
            { model | graph = newGraph }

        Nothing ->
            model


randomizeAllNotes : Model -> Model
randomizeAllNotes model =
    let
        entryLst =
            model.graph |> Array.toList

        ( randomNotes, newSeed ) =
            Random.step (Random.list (List.length entryLst) (randomNoteOfClass model.scalePreset)) model.rndSeed

        updateNotes (GraphEntry g) newNote =
            GraphEntry
                { g
                    | note = newNote
                }

        newGraph =
            List.map2 updateNotes entryLst randomNotes |> Array.fromList
    in
    { model
        | rndSeed = newSeed
        , graph = newGraph
    }


lookupSelectedNote : Int -> List Int -> Array GraphEntry -> String
lookupSelectedNote idx history array =
    let
        histArr =
            Array.fromList history
    in
    Array.get idx histArr
        |> Maybe.andThen
            (\idx2 ->
                Array.get idx2 array
            )
        |> Maybe.map (\(GraphEntry g) -> g.note)
        |> Maybe.withDefault (Note 3 C)
        |> asString


selectedOctave : Int -> String -> Model -> Model
selectedOctave idx octStr model =
    let
        mentry =
            Array.get idx model.graph

        moctave =
            String.toInt octStr
    in
    case ( mentry, moctave ) of
        ( Just (GraphEntry g), Just oct ) ->
            { model | graph = Array.set idx (GraphEntry { g | note = withOctave oct g.note }) model.graph }

        ( _, _ ) ->
            let
                _ =
                    Debug.log "cannot find the note"
            in
            model


selectedPitch : Int -> String -> Model -> Model
selectedPitch idx pitchStr model =
    let
        mentry =
            Array.get idx model.graph

        mpitch =
            stringToPitchclass pitchStr
    in
    case ( mentry, mpitch ) of
        ( Just (GraphEntry g), Just pi ) ->
            { model | graph = Array.set idx (GraphEntry { g | note = withPitchClass pi g.note }) model.graph }

        ( _, _ ) ->
            model


handleTick : Model -> Model
handleTick model =
    let
        mOptions =
            Array.get model.current model.graph
    in
    case mOptions of
        Nothing ->
            { model | current = 0 }

        Just (GraphEntry g) ->
            let
                ( next, nxtSeed ) =
                    Random.step (generateNext g.array) model.rndSeed
            in
            { model
                | current = next
                , history = next :: model.history
                , rndSeed = nxtSeed
            }


handleTick2 : Model -> Model
handleTick2 model =
    let
        newIndex =
            model.index + 1

        safeIndex =
            modBy (max 1 (List.length model.history)) newIndex
    in
    { model
        | index = safeIndex
    }


handleChangedInput : Int -> String -> Model -> Model
handleChangedInput idx str model =
    let
        parseInts =
            String.split " " str
                |> List.map String.toInt
                |> List.foldr
                    (\x acc ->
                        case x of
                            Just xx ->
                                xx :: acc

                            Nothing ->
                                acc
                    )
                    []

        entry =
            GraphEntry
                { value = str
                , array = Array.fromList parseInts
                , note =
                    Array.get idx model.graph
                        |> Maybe.map (\(GraphEntry g) -> g.note)
                        |> Maybe.withDefault (Note 3 C)
                }
    in
    { model | graph = Array.set idx entry model.graph }


viewEntry : Int -> GraphEntry -> Html Msg
viewEntry idx (GraphEntry g) =
    let
        ( octave, pitch ) =
            case g.note of
                Note o p ->
                    ( o, p )
    in
    Html.div []
        [ Html.text ("#" ++ String.fromInt idx)
        , selectOctave (SelectedOctave idx) octave
        , selectPitch (SelectedPitch idx) pitch
        , Html.button [ Events.onClick (TriggerRandomNote idx) ] [ Html.text "RND!" ]
        , Html.input [ Events.onInput (ChangedInput idx), Attr.value g.value ] []
        ]


selectScale : String -> Html Msg
selectScale currentSel =
    let
        options =
            [ "major", "pentatonic", "chromatic" ]

        mkOpt opt =
            Html.option
                [ Attr.value opt
                , Attr.selected (currentSel == opt)
                ]
                [ Html.text opt ]
    in
    Html.label []
        [ Html.text "Scale preset"
        , Html.select [ Events.onInput SetScale ] (List.map mkOpt options)
        ]



-- VIEW


playButton : Model -> Html Msg
playButton model =
    if model.playing then
        Html.button [ Events.onClick Stop ] [ Html.text "stop" ]

    else
        Html.button [ Events.onClick Start ] [ Html.text "start" ]


showHideControlsButton : Bool -> Html Msg
showHideControlsButton showControls =
    Html.label []
        [ Html.input [ Attr.type_ "checkbox", Attr.selected showControls, Events.onClick ToggleControls ] []
        , Html.text <|
            if showControls then
                "hide"

            else
                "show"
        ]


showIf : Bool -> List (Html.Attribute Msg)
showIf show =
    if show then
        []

    else
        [ Attr.style "display" "none" ]


view : Model -> Browser.Document Msg
view model =
    let
        entries =
            Array.indexedMap viewEntry model.graph |> Array.map (\item -> Html.li [] [ item ]) |> Array.toList

        currentEntry =
            Array.get model.current model.graph |> Maybe.map entryAsString |> Maybe.withDefault "No value"
    in
    { title = "graph tones"
    , body =
        [ Html.text (String.fromInt model.index)
        , showHideControlsButton model.showControls
        , Html.br [] []
        , Html.div
            [ Attr.style "position" "fixed"
            , Attr.style "top" "0px"
            , Attr.style "left" "0px"
            , Attr.style "z-index" "-2"
            ]
            [ Background.backgroundSvg model.history model.screenSize.width model.screenSize.height blockSize ]
        , Html.div
            [ Attr.style "position" "fixed"
            , Attr.style "top" "0px"
            , Attr.style "left" "0px"
            , Attr.style "z-index" "-1"
            ]
            [ Background.cursorBox (model.index + 1) model.history model.screenSize.width model.screenSize.height blockSize ]
        , Html.br [] []
        , Html.div
            (Attr.class "controls"
                :: showIf model.showControls
            )
            [ Html.ul [ Attr.class " " ] <| entries
            , Html.button [ Events.onClick CopyJSON ] [ Html.text "copy state to clipboard" ]
            , Html.button [ Events.onClick RandomizeAll ] [ Html.text "randomize all notes" ]
            , Html.button [ Events.onClick RandomizeOpts ] [ Html.text "randomize options" ]
            , playButton model
            , selectScale model.scalePreset
            ]

        --, Html.text <| (model.history |> List.map String.fromInt |> String.join " ")
        ]
    }
