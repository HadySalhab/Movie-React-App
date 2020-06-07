import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PaletteNameForm from "./PaletteNameForm";
import useStyles from "../style/MyToolbarStyle";

function MyToolbar({ open, handleDrawerOpen, savePalette }) {
	const classes = useStyles();
	return (
		<Toolbar
			classes={{
				root: classes.toolbarRoot,
			}}
		>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				onClick={handleDrawerOpen}
				edge="start"
				className={clsx(classes.menuButton, open && classes.hide)}
			>
				<MenuIcon />
			</IconButton>
			<Typography variant="h3" noWrap>
				New Movie Palette
			</Typography>
			<PaletteNameForm savePalette={savePalette} />
			<Link to="/">
				<Button variant="contained" color="secondary">
					Go Back
				</Button>
			</Link>
		</Toolbar>
	);
}

export default MyToolbar;
