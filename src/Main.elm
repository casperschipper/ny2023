module Main exposing (..)

-- Press buttons to increment and decrement a counter.
--
-- Read how it works:
--   https://guide.elm-lang.org/architecture/buttons.html
--

import Array exposing (Array)
import Browser
import Html exposing (Html, button, div, input, text)
import Html.Attributes as Attr
import Html.Events as Events exposing (onClick)
import Random
import Time exposing (Posix)



-- MAIN


main : Program () Model Msg
main =
    Browser.document { init = init, update = update, view = view, subscriptions = subscriptions }


subscriptions : Model -> Sub Msg
subscriptions _ =
    Time.every 1000.0 Tick


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


generateNext : Array Int -> Random.Generator Int
generateNext possible =
    let
        n =
            Array.length possible
    in
    case n of
        0 ->
            Random.constant (-1)

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

        Tick t ->
            let
                mOptions =
                    Array.get model.current model.graph
            in
            case mOptions of
                Nothing ->
                    ( { model | current = 0 }, Cmd.none )

                Just (GraphEntry g) ->
                    ( model
                    , Random.generate GeneratedNext (generateNext g.array)
                    )

        GeneratedNext x ->
            ( { model | current = x }, Cmd.none )


viewEntry : Int -> GraphEntry -> Html Msg
viewEntry idx (GraphEntry g) =
    let
        value =
            Array.foldr (\x acc -> String.fromInt x ++ " " ++ acc) "" g.array
    in
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
