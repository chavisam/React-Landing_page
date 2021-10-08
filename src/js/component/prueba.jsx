import React, { useState } from "react";

export const Example = () => {
	// Declara una nueva variable de estado, la cual llamaremos “count”
	const [count, setCount] = useState("");

	return (
		<div>
			<p>You clicked {count} times</p>
			<input
				onChange={e => {
					setCount(e.target.value);
				}}>
				Click me
			</input>
		</div>
	);
};
