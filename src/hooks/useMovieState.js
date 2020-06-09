import React, { useState } from "react";
const useMovieState = (initialState) => {
	const [movie, setMovie] = useState(initialState);

	const updateMovie = (movie) => {
		setMovie(movie);
	};
	return [movie, updateMovie];
};
export default useMovieState;
