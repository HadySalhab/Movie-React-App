import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IMAGE_W250 } from "../../../data/Constants";
import useStyles from "../style/MovieCardStyle";
import { DispatchNewContext, NewContext } from "../context/new.context";

export default function MovieCard(props) {
	const { movie, type } = props;
	const { paletteMovies } = useContext(NewContext);
	const { addMovie, removeMovie, showAlert, hideAlert } = useContext(
		DispatchNewContext
	);

	const classes = useStyles(props);
	function truncateWithEllipses(text, max) {
		return text.substr(0, max - 1) + (text.length > max ? "..." : "");
	}

	const handleLearnMore = () => {
		window.open(`/movies/${movie.id}`);
	};
	const handleAddOrRemove = () => {
		if (type === "add") {
			const result = paletteMovies.some((m) => m.id === movie.id);
			if (!result) {
				addMovie(movie);
			} else {
				showAlert("Movie Already In Palette", "info");
				setTimeout(() => {
					hideAlert();
				}, 2000);
			}
		} else {
			removeMovie(movie);
		}
	};

	const imgUrl = IMAGE_W250 + movie.poster_path;
	return (
		<Card className={classes.root}>
			<CardMedia
				alt="Contemplative Reptile"
				className={classes.img}
				title="Contemplative Reptile"
				image={imgUrl}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{movie.original_title}
				</Typography>
				<Typography variant="h6" color="textSecondary" component="p">
					{truncateWithEllipses(movie.overview, 100)}
				</Typography>
			</CardContent>

			<CardActions
				classes={{
					root: classes.cardActions,
				}}
			>
				<Button
					size="large"
					color="primary"
					onClick={handleLearnMore}
					classes={{
						root: classes.cardBtn,
					}}
				>
					Learn More
				</Button>
				<Button
					size="large"
					color="primary"
					onClick={handleAddOrRemove}
					classes={{
						root: classes.cardBtn,
					}}
				>
					{type}
				</Button>
			</CardActions>
		</Card>
	);
}
