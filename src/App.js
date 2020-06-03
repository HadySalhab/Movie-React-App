import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PaletteFinder from "./vo/PaletteFinder";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";

import "./style/App.css";

function App() {
	return (
		<Switch>
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => (
					<Palette
						palette={PaletteFinder.findPaletteById(routeProps.match.params.id)}
					/>
				)}
			/>
			<Route
				exact
				path="/"
				render={() => (
					<PaletteList paletteList={PaletteFinder.getAllPalettes()} />
				)}
			/>
			<Redirect to="/" />
		</Switch>
	);
}

export default App;
