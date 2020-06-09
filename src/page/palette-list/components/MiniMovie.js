import React from "react";
import { withStyles } from "@material-ui/styles";
import { IMAGE_W185 } from "../../../data/Constants";
import styles from "../style/MiniMovieStyle";
const MiniMovie = (props) => {
	const { poster_path, classes } = props;
	const imageUrl = IMAGE_W185 + poster_path;

	return (
		<div
			className={classes.root}
			style={{ background: `url(${imageUrl}) center top/cover no-repeat` }}
		></div>
	);
};

export default withStyles(styles)(MiniMovie);
