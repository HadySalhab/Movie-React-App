import React, { Component } from "react";
import tmdbClient from "../../vo/TmdbClient";
import stringHelper from "../../vo/StringHelper";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import YoutubeBtn from "./components/YoutubeBtn";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "react-circular-progressbar/dist/styles.css";
import styles from "./style/MovieDetailStyle";
import Header from "./components/Header";
import Casts from "./components/Casts";

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
		const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

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
								<section className={classes.trailerSection}>
									<h1>Trailers</h1>
									<div className={classes.trailers}>
										{movieDetail.videos.results.slice(0, 4).map((video) => (
											<div
												style={{
													position: "relative",
												}}
											>
												<img
													src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
													style={{
														width: "100%",
													}}
													alt=""
												/>
												<i
													className="fab fa-youtube fa-7x"
													style={{
														position: "absolute",
														top: "50%",
														left: "50%",
														transform: "translate(-50%,-50%)",
														color: "#c4302b",
													}}
												></i>
											</div>
										))}
									</div>
								</section>
							)}

							{movieDetail.reviews.results.length > 0 && (
								<section className={classes.reviewSection}>
									<h1>Reviews</h1>
									<div className={classes.reviews}>
										{movieDetail.reviews.results.map((review) => (
											<Card className={classes.reviewCard}>
												<CardContent
													classes={{
														root: classes.reviewContent,
													}}
												>
													<Typography gutterBottom variant="h5" component="h2">
														{review.author}
													</Typography>
													<Typography
														variant="body2"
														color="textSecondary"
														component="p"
													>
														{review.content}
													</Typography>
												</CardContent>
											</Card>
										))}
									</div>
								</section>
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
