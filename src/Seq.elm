module Seq exposing (..)


type alias Seq a =
    () -> Node a


type Node a
    = Cons a (Seq a)
    | Nil


lengthHelper : Seq a -> Int -> Int
lengthHelper seq acc =
    case seq () of
        Nil ->
            acc

        Cons _ tail ->
            lengthHelper tail (1 + acc)


length : Seq a -> Int
length sq =
    lengthHelper sq 0


toList : Seq a -> List a
toList sq =
    let
        aux seq acc =
            case seq () of
                Nil ->
                    acc |> List.reverse

                Cons x tail ->
                    aux tail (x :: acc)
    in
    aux sq []


empty : Seq a
empty () =
    Nil


fromListHelper : List a -> Seq a -> Seq a
fromListHelper lst acc =
    case lst of
        [] ->
            reverse acc

        x :: xs ->
            fromListHelper xs (\() -> Cons x acc)


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




mapHelper : (a -> b) -> Seq a -> Seq b -> Seq b
mapHelper fn sq acc =
    case sq () of
        Nil ->
            reverse acc

        Cons x xs ->
            mapHelper fn xs (\() -> Cons (fn x) acc)


map : (a -> b) -> Seq a -> Seq b
map f sq =
    mapHelper f sq empty

map2 : (a -> b -> c) -> Seq a -> Seq b -> Seq c
map2 f sq1 sq2 () =
    case sq1 () of
        Nil -> Nil

        Cons x xs -> 
            case sq2 () of
                Nil -> Nil

                Cons x2 xs2 ->
                    Cons (f x x2) (map2 f xs xs2)

hold : Seq Int -> Seq a -> Seq a
hold holder input =
    map2 repeat holder input |> concat
 
andThen : (a -> Seq b) -> Seq a -> Seq b
andThen f sq =
    map f sq |> concat


foldl : (acc -> a -> acc) -> acc -> Seq a -> acc
foldl f acc sq =
    case sq () of
        Nil ->
            acc

        Cons x xs ->
            foldl f (f acc x) xs


reverseHelper : Seq a -> Seq a -> Seq a
reverseHelper seq acc =
    case seq () of
        Nil ->
            acc

        Cons x xs ->
            reverseHelper xs (\() -> Cons x acc)


cons : a -> Seq a -> Seq a
cons x sq () =
    Cons x sq


flip : (a -> b -> c) -> b -> a -> c
flip f x y =
    f y x


reverse : Seq a -> Seq a
reverse sq =
    foldl (flip cons) empty sq


zip : Seq a -> Seq b -> Seq ( a, b )
zip sq1 sq2 () =
    let
        helper sq11 sq22 acc () =
            case sq11 () of
                Nil ->
                    acc

                Cons x tail ->
                    case sq22 () of
                        Nil ->
                            Nil

                        Cons x2 tail2 ->
                            helper tail tail2 (Cons ( x, x2 ) (\() -> acc)) ()
    in
    reverse (helper sq1 sq2 Nil) ()


andMap : Seq (a -> b) -> Seq a -> Seq b
andMap fsq sq =
    zip fsq sq |> map (\( f, x ) -> f x)


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


cycle_nonempty : Seq a -> Seq a
cycle_nonempty xs () =
    append xs (cycle_nonempty xs) ()


cycle : Seq a -> Seq a
cycle sq () =
    {- not tail recursive -}
    case sq () of
        Nil ->
            Nil

        Cons x tail ->
            Cons x (append tail (cycle_nonempty tail))


concat : Seq (Seq a) -> Seq a
concat sqq () =
    {- not tail recursive -}
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
    {-
       1 2 3
       4 5 6
       7 8 9

       1 4 7
       2 5 8
       3 6 9

       Not tail recursive !
    -}
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
