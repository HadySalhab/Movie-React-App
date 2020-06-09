import React, { Component } from "react";
import MiniMovie from "./MiniMovie";
import { withStyles } from "@material-ui/styles";
import styles from "../style/MiniPaletteStyle";
const MiniPalette = (props) => {
	const onMiniPaletteClicked = (event) => {
		props.onMiniPaletteClicked(props.id);
	};

	const { classes, paletteName, emoji, movies } = props;

	const miniMovieBoxes = movies.map((movie) => (
		<MiniMovie key={movie.id} poster_path={movie.poster_path} />
	));

	return (
		<div className={classes.root} onClick={onMiniPaletteClicked}>
			<div className={classes.movies}>{miniMovieBoxes}</div>
			<div className={classes.text}>
				<h5 className={classes.title}>
					{paletteName}
					<span className={classes.emoji}>{emoji}</span>
				</h5>
			</div>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
