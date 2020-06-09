import React from "react";
import clsx from "clsx";
import MovieCard from "./MovieCard";
import Alert from "@material-ui/lab/Alert";
import useStyles from "../style/MyMainStyle";
function MyMain({
	open,
	alert,
	paletteMovies,
	handleLearnMore,
	handleAddOrRemove,
}) {
	const classes = useStyles();
	return (
		<main
			className={clsx(classes.content, {
				[classes.contentShift]: open,
			})}
		>
			<div className={classes.drawerHeader}></div>
			{alert && (
				<Alert
					classes={{
						root: classes.alert,
						message: classes.alertMessage,
					}}
					severity="info"
				>
					Movie Already Added To Palette
				</Alert>
			)}
			{paletteMovies.map((movie) => (
				<MovieCard
					key={movie.id}
					movie={movie}
					learnMore={handleLearnMore}
					addOrRemove={handleAddOrRemove}
					type="remove"
				/>
			))}
		</main>
	);
}

export default MyMain;
