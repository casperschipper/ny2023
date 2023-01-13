module Sq exposing (..)

import Random
import Seq exposing (Seq)
import State exposing (State)

type CispST
    = CispST { seed : Random.Seed }


initState : Int -> CispST
initState initialSeed =
    CispST { seed = Random.initialSeed initialSeed }


-- State return, just takes an s and embeds it into a state transformer

type Value 
    = V Int
    | Compute (State CispST Int)

rv : Int -> Int -> Value
rv a b =
    let 
        gen = 
            Random.int a b

        f : CispST -> (Int,CispST)
        f (CispST st) =
            Random.step gen st.seed |> (\(value,newSeed) -> (value, CispST { seed = newSeed })) 

        rst : State CispST Int
        rst =   
            State.advance f

    in
    Compute (rst) 

repeat : Int -> Value -> Seq Value
repeat n value =
    if n < 1 then
        Seq.Nil
    else
        Seq.Cons value (\() -> repeat (n - 1) value)

toList : CispST -> Seq Value -> List Int
toList state sq =
    let 
        states = 
            Seq.map (\value ->
                case value of
                    V i -> State.state i
            
                    Compute st -> st 
                ) sq
    in
    State.finalValue state (states |> Seq.toList |> State.combine) 


-- An infinite sequence of random number between a and b


