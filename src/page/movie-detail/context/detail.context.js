import React, { createContext, useReducer } from "react";
import tmdbClient from "../../../vo/TmdbClient";
import detailReducer from "./detail.reducer";
import { SHOW_MOVIE, SHOW_LOADING, SHOW_ALERT } from "./types.js";

export const DetailContext = createContext();

export const DetailProvider = (props) => {
	const initalState = {
		detail: null,
		loading: false,
		alert: null,
	};
	const [state, dispatch] = useReducer(detailReducer, initalState);

	const getMovie = async (movieId) => {
		showLoading();
		try {
			const detail = await tmdbClient.getMovie(movieId);
			dispatch({ type: SHOW_MOVIE, payload: detail });
		} catch (err) {
			showAlert("NetworkError", "error");
		}
	};
	const showLoading = () => dispatch({ type: SHOW_LOADING });
	const showAlert = (msg, type) =>
		dispatch({ type: SHOW_ALERT, payload: { msg, type } });

	return (
		<DetailContext.Provider value={{ ...state, getMovie }}>
			{props.children}
		</DetailContext.Provider>
	);
};
export default DetailProvider;
