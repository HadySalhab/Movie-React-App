import React, { useState } from "react";
import StringHelper from "../../vo/StringHelper";
import PaletteFinder from "../../vo/PaletteFinder";
import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";
import MyMain from "./components/MyMain";
import useStyles from "./style/NewPaletteStyle";
import useDrawerState from "../../hooks/useDrawerState";
import usePaletteMoviesState from "../../hooks/usePaletteMoviesState";
import useAlertState from "../../hooks/useAlertState";

export default function NewPalette(props) {
	const classes = useStyles();
	const [open, handleDrawerClose, handleDrawerOpen] = useDrawerState(true);
	const [alert, showAlertFor] = useAlertState(false);
	const [
		paletteMovies,
		addMovie,
		removeMovie,
		clearMovies,
	] = usePaletteMoviesState([]);

	const handleLearnMore = (id) => {
		window.open(`/movies/${id}`);
	};
	const handleAddOrRemove = (movie, type) => {
		if (type === "add") {
			addMovieToPalette(movie);
		} else {
			removeMovie(movie);
		}
	};
	const addMovieToPalette = (movieToAdd) => {
		const isMovieInPalette = paletteMovies.some(
			(movie) => movie.id === movieToAdd.id
		);
		if (isMovieInPalette) {
			showAlertFor(2000);
		} else {
			addMovie(movieToAdd);
		}
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
				clearPalette={clearMovies}
				handleAddOrRemove={handleAddOrRemove}
				handleLearnMore={handleLearnMore}
			/>
			<MyMain
				open={open}
				alert={alert}
				paletteMovies={paletteMovies}
				handleAddOrRemove={handleAddOrRemove}
				handleLearnMore={handleLearnMore}
			/>
		</div>
	);
}
