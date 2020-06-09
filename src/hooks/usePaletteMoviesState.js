import React, { useState } from "react";
const usePaletteMoviesState = (initialState) => {
	const [paletteMovies, setPaletteMovies] = useState(initialState);

	const clearMovies = () => {
		setPaletteMovies([]);
	};

	const addMovie = (movieToAdd) => {
		const currentPalette = paletteMovies.map((movie) => movie);
		currentPalette.push(movieToAdd);
		setPaletteMovies(currentPalette);
	};
	const removeMovie = (movieToRemove) => {
		const currentPalette = paletteMovies
			.map((movie) => movie)
			.filter((movie) => movie.id !== movieToRemove.id);
		setPaletteMovies(currentPalette);
	};

	return [paletteMovies, addMovie, removeMovie, clearMovies];
};

export default usePaletteMoviesState;
