import React from "react";
import Palette from "./components/Palette";
import seedMovies from "./data/seedMovies";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Palette {...seedMovies[0]} />
		</div>
	);
}

export default App;
