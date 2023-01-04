module Background exposing (backgroundSvg, colorOfInt, cursorBox, numOfBlocks)

import Array exposing (Array)
import Html
import Html.Lazy
import Svg exposing (..)
import Svg.Attributes exposing (..)


coordinatesFromIdx : Int -> Int -> Int -> List (Svg.Attribute msg)
coordinatesFromIdx screenWidth squareWidth i =
    let
        maxw =
            (screenWidth // squareWidth) + 1
    in
    [ x ((safeModBy maxw i * squareWidth) |> String.fromInt)
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


mkRect strk screenWidth squareWidth color x marked =
    let
        border =
            if marked then
                [ stroke strk, strokeWidth "2" ]

            else
                []
    in
    rect
        (coordinatesFromIdx screenWidth squareWidth x
            ++ [ fill <| color
               ]
            ++ border
        )
        []


numOfBlocks : Int -> Int -> Int -> Int
numOfBlocks w h blocksize =
    (w // blocksize) * (h // blocksize)


backgroundSvg : Array Int -> Int -> Int -> Int -> Html.Html msg
backgroundSvg history w h blockSize =
    Html.Lazy.lazy4 justTheBlocks history w h blockSize


cursorBox : Int -> Int -> Array Int -> Int -> Int -> Int -> Html.Html msg
cursorBox currentVoice current history w h blockSize =
    let
        ws =
            String.fromInt w

        hs =
            String.fromInt h

        color =
            history |> Array.get current |> Maybe.withDefault 0

        strk =
            case currentVoice of
                0 ->
                    "rgb(255,0,0)"

                1 ->
                    "rgb(0,255,0)"

                _ ->
                    "rgb(0,0,255)"
    in
    svg [ width ws, height hs, viewBox <| ([ "0", "0", ws, hs ] |> String.join " ") ]
        [ mkRect strk w blockSize (colorOfInt 16 color) current True ]


justTheBlocks : Array Int -> Int -> Int -> Int -> Html.Html msg
justTheBlocks history w h blockSize =
    let
        ws =
            String.fromInt w

        hs =
            String.fromInt h
    in
    svg
        [ width ws
        , height hs
        , viewBox <| ([ "0", "0", ws, hs ] |> String.join " ")
        ]
        (history
            |> Array.indexedMap (\i pitchIndex -> mkRect "" w blockSize (colorOfInt 16 pitchIndex) i False)
            |> Array.toList
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
