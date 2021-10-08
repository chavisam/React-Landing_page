import React from "react";
import { Jumbo } from "./jumbo.jsx";
import { NavBar } from "./navBar.jsx";
import { Example } from "./example.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>

				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
				<Jumbo />
			</div>
			<Example />
		</div>
	);
};
