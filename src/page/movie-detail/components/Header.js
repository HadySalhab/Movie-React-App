import React, { useContext } from "react";
import { IMAGE_W1920, IMAGE_W600 } from "../../../data/Constants";
import { CircularProgressbar } from "react-circular-progressbar";
import { withStyles } from "@material-ui/styles";
import { DetailContext } from "../context/detail.context";
import styles from "../style/HeaderStyle";

const Header = ({ classes }) => {
	const { detail } = useContext(DetailContext);

	const backdrop = IMAGE_W1920 + detail.backdrop_path;
	const poster = IMAGE_W600 + detail.poster_path;
	const genreName = detail.genres.map((genre) => {
		return genre.name;
	});

	const crewArr = detail.credits.crew;

	const director = crewArr.find((crew) => {
		return crew.department === "Directing";
	});
	const writer = crewArr.find((crew) => {
		return crew.department === "Writing";
	});

	return (
		<header
			className={classes.header}
			style={{
				background: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 150px, rgba(0, 0, 0, 0.2) 100%), url(${backdrop}) center center/cover no-repeat`,
			}}
		>
			<div className={classes.detail}>
				<div className={classes.posterContainer}>
					<img className={classes.poster} src={poster} alt="Movie Poster" />
				</div>
				<div className={classes.summary}>
					<h2>{detail.original_title}</h2>
					<div className={classes.facts}>
						<span>{detail.release_date}</span>
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
					<p className={classes.tagline}>{detail.tagline}</p>
					<div className={classes.overview}>
						<h4>Overview</h4>
						<p>{detail.overview}</p>
					</div>
					<div className={classes.vote}>
						<div className={classes.voteAvg}>
							Vote Count: {detail.vote_count}
						</div>
						<CircularProgressbar
							value={detail.vote_average * 10}
							text={`${detail.vote_average * 10}%`}
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
							Adult: {detail.adult ? "No" : "Yes"}
						</li>
						<li className={classes.listItem}>
							<i
								className="fas fa-money-check-alt"
								style={{ marginLeft: "-.3rem" }}
							></i>
							Budget: $
							{detail.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
						</li>
						<li className={classes.listItem}>
							<i className="fas fa-home"></i>
							Web:{" "}
							<a
								className={classes.homepage}
								target="_blank"
								href={detail.homepage}
							>
								Home Page
							</a>
						</li>
						<li className={classes.listItem}>
							<i className="fas fa-globe" style={{ marginLeft: "-.3rem" }}></i>
							Language: {detail.original_language}
						</li>
						<li className={classes.listItem}>
							<i className="far fa-clock"></i>
							Runtime: {detail.runtime} Min
						</li>
						<li className={classes.listItem}>
							<i className="fas fa-info"></i>
							Status: {detail.status}
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
	);
};
export default withStyles(styles)(Header);
