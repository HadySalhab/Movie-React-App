import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./style/PaletteListStyle";
import MiniPalette from "./components/MiniPalette";

const PaletteList = (props) => {
	const onMiniPaletteClicked = (id) => {
		props.history.push(`/palette/${id}`);
	};
	const { classes, paletteList } = props;

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
							onMiniPaletteClicked={onMiniPaletteClicked}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default withStyles(styles)(PaletteList);
