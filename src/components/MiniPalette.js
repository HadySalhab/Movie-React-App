import React, { Component } from "react";
import MiniMovie from "./MiniMovie";
import { withStyles } from "@material-ui/styles";
const styles = {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		border: "1px solid black",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
		display: "flex",
		flexDirection: "column",
	},
	movies: {
		display: "flex",
		justifyContent: "flex-start",
		flexWrap: "wrap",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
	},

	text: {
		marginTop: "auto",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
		paddingTop: ".5rem",
		fontSize: "1.5rem",
		position: "relative",
	},

	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem",
	},
};

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
