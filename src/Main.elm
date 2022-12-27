port module Main exposing (..)

-- TODO

{-

1. select pitches in dropdowns
2. render some graphics
3. open and close dialogs


-}
import Array exposing (Array)
import Browser
import Html exposing (Html, button, div, input, text)
import Html.Attributes as Attr
import Html.Events as Events exposing (onClick)
import Random
import Time exposing (Posix)


port playNote : Int -> Cmd msg


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


selectOctave : Octave -> Html Msg
selectOctave currentOct =
    let
        options =
            [ 0, 1, 2, 3, 4, 5, 6 ]
                |> List.map
                    (\o ->
                        let
                            os =
                                String.fromInt o
                        in
                        Html.option [ Attr.value os ] [ Html.text os ]
                    )
    in
    Html.select [] options



-- MAIN


main : Program () Model Msg
main =
    Browser.document { init = init, update = update, view = view, subscriptions = subscriptions }


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ Time.every 250.0 Tick
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
            GraphEntry { value = String.fromInt nextSlot, array = [ nextSlot ] |> Array.fromList }
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


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangedInput idx str ->
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
                        }

                newModel =
                    { model | graph = Array.set idx entry model.graph }
            in
            ( newModel, Cmd.none )

        Tick _ ->
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

        GeneratedNext x ->
            ( { model | current = x }, playNote model.current )

        Start {} ->
            ( model, Cmd.none )


viewEntry : Int -> GraphEntry -> Html Msg
viewEntry idx (GraphEntry g) =
    Html.input [ Events.onInput (ChangedInput idx), Attr.value g.value ] []



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
