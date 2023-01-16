module Sq exposing (..)

import Dict exposing (Dict)
import Main exposing (PitchClass(..))
import Random
import Seq exposing (Seq)
import State exposing (State)


type CispST
    = CispST
        { seed : Random.Seed
        , dict : Dict String Int
        }


initState : Int -> CispST
initState initialSeed =
    CispST { seed = Random.initialSeed initialSeed, dict = Dict.empty }



-- State return, just takes an s and embeds it into a state transformer


type Value
    = V Int
    | Compute (State CispST Int)


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
    Compute rst


toList : CispST -> Seq Value -> List Int
toList state sq =
    let
        states =
            Seq.map
                (\value ->
                    case value of
                        V i ->
                            State.state i

                        Compute st ->
                            st
                )
                sq
    in
    State.finalValue state (states |> Seq.toList |> State.combine)


myList =
    [ V 3, V 9, V 2, rv 10 20, rv 100 200, rv 10 200 ] |> Seq.fromList |> Seq.cycle


lstA =
    [ 1, 2, 3, 4 ] |> List.map V |> Seq.fromList |> Seq.cycle


lstB =
    [ 33, 22, 11 ] |> List.map V |> Seq.fromList |> Seq.cycle


lstC =
    [ 100, 200, 300, 400, 500 ] |> List.map V |> Seq.fromList |> Seq.cycle


combi : List Int
combi =
    [ lstA, lstB, lstC ] |> Seq.fromList |> Seq.transpose |> Seq.concat |> Seq.take 100 |> toList (initState 3)



-- An infinite sequence of random number between a and b
