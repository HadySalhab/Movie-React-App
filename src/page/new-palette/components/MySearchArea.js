import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "../style/MySearchAreaStyle";
import MovieCard from "./MovieCard";
import tmdbClient from "../../../vo/TmdbClient";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import useAlertState from "../../../hooks/useAlertState";
import useLoadingState from "../../../hooks/useLoadingState";
import useMoviesResultState from "../../../hooks/useMoviesResultState";
import { NewContext, DispatchNewContext } from "../context/new.context";

const MySearchArea = () => {
	const classes = useStyles();
	const {
		clearError,
		triggerValidation,
		register,
		getValues,
		errors,
		setValue,
	} = useForm();
	const [movies, clearResultMovies, replaceMoviesWith] = useMoviesResultState(
		[]
	);
	const [loading, showLoading, hideLoading] = useLoadingState(false);
	const [alert, showAlertFor, hideAlert] = useAlertState(null);
	const { paletteMovies } = useContext(NewContext);
	const { clearMovies } = useContext(DispatchNewContext);

	const searchMovie = async (value) => {
		showLoadingState();
		let searchMovie;
		try {
			searchMovie = await tmdbClient.searchMovie(value);
			replaceMoviesWith(searchMovie.results);
			if (searchMovie.results.length === 0) {
				showAlertFor("info", "Cannot Find Your Movie", 3000);
			}
		} catch (err) {
			showAlertFor("error", "Network Error!", 3000);
		}
		hideLoading();
	};
	//reset
	const showLoadingState = () => {
		clearResultMovies();
		hideAlert();
		showLoading();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await triggerValidation("searchInput");
		if (result) {
			const value = getValues("searchInput");
			searchMovie(value);
			setValue("searchInput", "");
		} else {
			setTimeout(() => {
				clearError();
			}, 2000);
			console.log("not working");
		}
	};

	return (
		<div className={classes.searchArea}>
			<Typography variant="h2">Search Your Movie</Typography>
			<form className={classes.form} onSubmit={handleSubmit}>
				<input
					disabled={paletteMovies.length >= 20}
					className={classes.input}
					name="searchInput"
					ref={register({
						required: true,
					})}
				/>
				{/* errors will return when field validation fails  */}
				{errors.searchInput?.type === "required" && (
					<span className={classes.formError}>This field is required</span>
				)}
				<Button
					fullWidth={true}
					type="submit"
					variant="contained"
					disabled={paletteMovies.length >= 20}
					color="secondary"
					classes={{
						root: classes.btnPrimary,
						label: classes.btnPrimaryLabel,
					}}
				>
					Search Movie
				</Button>
			</form>
			<div className={classes.btnContainer}>
				<Button
					variant="contained"
					color="secondary"
					disabled={movies.length === 0}
					onClick={clearResultMovies}
					classes={{
						root: classes.btnResults,
						label: classes.btnResultsLabel,
					}}
				>
					Clear Results
				</Button>
				<Button
					variant="contained"
					color="secondary"
					disabled={paletteMovies.length === 0}
					onClick={clearMovies}
					classes={{
						root: classes.btnPalette,
						label: classes.btnPaletteLabel,
					}}
				>
					Clear Palette
				</Button>
			</div>
			{loading && (
				<CircularProgress
					classes={{
						root: classes.circularProgress,
					}}
				/>
			)}
			{alert && (
				<Alert
					classes={{
						root: classes.alert,
						message: classes.alertMessage,
					}}
					severity={alert.type}
				>
					{alert.msg}
				</Alert>
			)}

			{movies.length > 0 && (
				<div className={classes.results}>
					{movies.length > 0 &&
						movies.map((movie) => (
							<MovieCard key={movie.id} movie={movie} type="add" />
						))}
				</div>
			)}
		</div>
	);
};

export default MySearchArea;
