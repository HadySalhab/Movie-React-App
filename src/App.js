import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PaletteFinder from "./vo/PaletteFinder";
import Palette from "./page/palette/Palette";
import PaletteList from "./page/palette-list/PaletteList";
import MovieDetail from "./page/movie-detail/MovieDetail";
import NewPalette from "./page/new-palette/NewPalette";
import "./App.css";

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
