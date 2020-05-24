import React from "react";
import { Store } from "../context/index.js";

var { useContext } = React;

const Index = () => {
	var [state, setState] = useContext(Store);
	function toggleTheme() {
		setState((previousState) => {
			return {
				...previousState,
				mode: previousState.mode === "light" ? "dark" : "light",
				selectedTheme:
					previousState.mode === "light"
						? previousState.dark
						: previousState.light,
			};
		});
	}
	return (
		<button
			style={{
				outline: "none",
				border: "none",
				borderRadius: "4px",
				paddingLeft: "30px",
				paddingRight: "30px",
				paddingTop: "15px",
				paddingBottom: "15px",
				textAlign: "center",
				fontWeight: "bold",
				fontSize: "14px",
				cursor: "pointer",
				backgroundColor: state.selectedTheme.primary,
			}}
			onClick={toggleTheme}
		>
			Toggle Theme
		</button>
	);
};

export default Index;
