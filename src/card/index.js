import React from "react";
import { Store } from "../context";

var { useContext } = React;

const Index = (props) => {
	var [state, setState] = useContext(Store);
	return (
		<div
			style={{
				minHeight: "300px",
				display: "flex",
				flexFlow: "column wrap",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "4px",
				backgroundColor: state.selectedTheme.card,
				color: state.selectedTheme.text,
			}}
		>
			{props.children}
		</div>
	);
};

export default Index;
