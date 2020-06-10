import React, { useEffect, Fragment, useContext } from "react";
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
import Navbar from "./components/Navbar";
import { DetailContext } from "./context/detail.context";

const MovieDetail = ({ classes, match, history, location }) => {
	const { detail, loading, alert, getMovie } = useContext(DetailContext);
	useEffect(() => {
		getMovie(
			stringHelper.splitStringAtDashAndReturnFirstItem(match.params.movieName)
		);
	}, []);

	const getVisibleCast = () => {
		const castArr = detail.credits.cast;
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
			{detail && (
				<div className={classes.root}>
					{history.length > 2 && <Navbar history={history} />}

					<Header />

					<div>
						<div className={classes.container}>
							{getVisibleCast().length > 0 && (
								<Casts visibleCast={getVisibleCast()} />
							)}

							{detail.videos.results.length > 0 && <Trailers />}

							{detail.reviews.results.length > 0 && <Reviews />}
						</div>
					</div>
					<footer className={classes.footer}>
						Created By: Hadi Salheb ,&nbsp;
						<a
							className={classes.tmdb}
							href="https://www.themoviedb.org/"
							target="_blank"
						>
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
