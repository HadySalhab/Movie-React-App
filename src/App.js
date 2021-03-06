import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Palette from "./page/palette/Palette";
import PaletteList from "./page/palette-list/PaletteList";
import MovieDetail from "./page/movie-detail/MovieDetail";
import NewPalette from "./page/new-palette/NewPalette";
import "./App.css";
import PalettesProvider from "./context/app/palettes.context";
import DetailProvider from "./page/movie-detail/context/detail.context";

function App() {
	return (
		<Switch>
			<Route
				exact
				path="/movies/:movieName"
				render={(routeProps) => (
					<DetailProvider>
						<MovieDetail {...routeProps} />
					</DetailProvider>
				)}
			/>
			<Route
				exact
				path="/palette/new"
				render={(routeProps) => (
					<PalettesProvider>
						<NewPalette {...routeProps} />
					</PalettesProvider>
				)}
			/>

			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => (
					<PalettesProvider>
						<Palette {...routeProps} />
					</PalettesProvider>
				)}
			/>
			<Route
				exact
				path="/"
				render={(routeProps) => (
					<PalettesProvider>
						<PaletteList {...routeProps} />
					</PalettesProvider>
				)}
			/>
			<Redirect to="/" />
		</Switch>
	);
}

export default App;
