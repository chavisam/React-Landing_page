import React from "react";

//create your first component
export const Jumbo = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
				earum aspernatur nostrum provident fuga est magni? Distinctio,
				eius aut mollitia, nam unde assumenda, dicta asperiores
				obcaecati libero perferendis itaque ipsum?
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};
