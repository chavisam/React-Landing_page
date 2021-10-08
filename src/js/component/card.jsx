import React from "react";

import { rigoImage } from "../../img/rigo-baby.jpg";

export const Card = () => {
	return (
		<div className="card text-center mb-md-0 mb-4">
			<a className="navbar-brand" href="#">
				<img
					src="/rigo-baby.jpg"
					alt="RigoLogo"
					style={{ width: "100%" }}
				/>
			</a>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
