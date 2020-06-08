import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

import MiniPalette from "./MiniPalette";

const styles = {
	root: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#282c34",
		minHeight: "100vh",
		alignItems: "flex-start",
		padding: "2rem 0rem",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		marginBottom: "1rem",
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& h1": {
			textAlign: "center",
			fontSize: "3rem",
		},
	},
	createBtn: {
		color: "white",
		fontSize: "1rem",
		backgroundColor: "#de8918",
		"&:hover": {
			backgroundColor: "#c98020",
		},
	},
	palettes: {
		display: "grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap: "5%",
		width: "100%",
	},
};

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.onMiniPaletteClicked = this.onMiniPaletteClicked.bind(this);
	}
	onMiniPaletteClicked(id) {
		this.props.history.push(`/palette/${id}`);
	}
	render() {
		const { classes, paletteList } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>Movies Palette List</h1>
						<Link to="/palette/new">
							<Button
								className={classes.createBtn}
								variant="contained"
								color="secondary"
							>
								Create Palette
							</Button>
						</Link>
					</nav>
					<div className={classes.palettes}>
						{paletteList.map((palette) => (
							<MiniPalette
								{...palette}
								key={palette.id}
								onMiniPaletteClicked={this.onMiniPaletteClicked}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
