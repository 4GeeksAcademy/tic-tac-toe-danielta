import React from "react";
import Game from "./game";

const Selector = ({setCurrPlayer}) => {
    return (
        <div className="screen1">
            <div className="pickWeapon">Pick A Weapon</div>
            <div className="selectorBox">
                <div className="chooseWeapon">CHOOSE YOUR WEAPON</div>
                <div className="nameBox">
                    <input id="player1" placeholder="Player 1 Name"></input>
                    <input id="player2" placeholder="Player 2 Name"></input>
                </div>
                <div id="clickXo">
                    <h3 id="X" onClick={() => setCurrPlayer("X")}>X</h3>
                    <h3 id="O" onClick={() => setCurrPlayer("O")}>O</h3>
                </div>
            </div>
        </div>
    )
}

export default Selector;