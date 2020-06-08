import React, { useState } from "react";
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
	const [paletteMovies, setPaletteMovies] = useState([]);
	const clearPalette = () => {
		setPaletteMovies([]);
	};

	const [infoAlert, setInfoAlert] = useState(false);

	const handleLearnMore = (id) => {
		window.open(`/movies/${id}`);
	};
	const handleAddOrRemove = (movie, type) => {
		if (type === "add") {
			addMovieToPalette(movie);
		} else {
			removeMovieFromPalette(movie);
		}
	};
	const addMovieToPalette = (movieToAdd) => {
		console.log(movieToAdd);
		const isMovieInPalette = paletteMovies.some(
			(movie) => movie.id === movieToAdd.id
		);
		if (isMovieInPalette) {
			setInfoAlert(true);
			setTimeout(() => {
				setInfoAlert(false);
			}, 2000);
		} else {
			const currentPalette = paletteMovies.map((movie) => movie);
			currentPalette.push(movieToAdd);
			setPaletteMovies(currentPalette);
		}
	};

	const removeMovieFromPalette = (movieToRemove) => {
		const currentPalette = paletteMovies
			.map((movie) => movie)
			.filter((movie) => movie.id !== movieToRemove.id);
		setPaletteMovies(currentPalette);
	};

	const onPaletteSaved = (paletteName, emoji) => {
		const createdPalette = {
			paletteName,
			emoji,
			movies: paletteMovies,
			id: StringHelper.replaceWhiteSpacesWithDash(paletteName),
		};
		PaletteFinder.addPalettesToSeed(createdPalette);
		props.history.push("/");
	};

	return (
		<div className={classes.root}>
			<MyAppBar
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				paletteMovies={paletteMovies}
				onPaletteSaved={onPaletteSaved}
			/>

			<MyDrawer
				open={open}
				handleDrawerClose={handleDrawerClose}
				paletteMovies={paletteMovies}
				clearPalette={clearPalette}
				handleAddOrRemove={handleAddOrRemove}
				handleLearnMore={handleLearnMore}
			/>
			<MyMain
				open={open}
				infoAlert={infoAlert}
				paletteMovies={paletteMovies}
				handleAddOrRemove={handleAddOrRemove}
				handleLearnMore={handleLearnMore}
			/>
		</div>
	);
}
