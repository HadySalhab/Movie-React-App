import { ADD_PALETTE, REMOVE_PALETTE } from "./types";

export default (state, action) => {
	switch (action.type) {
		case ADD_PALETTE:
			return state.push(action.palette);
		case REMOVE_PALETTE:
			return state.filter((palette) => palette.id !== action.id);
		default:
			return state;
	}
};
