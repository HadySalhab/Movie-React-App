import React from "react";
import SnackbarMUI from "./components/SnackbarMUI";
import MovieBox from "./components/MovieBox";
import Navbar from "./components/Navbar";
import MovieSorter from "../../vo/MovieSorter";
import stringHelper from "../../vo/StringHelper";
import styles from "./style/PaletteStyle";
import useSortState from "../../hooks/useSortState";
import useSnackBarState from "../../hooks/useSnackBarState";
import { withStyles } from "@material-ui/styles";

const Palette = (props) => {
	const onMovieBoxClicked = (movieId, title) => {
		const noParentheses = stringHelper.removeParenthesesAndReturn(title);
		const mMovieName = stringHelper.replaceWhiteSpacesWithDash(noParentheses);
		props.history.push(`/movies/${movieId + "-" + mMovieName}`);
	};

	const [sortBy, updateSort] = useSortState("original");
	const [isSnackBarOpen, openSnackBar, closeSnackBar] = useSnackBarState(false);
	const onSortChange = (newSortBy) => {
		updateSort(newSortBy);
		openSnackBar();
	};

	const movieSorter = new MovieSorter(props.palette.movies);
	const { paletteName, emoji } = props.palette;
	const { classes } = props;
	const sortedMovies = movieSorter.sortMoviesBy(sortBy);

	const movieBoxes = sortedMovies.map((movie) => (
		<MovieBox
			key={movie.id}
			id={movie.id}
			title={movie.title}
			date={movie.release_date}
			poster_path={movie.poster_path}
			onMovieBoxClicked={onMovieBoxClicked}
		/>
	));

	return (
		<div className={classes.root}>
			<Navbar title={paletteName} onSortChange={onSortChange} sortBy={sortBy} />
			<div>
				<div className={classes.movies}>
					<div className={classes.drawerHead}></div>
					{movieBoxes}
				</div>
			</div>
			<footer className={classes.footer}>
				{paletteName}
				<span className={classes.footerEmoji}>{emoji}</span>
			</footer>
			<SnackbarMUI
				sortBy={sortBy}
				isSnackbarOpen={isSnackBarOpen}
				closeSnackbar={closeSnackBar}
			/>
		</div>
	);
};

export default withStyles(styles)(Palette);
