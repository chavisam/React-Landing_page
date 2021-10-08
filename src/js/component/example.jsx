import React, { useState } from "react";

export const Example = () => {
	// Declara una nueva variable de estado, la cual llamaremos “count”
	const [title, setTitle] = useState("");

	return (
		<div>
			<h1>{title}</h1>
			<input
				onChange={e => {
					setTitle(e.target.value);
				}}></input>
		</div>
	);
};
