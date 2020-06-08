import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "../style/MySearchAreaStyle";
import MovieCard from "./MovieCard";
import tmdbClient from "../../../vo/TmdbClient";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";

function MySearchArea({
	paletteMovies,
	clearPalette,
	handleAddOrRemove,
	handleLearnMore,
}) {
	const classes = useStyles();
	const [movies, setMovies] = useState([]);
	const [loading, isLoading] = useState(false);
	const [infoAlert, setInfoAlert] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);

	const searchMovie = async (value) => {
		showLoadingState();
		let searchMovie;
		try {
			searchMovie = await tmdbClient.searchMovie(value);
			setMovies(searchMovie.results);
			if (searchMovie.results.length === 0) {
				setInfoAlert(true);
				setTimeout(() => {
					setInfoAlert(false);
				}, 3000);
			}
		} catch (err) {
			setErrorAlert(true);
			setTimeout(() => {
				setErrorAlert(false);
			}, 3000);
		}
		isLoading(false);
	};
	//reset
	const showLoadingState = () => {
		setMovies([]);
		setErrorAlert(false);
		setInfoAlert(false);
		isLoading(true);
	};

	const clearResults = () => {
		setMovies([]);
	};

	const {
		clearError,
		triggerValidation,
		register,
		getValues,
		errors,
		setValue,
	} = useForm();
	return (
		<div className={classes.searchArea}>
			<Typography variant="h2">Search Your Movie</Typography>
			<form
				className={classes.form}
				onSubmit={async (e) => {
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
				}}
			>
				<input
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
					onClick={clearResults}
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
					onClick={clearPalette}
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
			{infoAlert && (
				<Alert
					classes={{
						root: classes.alert,
						message: classes.alertMessage,
					}}
					severity="info"
				>
					Cannot Find Your Query
				</Alert>
			)}
			{errorAlert && (
				<Alert
					classes={{
						root: classes.alert,
						message: classes.alertMessage,
					}}
					severity="error"
				>
					Network Error!!
				</Alert>
			)}
			{movies.length > 0 && (
				<div className={classes.results}>
					{movies.length > 0 &&
						movies.map((movie) => (
							<MovieCard
								key={movie.id}
								movie={movie}
								learnMore={handleLearnMore}
								addOrRemove={handleAddOrRemove}
								type="add"
							/>
						))}
				</div>
			)}
		</div>
	);
}

export default MySearchArea;
