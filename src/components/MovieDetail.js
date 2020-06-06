import React, { Component } from "react";
import tmdbClient from "../vo/TmdbClient";
import stringHelper from "../vo/StringHelper";
import { withStyles } from "@material-ui/styles";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const styles = {
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

			return (
				<div>
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
										<i class="fas fa-user-circle"></i>
										Adult: {movieDetail.adult ? "No" : "Yes"}
									</li>
									<li className={classes.listItem}>
										<i
											class="fas fa-money-check-alt"
											style={{ marginLeft: "-.3rem" }}
										></i>
										Budget:{" "}
										{movieDetail.budget
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</li>
									<li className={classes.listItem}>
										<i class="fas fa-home"></i>
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
											class="fas fa-globe"
											style={{ marginLeft: "-.3rem" }}
										></i>
										Language: {movieDetail.spoken_languages[0].name}
									</li>
									<li className={classes.listItem}>
										<i class="far fa-clock"></i>
										Runtime: {movieDetail.runtime} Min
									</li>
									<li className={classes.listItem}>
										<i class="fas fa-info"></i>
										Status: {movieDetail.status}
									</li>
								</ul>
							</div>
						</div>
					</header>
				</div>
			);
		} else {
			return <div>Hello</div>;
		}
	}
}
export default withStyles(styles)(MovieDetail);
