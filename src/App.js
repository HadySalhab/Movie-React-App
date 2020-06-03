import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MoviePalette from "./components/Palette";
import seedMovies from "./data/seedMovies";

import "./style/App.css";

function App() {
	return (
		<Switch>
			<Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
			<Route
				exact
				path="/palette/:id"
				render={() => <h1>Individual Palette</h1>}
			/>
			<Redirect to="/" />
		</Switch>

		// <div className="App">
		// 	<MoviePalette {...seedMovies[0]} />
		// </div>
	);
}

export default App;
