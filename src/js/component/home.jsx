import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Container from "./container.jsx";
import Palito from "./palito.jsx";

//create your first component
const Home = () => {

	return (
		<>
			<div className = "principalContainer">
				<Palito/>		
				<Container/>
			</div>

		</>

	);
};

export default Home;
