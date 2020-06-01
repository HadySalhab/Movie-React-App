import React from "react";
import MoviePalette from "./components/Palette";
import seedMovies from "./data/seedMovies";
import "./style/App.css";

function App() {
	return (
		<div className="App">
			<MoviePalette {...seedMovies[1]} />
		</div>
	);
}

export default App;
