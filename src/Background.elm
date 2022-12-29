module Background exposing (backgroundSvg)

import Html
import Svg exposing (..)
import Svg.Attributes exposing (..)


coordinatesFromIdx : Int -> Int -> Int -> List (Svg.Attribute msg)
coordinatesFromIdx screenWidth squareWidth i =
    let
        maxw =
            screenWidth // squareWidth

        _ =
            Debug.log "I" <| String.fromInt i
    in
    [ x (safeModBy screenWidth (i * squareWidth) |> String.fromInt)
    , y ((i // maxw) * squareWidth |> String.fromInt)
    , width (squareWidth // 2 |> String.fromInt)
    , height (squareWidth // 2 |> String.fromInt)
    ]

safeModBy : Int -> Int -> Int
safeModBy y x =
    case y of
        0 -> 1

        nonzero -> modBy y x

mkRect screenWidth squareWidth x  =
    rect
        (coordinatesFromIdx screenWidth squareWidth x
        ++ [
         fill <| "rgb(100,0,0)"
        ])
        []


backgroundSvg : List Int -> Int -> Int -> Html.Html msg
backgroundSvg history w h =
    let
        ws =
            String.fromInt w

        hs =
            String.fromInt h
    in
    svg
        [ width ws
        , height hs
        , viewBox <| ([ 0, 0, w, h ] |> List.map String.fromInt |> String.join " ")
        ]
        (history 
        |> List.indexedMap (\i _ -> mkRect w 25 i)
        )
