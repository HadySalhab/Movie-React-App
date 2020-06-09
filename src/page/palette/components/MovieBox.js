import React from "react";
import { IMAGE_W185 } from "../../../data/Constants";
import stringHelper from "../../../vo/StringHelper";
import { withStyles } from "@material-ui/styles";
import styles from "../style/MovieBoxStyle";

const MovieBox = (props) => {
	const onMovieBoxClicked = () => {
		props.onMovieBoxClicked(props.id, props.title);
	};
	const { title, poster_path, date, classes } = props;
	const imageUrl = IMAGE_W185 + poster_path;
	const transformedTitle = stringHelper.removeParenthesesAndReturn(title);

	return (
		<div className={classes.root} onClick={onMovieBoxClicked}>
			<div className={classes.container}>
				<img className={classes.img} src={`${imageUrl}`} alt="Movie Poster" />
			</div>
			<div className={classes.text}>
				<p className={classes.title}>{transformedTitle}</p>
				<span className={classes.date}>{date}</span>
			</div>
		</div>
	);
};

export default withStyles(styles)(MovieBox);
