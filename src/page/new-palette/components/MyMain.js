import React from "react";
import clsx from "clsx";
import MovieCard from "./MovieCard";
import Alert from "@material-ui/lab/Alert";
import useStyles from "../style/MyMainStyle";
function MyMain({
	open,
	infoAlert,
	errorAlert,
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
			{infoAlert && (
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
			{errorAlert && (
				<Alert
					classes={{
						root: classes.alert,
						message: classes.alertMessage,
					}}
					severity="error"
				>
					Empty Palette Cannot Be Saved!
				</Alert>
			)}

			{paletteMovies.map((movie) => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.original_title}
					description={movie.overview}
					poster={movie.poster_path}
					learnMore={handleLearnMore}
					addOrRemove={handleAddOrRemove}
					type="remove"
				/>
			))}
		</main>
	);
}

export default MyMain;
