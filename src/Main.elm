port module Main exposing (..)

-- TODO
{-

   - Canon!
   - save state
   - render some graphics
   - open and close dialogs


-}

import Array exposing (Array)
import Browser
import Html exposing (Html, button, div, input, text)
import Html.Attributes as Attr
import Html.Events as Events exposing (onClick)
import Random
import Time exposing (Posix)


port playNote : String -> Cmd msg


port start : ({} -> msg) -> Sub msg


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


allPitchClasses =
    [ C
    , CSharp
    , D
    , DSharp
    , E
    , F
    , FSharp
    , G
    , GSharp
    , A
    , ASharp
    , B
    ]


type alias Octave =
    Int


type Note
    = Note Octave PitchClass


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
                        Array.get idx (Array.fromList allPitchClasses)
                            |> Maybe.withDefault C
                    )

        oct =
            Random.int 1 5
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
            [ 0, 1, 2, 3, 4, 5, 6 ]
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


main : Program () Model Msg
main =
    Browser.document { init = init, update = update, view = view, subscriptions = subscriptions }


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ Time.every 125.0 Tick
        , start Start
        ]


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


entryAsString : GraphEntry -> String
entryAsString (GraphEntry g) =
    g.value ++ "\narray: " ++ Array.foldr (\x acc -> String.fromInt x ++ acc) "" g.array


type alias Model =
    { current : Int
    , graph : Array GraphEntry
    }


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


init : flags -> ( Model, Cmd Msg )
init _ =
    ( { current = 0
      , graph = initGraph
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = ChangedInput Int String
    | Tick Posix
    | GeneratedNext Int
    | Start {}
    | SelectedOctave Int String
    | SelectedPitch Int String
    | TriggerRandomNote Int
    | SetNote Int Note


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


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangedInput idx str ->
            ( handleChangedInput idx str model, Cmd.none )

        Tick _ ->
            handleTick model

        GeneratedNext x ->
            ( { model | current = x }, playNote (lookupSelectedNote model.current model.graph) )

        Start {} ->
            ( model, Cmd.none )

        SelectedOctave idx octStr ->
            ( selectedOctave idx octStr model, Cmd.none )

        SelectedPitch idx pitchStr ->
            ( selectedPitch idx pitchStr model, Cmd.none )

        SetNote idx note ->
            ( setNote idx note model, Cmd.none )

        TriggerRandomNote idx ->
            (model, Random.generate (SetNote idx) randomNote )


lookupSelectedNote idx array =
    Array.get idx array
        |> Maybe.map (\(GraphEntry g) -> g.note)
        |> Maybe.withDefault (Note 3 C)
        |> asString


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


handleTick : Model -> ( Model, Cmd Msg )
handleTick model =
    let
        mOptions =
            Array.get model.current model.graph
    in
    case mOptions of
        Nothing ->
            ( { model | current = 0 }, Cmd.none )

        Just (GraphEntry g) ->
            let
                cmds =
                    Cmd.batch
                        [ Random.generate GeneratedNext (generateNext g.array)
                        ]
            in
            ( model
            , cmds
            )


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
        , Html.button [ Events.onClick (TriggerRandomNote idx) ] [Html.text "RND!" ]
        , Html.input [ Events.onInput (ChangedInput idx), Attr.value g.value ] []
        ]



-- VIEW


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
        [ Html.text (String.fromInt model.current)
        , Html.br [] []
        , Html.pre [] [ Html.text currentEntry ]
        , Html.ul [] <| entries
        ]
    }
