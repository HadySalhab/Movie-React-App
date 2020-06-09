import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./style/PaletteListStyle";
import MiniPalette from "./components/MiniPalette";
import paletteFinder from "../../vo/PaletteFinder";
import {
	DispatchPalettesContext,
	PalettesContext,
} from "../../context/app/palettes.context";

const PaletteList = (props) => {
	const palettes = useContext(PalettesContext);
	const { classes } = props;

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
					{palettes.map((palette) => (
						<MiniPalette {...palette} key={palette.id} />
					))}
				</div>
			</div>
		</div>
	);
};
export default withStyles(styles)(PaletteList);
