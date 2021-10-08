import React from "react";
import { Jumbo } from "./jumbo.jsx";
import { NavBar } from "./navBar.jsx";
import { Example } from "./example.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FourCards } from "./fourCards.jsx";
import { Footer } from "./footer.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="cotainer-fluid">
			<div className="container">
				<NavBar />
				<Jumbo />
				<FourCards />
			</div>

			<p className="text-center bg-secondary text-white h-25 fixex-bottom p-3 mt-3">
				Copyright &copy; 2021 www.jmanvel.com
			</p>
		</div>
	);
};
