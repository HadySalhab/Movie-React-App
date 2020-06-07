import React, { useState, useEffect } from "react";
import tmdbClient from "../../vo/TmdbClient";
import StringHelper from "../../vo/StringHelper";
import PaletteFinder from "../../vo/PaletteFinder";
import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";
import MyMain from "./components/MyMain";
import useStyles from "./style/NewPaletteStyle";
import useDrawerState from "../../hooks/useDrawerState";

export default function NewPalette(props) {
	const classes = useStyles();
	const [open, handleDrawerClose, handleDrawerOpen] = useDrawerState(true);
	const [movies, setMovies] = useState([]);
	const [paletteMovies, setPaletteMovies] = useState([]);
	const clearPalette = () => {
		setPaletteMovies([]);
	};

	const [infoAlert, setInfoAlert] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);

	const searchMovie = async (value) => {
		setMovies([]);
		const movies = await tmdbClient.searchMovie(value);
		setMovies(movies.results);
	};

	const handleLearnMore = (id) => {
		window.open(`/movies/${id}`);
	};
	const handleAddOrRemove = (id, type) => {
		if (type === "add") {
			addMovieToPalette(id);
		} else {
			removeMovieFromPalette(id);
		}
	};
	const addMovieToPalette = (id) => {
		const isMovieInPalette = paletteMovies.some((movie) => movie.id === id);
		if (isMovieInPalette) {
			setInfoAlert(true);
			setTimeout(() => {
				setInfoAlert(false);
			}, 2000);
		} else {
			const movie = movies.find((mov) => mov.id === id);
			const currentPalette = paletteMovies.map((movie) => movie);
			currentPalette.push(movie);
			setPaletteMovies(currentPalette);
		}
	};

	const removeMovieFromPalette = (id) => {
		const currentPalette = paletteMovies
			.map((movie) => movie)
			.filter((movie) => movie.id !== id);
		setPaletteMovies(currentPalette);
	};

	const clearResults = () => {
		setMovies([]);
	};
	const savePalette = (input) => {
		if (paletteMovies.length === 0) {
			setErrorAlert(true);
			setTimeout(() => {
				setErrorAlert(false);
			}, 2000);
			return;
		}
		const newPalette = {
			paletteName: input,
			id: StringHelper.replaceWhiteSpacesWithDash(input),
			emoji: "🎨",
			movies: paletteMovies,
		};
		PaletteFinder.addPalettesToSeed(newPalette);
		props.history.push("/");
	};

	return (
		<div className={classes.root}>
			<MyAppBar
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				savePalette={savePalette}
			/>

			<MyDrawer
				open={open}
				handleDrawerClose={handleDrawerClose}
				searchMovie={searchMovie}
				paletteMovies={paletteMovies}
				clearPalette={clearPalette}
				movies={movies}
				clearResults={clearResults}
				handleLearnMore={handleLearnMore}
				handleAddOrRemove={handleAddOrRemove}
			/>
			<MyMain
				open={open}
				infoAlert={infoAlert}
				errorAlert={errorAlert}
				paletteMovies={paletteMovies}
				handleAddOrRemove={handleAddOrRemove}
				handleLearnMore={handleLearnMore}
			/>
		</div>
	);
}
