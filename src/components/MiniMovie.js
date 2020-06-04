import React from "react";
import { withStyles } from "@material-ui/styles";
import Constants from "../data/Constants";
const styles = {
	root: {
		height: "85px",
		width: "20%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
	},
};
function MiniMovie(props) {
	const { poster_path, classes } = props;
	const imageUrl =
		Constants.IMAGE_BASE_URL + Constants.IMAGE_FILE_SIZE + poster_path;
	return (
		<div
			className={classes.root}
			style={{ background: `url(${imageUrl}) center center/cover no-repeat` }}
		></div>
	);
}

export default withStyles(styles)(MiniMovie);
