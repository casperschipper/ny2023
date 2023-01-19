module Sq exposing (..)

import Dict exposing (Dict)
import Main exposing (PitchClass(..))
import Random
import Seq exposing (Node(..), Seq)
import State exposing (State, state)


type CispST
    = CispST
        { seed : Random.Seed
        , dict : Dict String Int
        }


generateRandom : Int -> Int -> CispST -> ( Int, CispST )
generateRandom a b (CispST state) =
    let
        ( x, newSeed ) =
            Random.step (Random.int a b) state.seed
    in
    ( x, CispST { state | seed = newSeed } )



-- Insight one:
{-
   Seq.t is a state machine with only internal (hidden) state.

   State.t is a state machine, but the state is explicit and external

   Bus seq's require that the

   map2 rvi (st 1,sideffect (~bus "casper" (rv 1 10))) (~bus "casper")



   Open question:

   Should the internal state be exposed ? How to combine Seq's with internal and external state?


-}


type alias SeqSt value state =
    () -> Node value state


type Node value state
    = Cons
        (state
         ->
            { value : value
            , state : state
            , rest : SeqSt value state
            }
        )
    | Nil


identity x =
    x


empty : SeqSt value state
empty () =
    Nil


return : value -> SeqSt value state
return x () =
    Cons
        (\state ->
            { state = state
            , value = x
            , rest = empty
            }
        )


cons : value -> SeqSt value state -> SeqSt value state
cons x seq () =
    Cons
        (\state ->
            { state = state
            , value = x
            , rest = seq
            }
        )


infinite : value -> SeqSt value state
infinite x () =
    Cons
        (\state ->
            { state = state
            , value = x
            , rest = infinite x
            }
        )


map : (a -> b) -> SeqSt a state -> SeqSt b state
map f sq () =
    case sq () of
        Nil ->
            Nil

        Cons statef ->
            Cons
                (\s ->
                    let
                        newState =
                            statef s
                    in
                    { state = newState.state
                    , value = f newState.value
                    , rest = map f newState.rest
                    }
                )


countFrom : Int -> SeqSt Int state
countFrom current () =
    Cons
        (\state ->
            { value = current
            , state = state
            , rest = countFrom (current + 1)
            }
        )


count : SeqSt Int state
count =
    countFrom 0


fromList : List a -> SeqSt a state
fromList lst () =
    case lst of
        [] ->
            Nil

        x :: xs ->
            Cons
                (\state ->
                    { value = x
                    , state = state
                    , rest = fromList xs
                    }
                )


toListHelper : state -> List a -> SeqSt a state -> List a
toListHelper state acc sq =
    case sq () of
        Nil ->
            List.reverse acc

        Cons fs ->
            let
                newState =
                    fs state
            in
            toListHelper newState.state (newState.value :: acc) newState.rest


toListWithState : state -> SeqSt a state -> List a
toListWithState state sq =
    toListHelper state [] sq


map2 : (a -> b -> c) -> SeqSt a state -> SeqSt b state -> SeqSt c state
map2 f sq1 sq2 () =
    case sq1 () of
        Nil ->
            Nil

        Cons state1 ->
            case sq2 () of
                Nil ->
                    Nil

                Cons state2 ->
                    Cons
                        (\s ->
                            let
                                newState1 =
                                    state1 s

                                newState2 =
                                    state2 newState1.state

                                finalState1 =
                                    { newState1 | state = newState2.state }
                            in
                            { value = f newState1.value newState2.value
                            , state = newState2.state
                            , rest = map2 f finalState1.rest newState2.rest
                            }
                        )


map2st : (a -> b -> (state -> ( c, state ))) -> SeqSt a state -> SeqSt b state -> SeqSt c state
map2st f sq1 sq2 () =
    case sq1 () of
        Nil ->
            Nil

        Cons state1 ->
            case sq2 () of
                Nil ->
                    Nil

                Cons state2 ->
                    Cons
                        (\s ->
                            let
                                newState1 =
                                    state1 s

                                newState2 =
                                    state2 newState1.state

                                ( value, finalState ) =
                                    f newState1.value newState2.value newState2.state
                            in
                            { value = value
                            , state = finalState
                            , rest = map2st f newState1.rest newState2.rest
                            }
                        )


