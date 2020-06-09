import React, { useEffect, Fragment } from "react";
import tmdbClient from "../../vo/TmdbClient";
import stringHelper from "../../vo/StringHelper";
import { withStyles } from "@material-ui/styles";
import "react-circular-progressbar/dist/styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./style/MovieDetailStyle";
import Header from "./components/Header";
import Trailers from "./components/Trailers";
import Casts from "./components/Casts";
import Reviews from "./components/Reviews";
import Alert from "@material-ui/lab/Alert";
import useAlertState from "../../hooks/useAlertState";
import useLoadingState from "../../hooks/useLoadingState";
import useMovieState from "../../hooks/useMovieState";

const MovieDetail = (props) => {
	const { classes } = props;
	const [movie, updateMovie] = useMovieState(null);
	const [loading, showLoading, hideLoading] = useLoadingState(true);
	const [alert, showAlertFor, hideAlert, showAlert] = useAlertState(null);
	useEffect(() => {
		hideAlert();
		async function fetchMovie() {
			try {
				const movieResult = await tmdbClient.getMovie(
					stringHelper.splitStringAtDashAndReturnFirstItem(
						props.match.params.movieName
					)
				);
				updateMovie(movieResult);
			} catch (err) {
				showAlert("error", "Network Error!");
			}
			hideLoading();
		}
		fetchMovie();
	}, []);

	const getVisibleCast = () => {
		const castArr = movie.credits.cast;
		const castArrWithImage = castArr.filter((cast) => {
			return cast.profile_path !== null;
		});
		return castArrWithImage.slice(0, 10);
	};

	return (
		<Fragment>
			{loading && (
				<div className={classes.progress}>
					<CircularProgress
						classes={{
							root: classes.circularProgress,
						}}
					/>
				</div>
			)}
			{movie && (
				<div className={classes.root}>
					<Header movieDetail={movie} />

					<div>
						<div className={classes.container}>
							{getVisibleCast().length > 0 && (
								<Casts visibleCast={getVisibleCast()} />
							)}

							{movie.videos.results.length > 0 && (
								<Trailers videos={movie.videos.results} />
							)}

							{movie.reviews.results.length > 0 && (
								<Reviews reviews={movie.reviews.results} />
							)}
						</div>
					</div>
					<footer className={classes.footer}>
						Created By: Hadi Joseph Salheb for self-development purposes,&nbsp;
						<a href="https://www.themoviedb.org/" target="_blank">
							{" "}
							Credit to TMDB Api.
						</a>
					</footer>
				</div>
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
		</Fragment>
	);
};

export default withStyles(styles)(MovieDetail);
