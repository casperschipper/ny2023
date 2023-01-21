module Testing exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Sq
import Test exposing (..)
import State


sqRandomTest =
    let
        foo =
            List.range 1 50 |> Sq.fromList

        bar =
            List.range 50 100 |> List.reverse |> Sq.fromList

        foobar =
            Sq.map2 (\a b -> State.advance (Sq.generateRandom a b)) foo bar
    in
    foobar |> Sq.toListWithState (Sq.initState 0)


sqRandomOutput =
    [ 54, 8, 53, 9, 38, 66, 32, 15, 77, 39, 15, 60, 26, 64, 29, 49, 23, 25, 36, 61, 37, 64, 25, 43, 40, 62, 41, 46, 69, 70, 59, 62, 33, 41, 54, 38, 54, 58, 58, 49, 49, 45, 52, 50, 55, 49, 54, 50, 52, 50 ]


cycleTest =
    let
        foo =
            [ 1, 2, 3, 4 ] |> Sq.fromList

        cyc =
            foo |> Sq.cycle

        snip =
            cyc |> Sq.take 6
    in
    snip |> Sq.toListWithState (Sq.initState 0)


cycleResult =
    [ 1, 2, 3, 4, 1, 2 ]


appendTest =
    let
        foo =
            [ 1, 2, 3 ]

        bar =
            [ 4, 5, 6 ]

        foobar =
            Sq.append (Sq.fromList foo) (Sq.fromList bar) |> Sq.toListWithState (Sq.initState 0)
    in
    { test = foobar
    , result = List.append foo bar
    }

concatTest =
    let
        foo = 
            [1,2,3] |> Sq.fromList 

        inf = 
            Sq.infinite foo 
    in
    inf |> Sq.concat 0 |> Sq.take 6 |> Sq.toListWithState (Sq.initState 0)

concatResult =
    [1,2,3,1,2,3]



zipTest =
    let
        foo = [1,2,3] |> Sq.fromList

        bar = [4,5,6] |> Sq.fromList

        zipped = Sq.zip foo bar
    in
    zipped |> Sq.toListWithState (Sq.initState 0)

zipResult =
    [(1,4),(2,5),(3,6)]


sqTests =
    describe "sqTests"
        [ test "Generate a tendency mask, from where bottom moves 0-50 and top moves 100-50, seed is 0"
            (\_ -> Expect.equal sqRandomTest sqRandomOutput)
        , test "create a cycle, and see if we don't crash"
            (\_ -> Expect.equal cycleTest cycleResult)
        , test "append test"
            (\_ -> Expect.equal appendTest.test appendTest.result)
        , test "concat"
            (\_ -> Expect.equal concatTest concatResult)
        , test "zip"
            (\_ -> Expect.equal zipTest zipResult)
        ]
