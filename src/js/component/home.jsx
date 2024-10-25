import React from "react";
import Selector from "./selector";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="mainPage">
			<div>Tic Tac Toe in React.js</div>
			<Selector/>
		</div>
	);
};

export default Home;
