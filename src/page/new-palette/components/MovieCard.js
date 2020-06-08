import React from "react";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Constants from "../../../data/Constants";
import useStyles from "../style/MovieCardStyle";
export default function MovieCard(props) {
	const { movie, type, learnMore, addOrRemove } = props;

	const classes = useStyles(props);
	function truncateWithEllipses(text, max) {
		return text.substr(0, max - 1) + (text.length > max ? "..." : "");
	}

	const handleLearnMore = () => {
		learnMore(movie.id);
	};
	const handleAddOrRemove = () => {
		addOrRemove(movie, type);
	};
	const imgUrl =
		Constants.IMAGE_BASE_URL +
		Constants.IMAGE_FILE_SIZE_W250 +
		movie.poster_path;
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
