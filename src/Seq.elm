module Seq exposing (..)

import Random



-- A seq is a lazy list, where you have to provide some context/state to see the rest:


type alias Seq a state =
    state -> ( Node a state, state )



-- When the state is provided, you either get an empty list with the state, or you get a value and the updated state.


type Node a state
    = Cons a (Seq a state)
    | Nil



-- This is an example state for random numbers:


type State
    = State { seed : Random.Seed }


initState : Int -> State
initState initialSeed =
    State { seed = Random.initialSeed initialSeed }



-- An infinite sequence of random number between a and b


rv : Int -> Int -> Seq Int State
rv a b =
    let
        gen =
            Random.int a b

        aux (State st) =
            let
                ( x, s ) =
                    Random.step gen st.seed
            in
            ( Cons x aux, State { seed = s } )
    in
    aux


repeat : Int -> Int -> Seq Int State
repeat n x =
    case n of
        0 ->
            \state -> ( Nil, state )

        nz ->
            \state -> ( Cons x (repeat (nz - 1) x), state )


ofList : List Int -> Seq Int State
ofList lst =
    case lst of
        [] ->
            \st -> ( Nil, st )

        x :: xs ->
            \st -> ( Cons x (ofList xs), st )


toList : State -> Seq Int State -> ( List Int, State )
toList state sq =
    let
        aux lst seq st =
            case seq st of
                ( Nil, s ) ->
                    ( List.reverse lst, s )

                ( Cons x tail, st2 ) ->
                    ( Tuple.first (aux (x :: lst) tail st2), st2 )
    in
    aux [] sq state



{-

   fromList : List a -> Seq state a
   fromList lst =
       List.foldl (\x acc _ -> Cons x acc) empty lst


   foldl : (a -> b -> b) -> b -> Seq state a -> state -> (b, state)
   foldl f acc sq state =
       case sq state of
           (Nil,st) ->
               (acc, st)

           (Cons x xs,st) ->
               let
                   acc2 =
                       f x acc
               in
               (foldl f acc2 xs st)


   toList : Seq state a -> List a
   toList sq =
       foldl (::) [] sq
-}
