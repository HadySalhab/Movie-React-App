import React from "react";
import { withStyles } from "@material-ui/styles";
import Constants from "../../../data/Constants";
import styles from "../style/MiniMovieStyle";
function MiniMovie(props) {
	const { poster_path, classes } = props;
	const imageUrl =
		Constants.IMAGE_BASE_URL + Constants.IMAGE_FILE_SIZE_W185 + poster_path;
	return (
		<div
			className={classes.root}
			style={{ background: `url(${imageUrl}) center center/cover no-repeat` }}
		></div>
	);
}

export default withStyles(styles)(MiniMovie);
