import React from "react";
import { useState } from "react";



const Game = () => {
    const [boxValues, setBoxValues] = useState(["", "", "", "", "", "", "", "", ""]);
    const [currPlayer, setCurrPlayer] = useState("X");


    const reset = () => {
        setBoxValues(["", "", "", "", "", "", "", "", ""])
    }

    let winningCombos = [
        [1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,1],
        [1,0,0,1,0,0,1,0,0],
        [0,1,0,0,1,0,0,1,0],
        [0,0,1,0,0,1,0,0,1],
        [1,0,0,0,1,0,0,0,1],
        [0,0,1,0,1,0,1,0,0]
    ]

    const winCheck = (newValues) => {
        let winner = null;
        winningCombos.forEach((combo) => {
            var match = 0;
            combo.forEach((element, index) => {
                if (element == 1) {
                    if (newValues[index] == currPlayer) {
                        match += 1;
                        if (match == 3) {
                            winner = currPlayer;
                        }
                    }
                }
            })
            console.log(match)
        })
        return winner;
    }

    const nextMove = (index) => {
        if (boxValues[index] == ""){ 
            let newValues = [...boxValues];
            newValues[index] = currPlayer;
            setBoxValues(newValues);
            if (winCheck() == currPlayer) {
                console.log(currPlayer + "has won!")
            } else {
            setCurrPlayer(currPlayer == "X" ? "O" : "X")
            }
        }
    }


    return (
        <div id="gameBox">
            <div id= "turnIndicator" style={{color: currPlayer == "X" ? "blue" : "red"}}>It is {currPlayer} turn</div>
            <button onClick= {() => reset()} id="restart">Start over</button>
            <div id="game">
                <div id="row1" className="row">
                    <div onClick={() => nextMove(0)} className="col-4" style={{borderBottom: "1px solid white", color: boxValues[0] == "X" ? "blue" : "red" }}>{boxValues[0]}</div>
                    <div onClick={() => nextMove(1)} className="col-4" style={{borderBottom: "1px solid white", color: boxValues[1] == "X" ? "blue" : "red", borderLeft: "1px solid white", borderRight: "1px solid white"}}>{boxValues[1]}</div>
                    <div onClick={() => nextMove(2)} className="col-4" style={{borderBottom: "1px solid white", color: boxValues[2] == "X" ? "blue" : "red"}}>{boxValues[2]}</div>
                </div>
                <div id="row2" className="row">
                    <div onClick={() => nextMove(3)} className="col-4" style={{color: boxValues[3] == "X" ? "blue" : "red"}}>{boxValues[3]}</div>
                    <div onClick={() => nextMove(4)} className="col-4" style={{borderLeft: "1px solid white", color: boxValues[4] == "X" ? "blue" : "red", borderRight: "1px solid white"}}>{boxValues[4]}</div>
                    <div onClick={() => nextMove(5)} className="col-4" style={{color: boxValues[5] == "X" ? "blue" : "red" }}>{boxValues[5]}</div>
                </div>
                <div id="row3" className="row">
                    <div onClick={() => nextMove(6)} className="col-4" style={{borderTop: "1px solid white", color: boxValues[6] == "X" ? "blue" : "red"}}>{boxValues[6]}</div>
                    <div onClick={() => nextMove(7)} className="col-4" style={{borderTop: "1px solid white", color: boxValues[7] == "X" ? "blue" : "red", borderLeft: "1px solid white", borderRight: "1px solid white"}}>{boxValues[7]}</div>
                    <div onClick={() => nextMove(8)} className="col-4" style={{borderTop: "1px solid white", color: boxValues[8] == "X" ? "blue" : "red"}}>{boxValues[8]}</div>
                </div>
            </div>
        </div>
    )
}

export default Game;