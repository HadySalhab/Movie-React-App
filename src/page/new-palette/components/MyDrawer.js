import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTheme } from "@material-ui/core/styles";
import MySearchArea from "./MySearchArea";
import useStyles from "../style/MyDrawerStyle";
function MyDrawer({
	open,
	handleDrawerClose,
	searchMovie,
	paletteMovies,
	clearPalette,
	movies,
	clearResults,
	handleAddOrRemove,
	handleLearnMore,
}) {
	const theme = useTheme();
	const classes = useStyles();
	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === "ltr" ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>

			<Divider />
			<MySearchArea
				searchMovie={searchMovie}
				paletteMovies={paletteMovies}
				clearPalette={clearPalette}
				movies={movies}
				clearResults={clearResults}
				handleAddOrRemove={handleAddOrRemove}
				handleLearnMore={handleLearnMore}
			/>
		</Drawer>
	);
}

export default MyDrawer;
