import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PaletteFinder from "./vo/PaletteFinder";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import MovieDetail from "./components/MovieDetail";
import NewPalette from "./components/NewPalette";
import "./style/App.css";

function App() {
	return (
		<Switch>
			<Route
				exact
				path="/movies/:movieName"
				render={(routeProps) => <MovieDetail {...routeProps} />}
			/>
			<Route
				exact
				path="/palette/new"
				render={(routeProps) => <NewPalette {...routeProps} />}
			/>

			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => (
					<Palette
						{...routeProps}
						palette={PaletteFinder.findPaletteById(routeProps.match.params.id)}
					/>
				)}
			/>
			<Route
				exact
				path="/"
				render={(routeProps) => (
					<PaletteList
						{...routeProps}
						paletteList={PaletteFinder.getAllPalettes()}
					/>
				)}
			/>
			<Redirect to="/" />
		</Switch>
	);
}

export default App;
