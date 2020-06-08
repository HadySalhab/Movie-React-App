import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "../style/MyAppBarStyle";
import MyToolbar from "./MyToolbar";

function MyAppBar({ paletteMovies, open, handleDrawerOpen, onPaletteSaved }) {
	const classes = useStyles();

	return (
		<div>
			<CssBaseline />
			<AppBar
				classes={{
					root: classes.appbarRoot,
				}}
				elevation={0}
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<MyToolbar
					open={open}
					handleDrawerOpen={handleDrawerOpen}
					paletteMovies={paletteMovies}
					onPaletteSaved={onPaletteSaved}
				/>
			</AppBar>
		</div>
	);
}

export default MyAppBar;
