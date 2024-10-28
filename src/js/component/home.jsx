import React from "react";
import Selector from "./selector";
import Game from "./game";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {
	const [currPlayer, setCurrPlayer] = useState("");
    const [winner, setWinner] = useState("")

	return (
		<div className="mainPage">
			<div>Tic Tac Toe in React.js</div>
			{ 
				currPlayer ? 
			(<Game currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} winner={winner} setWinner={setWinner}/>)
			:
			(<Selector currPlayer={currPlayer} setCurrPlayer={setCurrPlayer}/>)
			}			
		</div>
	);
};

export default Home;
