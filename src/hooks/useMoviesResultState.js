import React, { useState } from "react";
const useMoviesResultState = (initialState) => {
	const [movies, setMovies] = useState(initialState);
	const clearMovies = () => {
		setMovies([]);
	};
	const replaceMoviesWith = (movies) => {
		setMovies(movies);
	};
	return [movies, clearMovies, replaceMoviesWith];
};
export default useMoviesResultState;
