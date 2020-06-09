import { ADD_PALETTE, REMOVE_PALETTE } from "./types";

export default (state, action) => {
	switch (action.type) {
		case ADD_PALETTE:
			const copy = state.map((palette) => palette);
			copy.push(action.palette);
			return copy;
		case REMOVE_PALETTE:
			return state.filter((palette) => palette.id !== action.id);
		default:
			return state;
	}
};
