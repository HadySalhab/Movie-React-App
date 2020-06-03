import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PaletteFinder from "./vo/PaletteFinder";
import Palette from "./components/Palette";

import "./style/App.css";

function App() {
	return (
		<Switch>
			<Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => (
					<Palette
						palette={PaletteFinder.findPaletteById(routeProps.match.params.id)}
					/>
				)}
			/>
			<Redirect to="/" />
		</Switch>

		// <div className="App">
		// 	<MoviePalette {...seedMovies[0]} />
		// </div>
	);
}

export default App;
