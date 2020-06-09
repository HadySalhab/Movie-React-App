import React, { createContext } from "react";
import seedMovies from "../../data/seedMovies";
import { useLocalStorageReducer } from "../../hooks/useLocalStorageReducer";
import palettesReducer from "./palettes.reducer";
import { ADD_PALETTE, REMOVE_PALETTE } from "./types";

export const PalettesContext = createContext();
export const DispatchPalettesContext = createContext();

const defaultPalettes = seedMovies;

export const PalettesProvider = (props) => {
	const [palettes, dispatch] = useLocalStorageReducer(
		"palettes",
		defaultPalettes,
		palettesReducer
	);

	const addPalette = (palette) => dispatch({ type: ADD_PALETTE, palette });
	const removePalette = (id) => dispatch({ type: REMOVE_PALETTE, id });

	return (
		<PalettesContext.Provider value={palettes}>
			<DispatchPalettesContext.Provider value={{ addPalette, removePalette }}>
				{props.children}
			</DispatchPalettesContext.Provider>
		</PalettesContext.Provider>
	);
};
export default PalettesProvider;
