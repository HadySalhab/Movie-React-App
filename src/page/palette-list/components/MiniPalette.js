import React, { Component } from "react";
import MiniMovie from "./MiniMovie";
import { withStyles } from "@material-ui/styles";
import styles from "../style/MiniPaletteStyle";
class MiniPalette extends Component {
	constructor(props) {
		super(props);
		this.onMiniPaletteClicked = this.onMiniPaletteClicked.bind(this);
	}
	onMiniPaletteClicked(event) {
		this.props.onMiniPaletteClicked(this.props.id);
	}

	render() {
		const {
			classes,
			paletteName,
			emoji,
			movies,
			onMiniPaletteClicked,
		} = this.props;

		const miniMovieBoxes = movies.map((movie) => (
			<MiniMovie key={movie.id} poster_path={movie.poster_path} />
		));

		return (
			<div className={classes.root} onClick={this.onMiniPaletteClicked}>
				<div className={classes.movies}>{miniMovieBoxes}</div>
				<div className={classes.text}>
					<h5 className={classes.title}>
						{paletteName}
						<span className={classes.emoji}>{emoji}</span>
					</h5>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
