import React, { createContext, useReducer } from "react";
import NewReducer from "./new.reducer";
import {
	CLOSE_DRAWER,
	OPEN_DRAWER,
	SHOW_ALERT,
	HIDE_ALERT,
	REMOVE_MOVIE,
	CLEAR_MOVIES,
	ADD_MOVIE,
} from "./type";

export const NewContext = createContext();
export const DispatchNewContext = createContext();
export const NewProvider = (props) => {
	const initialState = {
		open: true,
		alert: null,
		paletteMovies: [],
	};
	const [state, dispatch] = useReducer(NewReducer, initialState);

	const closeDrawer = () => dispatch({ type: CLOSE_DRAWER });
	const openDrawer = () => dispatch({ type: OPEN_DRAWER });
	const showAlert = (msg, type) =>
		dispatch({ type: SHOW_ALERT, payload: { msg, type } });
	const hideAlert = () => dispatch({ type: HIDE_ALERT });
	const clearMovies = () => dispatch({ type: CLEAR_MOVIES });
	const addMovie = (movie) => dispatch({ type: ADD_MOVIE, payload: movie });
	const removeMovie = (movie) =>
		dispatch({ type: REMOVE_MOVIE, payload: movie });

	return (
		<NewContext.Provider value={{ ...state }}>
			<DispatchNewContext.Provider
				value={{
					closeDrawer,
					openDrawer,
					showAlert,
					hideAlert,
					clearMovies,
					addMovie,
					removeMovie,
				}}
			>
				{props.children}
			</DispatchNewContext.Provider>
		</NewContext.Provider>
	);
};
