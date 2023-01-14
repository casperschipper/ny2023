module Seq exposing (..)

import Html exposing (a)


type alias Seq a =
    () -> Node a


type Node a
    = Cons a (Seq a)
    | Nil


toList : Seq a -> List a
toList sq =
    case sq () of
        Nil ->
            []

        Cons x tail ->
            x :: toList tail


empty : Seq a
empty () =
    Nil

fromList : List a -> Seq a
fromList lst () =
    case lst of
        [] ->
            Nil

        x :: xs ->
            Cons x (fromList xs)


repeat : Int -> a -> Seq a
repeat n x () =
    if n < 1 then
        Nil

    else
        Cons x (repeat (n - 1) x)


map : (a -> b) -> Seq a -> Seq b
map f sq () =
    case sq () of
        Cons x tail ->
            Cons (f x) (map f tail)

        Nil ->
            Nil


take : Int -> Seq a -> Seq a
take n sq () =
    if n < 1 then
        Nil

    else
        case sq () of
            Nil ->
                Nil

            Cons x tail ->
                Cons x (take (n - 1) tail)


filter_map : (a -> Maybe b) -> Seq a -> Seq b
filter_map f sq () =
    case sq () of
        Cons x tail ->
            case f x of
                Just x2 ->
                    Cons x2 (filter_map f tail)

                Nothing ->
                    filter_map f tail ()

        Nil ->
            Nil


unzip : Seq ( a, b ) -> ( Seq a, Seq b )
unzip sq =
    ( map Tuple.first sq, map Tuple.second sq )


uncons : Seq a -> Maybe ( a, Seq a )
uncons sq =
    case sq () of
        Cons x tail ->
            Just ( x, tail )

        Nil ->
            Nothing


peel : Seq (Seq a) -> ( Seq a, Seq (Seq a) )
peel sqq =
    sqq |> filter_map uncons |> unzip


append : Seq a -> Seq a -> Seq a
append s1 s2 () =
    case s1 () of
        Nil ->
            s2 ()

        Cons x tail ->
            Cons x (append tail s2)

cycle_nonempty : (Seq a) -> Seq a
cycle_nonempty xs () =
  append xs (cycle_nonempty xs) ()


cycle : Seq a -> Seq a 
cycle sq () =
    case sq () of
        Nil -> Nil

        Cons x tail -> Cons x (append tail (cycle_nonempty tail))





concat : Seq (Seq a) -> Seq a
concat sqq () =
    case sqq () of
        Nil ->
            Nil

        Cons x tail ->
            append x (concat tail) ()


isEmpty : Seq a -> Bool
isEmpty sq =
    case sq () of
        Nil ->
            True

        Cons _ _ ->
            False


transpose : Seq (Seq a) -> Seq (Seq a)
transpose sqq () =
    let
        ( heads, tails ) =
            peel sqq
    in
    if isEmpty heads then
        Nil

    else
        Cons heads (transpose tails)


transcat : Seq (Seq a) -> Seq a
transcat =
    transpose >> concat
