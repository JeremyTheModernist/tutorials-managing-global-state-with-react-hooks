import React from "react";
import "./App.css";

import Provider from "./provider/index.js";
import Body from "./body/index.js";

function App() {
	return (
		<Provider>
			<div className="App">
				<Body />
			</div>
		</Provider>
	);
}

export default App;
