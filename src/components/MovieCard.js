import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Constants from "../data/Constants";

const useStyles = makeStyles({
	root: {
		marginBottom: "1rem",
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	img: {
		height: "14rem",
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "auto",
	},
	btnText: {
		fontSize: "1.2rem",
	},
});

export default function MovieCard(props) {
	const { id, title, description, type, learnMore, addOrRemove } = props;
	const classes = useStyles(props);
	function truncateWithEllipses(text, max) {
		return text.substr(0, max - 1) + (text.length > max ? "..." : "");
	}

	const handleLearnMore = () => {
		learnMore(id);
	};
	const handleAddOrRemove = () => {
		addOrRemove(id, type);
	};
	const imgUrl =
		Constants.IMAGE_BASE_URL + Constants.IMAGE_FILE_SIZE_W250 + props.poster;
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
					{title}
				</Typography>
				<Typography variant="h6" color="textSecondary" component="p">
					{truncateWithEllipses(description, 100)}
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
						root: classes.btnText,
					}}
				>
					Learn More
				</Button>
				<Button
					size="large"
					color="primary"
					onClick={handleAddOrRemove}
					classes={{
						root: classes.btnText,
					}}
				>
					{type}
				</Button>
			</CardActions>
		</Card>
	);
}
