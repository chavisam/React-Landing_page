import React from "react";
import { Jumbo } from "./jumbo.jsx";
import { NavBar } from "./navBar.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle

import { FourCards } from "./fourCards.jsx";

//create your first component
export const Home = () => {
	return (
		<>
			<NavBar />

			<main className="container-xxl mb-3">
				<Jumbo />
				<FourCards />
			</main>
			<Footer />
		</>
	);
};