rv : SeqSt Int CispST -> SeqSt Int CispST -> SeqSt Int CispST
rv asq bsq =
    map2st generateRandom asq bsq


append : SeqSt a state -> SeqSt a state -> SeqSt a state
append s1 s2 () =
    case s1 () of
        Nil ->
            s2 ()

        Cons fs ->
            Cons
                (\s ->
                    let
                        newState =
                            fs s
                    in
                    { newState
                        | rest = append newState.rest s2
                    }
                )


cycle_nonempty : SeqSt a state -> SeqSt a state
cycle_nonempty xs () =
    append xs (cycle_nonempty xs) ()


cycle : SeqSt a state -> SeqSt a state
cycle sq () =
    case sq () of
        Nil ->
            -- to prevent infinite loop
            Nil

        Cons _ ->
            cycle_nonempty sq ()


take : Int -> SeqSt a state -> SeqSt a state
take n sq () =
    if n < 1 then
        Nil

    else
        case sq () of
            Nil ->
                Nil

            Cons fs ->
                Cons
                    (\s ->
                        let
                            newstate =
                                fs s
                        in
                        { newstate
                            | rest = take (n - 1) newstate.rest
                        }
                    )


recursive : SeqSt msg state -> (msg -> a -> a) -> a -> (a -> b) -> SeqSt b state
recursive control update init eval () =
    case control () of
        Nil ->
            Nil

        Cons fs ->
            Cons
                (\st ->
                    let
                        newState =
                            fs st

                        myMsg =
                            newState.value

                        newModel =
                            update myMsg init

                        output =
                            eval newModel
                    in
                    { value = output
                    , state = newState.state
                    , rest = recursive newState.rest update newModel eval
                    }
                )


recursiveNoControl : (a -> ( value, a )) -> a -> SeqSt value state
recursiveNoControl update init () =
    Cons
        (\st ->
            let
                ( v, model ) =
                    update init
            in
            { state = st
            , value = v
            , rest = recursiveNoControl update model
            }
        )


concat : a -> SeqSt (SeqSt a state) state -> SeqSt a state
concat x sqq () =
    case sqq () of
        Nil ->
            Nil

        Cons fs ->
            Cons
                (\s ->
                    let
                        newState =
                            fs s

                        first =
                            newState.value

                        rest =
                            newState.rest
                    in
                    { state = newState.state
                    , value = x
                    , rest = append first (concat x rest) 
                    }
                )



{- not tail recursive
   case sqq () of
       Nil ->
           Nil

       Cons x tail ->
           append x (concat tail) ()
-}


initState : Int -> CispST
initState initialSeed =
    CispST { seed = Random.initialSeed initialSeed, dict = Dict.empty }



{-

   -- State return, just takes an s and embeds it into a state transformer
   -- What if we use the TEA model, where there is a running machine that we send message to if we need it.


   type alias Value =
       State CispST Int


   rv : Int -> Int -> Value
   rv a b =
       let
           gen =
               Random.int a b

           f : CispST -> ( Int, CispST )
           f (CispST st) =
               Random.step gen st.seed |> (\( value, newSeed ) -> ( value, CispST { st | seed = newSeed } ))

           rst : State CispST Int
           rst =
               State.advance f
       in
       rst


   toList : CispST -> Seq Value -> List Int
   toList state sq =
       State.finalValue state (sq |> Seq.toList |> State.combine)


   i : Int -> Value
   i x =
       State.state x


   myList =
       [ i 3, i 9, i 2, rv 10 20, rv 100 200, rv 10 200 ] |> Seq.fromList |> Seq.cycle


   lstA =
       [ 1, 2, 3, 4 ] |> List.map i |> Seq.fromList |> Seq.cycle


   lstB =
       [ 33, 22, 11 ] |> List.map i |> Seq.fromList |> Seq.cycle


   lstC =
       [ 100, 200, 300, 400, 500 ] |> List.map i |> Seq.fromList |> Seq.cycle


   combi : List Int
   combi =
       [ lstA, lstB, lstC ] |> Seq.fromList |> Seq.transpose |> Seq.concat |> Seq.take 100 |> toList (initState 3)



   -- An infinite sequence of random number between a and b
-}
