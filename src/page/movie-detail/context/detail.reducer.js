import { SHOW_MOVIE, SHOW_LOADING, SHOW_ALERT } from "./types.js";

export default (state, action) => {
	switch (action.type) {
		case SHOW_MOVIE:
			return {
				detail: action.payload,
				loading: false,
				alert: null,
			};
		case SHOW_LOADING:
			return {
				detail: null,
				loading: true,
				alert: null,
			};
		case SHOW_ALERT:
			return {
				detail: null,
				loading: false,
				alert: action.payload,
			};
		default:
			return state;
	}
};
