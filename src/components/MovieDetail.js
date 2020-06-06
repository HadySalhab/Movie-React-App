import React, { Component } from "react";
import tmdbClient from "../vo/TmdbClient";
import stringHelper from "../vo/StringHelper";
import { withStyles } from "@material-ui/styles";
import { CircularProgressbar } from "react-circular-progressbar";
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player";
import CardContent from "@material-ui/core/CardContent";
import YoutubeBtn from "./YoutubeBtn";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "react-circular-progressbar/dist/styles.css";

const styles = {
	container: {
		maxWidth: "130rem",
		margin: "0 auto",
		overflow: "auto",
		padding: "0 3rem",
	},
	header: {
		color: "#D3D3D3",
		width: "100%",
		position: "relative",
		display: "flex",
		alignItems: "flex-end",
		padding: "3rem",
	},
	detail: {
		display: "flex",
	},
	posterContainer: {
		borderRadius: "10px",
		overflow: "hidden",
	},
	poster: {
		height: "450px",
		width: "300px",
	},
	summary: {
		marginLeft: "2rem",
		color: "white",
		width: "50%",
		alignSelf: "center",
		"& h2": {
			fontSize: "4rem",
		},
	},
	facts: {
		fontSize: "1.8rem",
		marginTop: "-0.5rem",
	},
	tagline: {
		marginTop: "1rem",
		fontStyle: "italic",
		fontSize: "1.8rem",
	},
	genres: {
		display: "inline-block",
		marginLeft: "2rem",
	},
	overview: {
		marginTop: "1rem",
		"& h4": {
			fontSize: "2rem",
		},
		"& p": {
			fontSize: "1.5rem",
		},
	},
	vote: {
		display: "flex",
		alignItems: "center",
		marginTop: "1rem",
	},
	voteAvg: {
		marginLeft: ".5rem",
		fontSize: "1.5rem",
		lineHeight: "1.2em",
		textAlign: "center",
	},
	voteScore: {
		marginLeft: "1rem",
		fontWeight: "bold",
		fontSize: "1.5rem",
		lineHeight: "1.2em",
	},
	list: {
		display: "flex",
		flexWrap: "wrap",
		marginTop: "2rem",
		fontSize: "1.5rem",
	},
	listItem: {
		flex: "0 0 50%",
		marginBottom: ".7rem",
		"& i": {
			marginRight: ".5rem",
		},
	},
	homepage: {
		color: "#D3d3d3",
		textDecoration: "underline",
	},
	cardContent: {
		padding: ".5rem",
		"&:last-child": {
			padding: "1rem",
		},
	},
	castSection: {
		marginTop: "2rem",
		"& h1": {
			margin: "1rem 0rem",
			fontSize: "2rem",
			color: "rgba(0,0,0,0.7)",
		},
	},
	casts: {
		display: "grid",
		gridTemplateColumns: "repeat(10, 15rem);",
		overflowX: "auto",
		justifyContent: "flex-start",
		gridGap: "1rem",
		padding: "1rem 0rem",
	},
	trailerSection: {
		marginTop: "2rem",
		"& h1": {
			fontSize: "2rem",
			color: "rgba(0,0,0,0.7)",
			margin: "1rem 0rem",
		},
	},
	trailers: {
		display: "grid",
		gridTemplateColumns: "repeat(2,1fr);",
		justifyContent: "center",
		gridGap: "1rem",
	},
	reviewSection: {
		margin: "2rem 0",
		"& h1": {
			fontSize: "2rem",
			color: "rgba(0,0,0,0.7)",
			margin: "1rem 0rem",
		},
	},
	reviews: {
		padding: "2rem 2rem 2rem 0.1rem",
		maxHeight: "30rem",
		overflowY: "auto",
	},
	reviewCard: {
		marginBottom: "1rem",
	},
	reviewContent: {
		"& h2": {
			fontSize: "2rem",
		},
		"& p": {
			fontSize: "1.5rem",
		},
	},
	footer: {
		padding: "2rem",
		color: "white",
		fontSize: "1.7rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		opacity: "0.9",
		marginTop: "1rem",
		backgroundColor: "#282c34",
		alignSelf: "flex-end",
		width: "100%",
		"& a": {
			color: "#D3D3D3",
			textDecoration: "underline",
		},
	},
};

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
			const IMAGE_BACKDROP_FILE_SIZE = "/w1920_and_h800_multi_faces";
			const IMAGE_POSTER_FILE_SIZE = "/w600_and_h900_bestv2";
			const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
			const backdrop =
				IMAGE_BASE_URL + IMAGE_BACKDROP_FILE_SIZE + movieDetail.backdrop_path;
			const poster =
				IMAGE_BASE_URL + IMAGE_POSTER_FILE_SIZE + movieDetail.poster_path;

			const genreName = movieDetail.genres.map((genre) => {
				return genre.name;
			});

			const castArr = movieDetail.credits.cast;
			const crewArr = movieDetail.credits.crew;
			const castArrWithImage = castArr.filter((cast) => {
				return cast.profile_path !== null;
			});
			const visibleCast = castArrWithImage.slice(0, 10);
			const director = crewArr.find((crew) => {
				return crew.department === "Directing";
			});
			const writer = crewArr.find((crew) => {
				return crew.department === "Writing";
			});
			return (
				<div className={classes.root}>
					<header
						className={classes.header}
						style={{
							background: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 150px, rgba(0, 0, 0, 0.2) 100%), url(${backdrop}) center center/cover no-repeat`,
						}}
					>
						<div className={classes.detail}>
							<div className={classes.posterContainer}>
								<img
									className={classes.poster}
									src={poster}
									alt="Movie Poster"
								/>
							</div>
							<div className={classes.summary}>
								<h2>{movieDetail.original_title}</h2>
								<div className={classes.facts}>
									<span>{movieDetail.release_date}</span>
									<span className={classes.genres}>
										&bull;
										{genreName.map((g, index) => {
											if (index === genreName.length - 1) {
												return ` ${g} `;
											}
											return ` ${g},`;
										})}
										&bull;
									</span>
								</div>
								<p className={classes.tagline}>{movieDetail.tagline}</p>
								<div className={classes.overview}>
									<h4>Overview</h4>
									<p>{movieDetail.overview}</p>
								</div>
								<div className={classes.vote}>
									<div className={classes.voteAvg}>
										Vote Count: {movieDetail.vote_count}
									</div>
									<CircularProgressbar
										value={movieDetail.vote_average * 10}
										text={`${movieDetail.vote_average * 10}%`}
										background={true}
										styles={{
											// Customize the root svg element
											root: {
												strokeLinecap: "butt",
												width: "6rem",
												marginLeft: "1rem",
											},
											text: {
												fill: "white",
												fontSize: "2.5rem",
												fontWeight: "bold",
											},
											path: {
												stroke: `#89d185`,
											},
											background: {
												fill: "#000",
											},
										}}
									/>
									<div className={classes.voteScore}>
										User
										<br />
										Score
									</div>
								</div>
								<ul className={classes.list}>
									<li className={classes.listItem}>
										<i className="fas fa-user-circle"></i>
										Adult: {movieDetail.adult ? "No" : "Yes"}
									</li>
									<li className={classes.listItem}>
										<i
											className="fas fa-money-check-alt"
											style={{ marginLeft: "-.3rem" }}
										></i>
										Budget: $
										{movieDetail.budget
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</li>
									<li className={classes.listItem}>
										<i className="fas fa-home"></i>
										Web:{" "}
										<a
											className={classes.homepage}
											target="_blank"
											href={movieDetail.homepage}
										>
											Home Page
										</a>
									</li>
									<li className={classes.listItem}>
										<i
											className="fas fa-globe"
											style={{ marginLeft: "-.3rem" }}
										></i>
										Language: {movieDetail.original_language}
									</li>
									<li className={classes.listItem}>
										<i className="far fa-clock"></i>
										Runtime: {movieDetail.runtime} Min
									</li>
									<li className={classes.listItem}>
										<i className="fas fa-info"></i>
										Status: {movieDetail.status}
									</li>
									{director && (
										<li className={classes.listItem}>
											<i className="fas fa-video"></i>
											Director: {director.name}
										</li>
									)}
									{writer && (
										<li className={classes.listItem}>
											<i className="fas fa-marker"></i>
											Writer: {writer.name}
										</li>
									)}
								</ul>
							</div>
						</div>
					</header>
					<div>
						<div className={classes.container}>
							{visibleCast.length > 0 && (
								<section className={classes.castSection}>
									<h1>Top Cast</h1>
									<div className={classes.casts}>
										{visibleCast.map((cast) => (
											<Card className={classes.card}>
												<CardMedia
													component="img"
													alt="Contemplative Reptile"
													height="140"
													image={
														IMAGE_BASE_URL +
														"w276_and_h350_face/" +
														cast.profile_path
													}
													title="Contemplative Reptile"
												/>
												<CardContent
													classes={{
														root: classes.cardContent,
													}}
												>
													<Typography gutterBottom variant="h5" component="h2">
														{cast.character}
													</Typography>
													<Typography
														variant="body2"
														color="textSecondary"
														component="p"
													>
														{cast.name}
													</Typography>
												</CardContent>
											</Card>
										))}
									</div>
								</section>
							)}

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
													class="fab fa-youtube fa-7x"
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
