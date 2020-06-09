import {
	CLOSE_DRAWER,
	OPEN_DRAWER,
	SHOW_ALERT,
	HIDE_ALERT,
	REMOVE_MOVIE,
	CLEAR_MOVIES,
	ADD_MOVIE,
} from "./type";

export default (state, action) => {
	switch (action.type) {
		case CLOSE_DRAWER:
			return {
				...state,
				open: false,
			};
		case OPEN_DRAWER:
			return {
				...state,
				open: true,
			};
		case SHOW_ALERT:
			return {
				...state,
				alert: action.payload,
			};
		case HIDE_ALERT:
			return {
				...state,
				alert: null,
			};
		case REMOVE_MOVIE:
			const copy = state.paletteMovies.map((m) => m);
			const updated = copy.filter((movie) => movie.id !== action.payload.id);
			return {
				...state,
				paletteMovies: updated,
			};
		case CLEAR_MOVIES:
			return {
				...state,
				paletteMovies: [],
			};
		case ADD_MOVIE:
			return {
				...state,
				paletteMovies: [...state.paletteMovies, action.payload],
			};
		default:
			return state;
	}
};
