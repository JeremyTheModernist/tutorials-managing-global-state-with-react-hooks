import React from "react";
import { Store } from "../context/index";

var { useState } = React;

var themes = {
	mode: "light",
	selectedTheme: {
		text: "black",
		background: "white",
		primary: "#1FD2FF",
		card: "rgba(0,0,0,.1)",
	},
	light: {
		text: "black",
		background: "white",
		primary: "#1FD2FF",
		card: "rgba(0,0,0,.1)",
	},
	dark: {
		text: "white",
		background: "black",
		primary: "#F2B4BA",
		card: "rgba(255,255,255,.2)",
	},
};

const Index = (props) => {
	const [state, setState] = useState(themes);
	return (
		<Store.Provider value={[state, setState]}>
			{props.children}
		</Store.Provider>
	);
};

export default Index;
