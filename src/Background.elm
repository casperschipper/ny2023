module Background exposing (backgroundSvg, numOfBlocks)

import Html
import Svg exposing (..)
import Svg.Attributes exposing (..)


coordinatesFromIdx : Int -> Int -> Int -> List (Svg.Attribute msg)
coordinatesFromIdx screenWidth squareWidth i =
    let
        maxw =
            (screenWidth // squareWidth) + 1
    in
    [ x (safeModBy screenWidth (i * squareWidth) |> String.fromInt)
    , y ((i // maxw) * squareWidth |> String.fromInt)
    , width (squareWidth |> String.fromInt)
    , height (squareWidth |> String.fromInt)
    ]


safeModBy : Int -> Int -> Int
safeModBy y x =
    case y of
        0 ->
            1

        nonzero ->
            modBy y x


mkRect screenWidth squareWidth color x =
    rect
        (coordinatesFromIdx screenWidth squareWidth x
            ++ [ fill <| color
               ]
        )
        []

numOfBlocks : Int -> Int -> Int -> Int 
numOfBlocks w h blocksize =
    (w // blocksize) * (h // blocksize)

backgroundSvg : List Int -> Int -> Int -> Int -> Html.Html msg
backgroundSvg history w h blockSize =
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
        (List.reverse history
            |> List.indexedMap (\i pitchIndex -> mkRect w blockSize (colorOfInt 16 pitchIndex) i)
        )


clip low high x =
    Basics.max low x |> (\y -> Basics.min high y)


colorOfInt : Int -> Int -> String
colorOfInt noOfColors n =
    let
        norm x =
            (x + 1) * 128.0 |> floor |> String.fromInt

        r x =
            sin (x * pi * 2) |> norm

        g x =
            sin ((x + 0.3333) * pi * 2) |> norm

        b x =
            sin ((x + 0.666667) * pi * 2) |> norm
    in
    toFloat n / toFloat noOfColors |> clip 0.0 1.0 |> (\x -> "rgb(" ++ r x ++ "," ++ g x ++ "," ++ b x ++ ")")
