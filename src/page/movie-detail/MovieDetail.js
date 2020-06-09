import React, { Component } from "react";
import tmdbClient from "../../vo/TmdbClient";
import stringHelper from "../../vo/StringHelper";
import { withStyles } from "@material-ui/styles";
import "react-circular-progressbar/dist/styles.css";
import styles from "./style/MovieDetailStyle";
import Header from "./components/Header";
import Trailers from "./components/Trailers";
import Casts from "./components/Casts";
import Reviews from "./components/Reviews";

class MovieDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieId: stringHelper.splitStringAtDashAndReturnFirstItem(
				this.props.match.params.movieName
			),
			movieDetail: null,
			loading: true,
		};
	}

	async componentDidMount() {
		try {
			const movieDetail = await tmdbClient.getMovie(this.state.movieId);
			this.setState({
				movieDetail,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const { movieDetail, loading } = this.state;
		const { classes } = this.props;

		if (!loading) {
			const castArr = movieDetail.credits.cast;
			const castArrWithImage = castArr.filter((cast) => {
				return cast.profile_path !== null;
			});
			const visibleCast = castArrWithImage.slice(0, 10);
			return (
				<div className={classes.root}>
					<Header movieDetail={movieDetail} />

					<div>
						<div className={classes.container}>
							{visibleCast.length > 0 && <Casts visibleCast={visibleCast} />}

							{movieDetail.videos.results.length > 0 && (
								<Trailers videos={movieDetail.videos.results} />
							)}

							{movieDetail.reviews.results.length > 0 && (
								<Reviews reviews={movieDetail.reviews.results} />
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
			);
		} else {
			return <div></div>;
		}
	}
}
export default withStyles(styles)(MovieDetail);
