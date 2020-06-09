import React, { useContext } from "react";
import clsx from "clsx";
import MovieCard from "./MovieCard";
import Alert from "@material-ui/lab/Alert";
import useStyles from "../style/MyMainStyle";
import { NewContext } from "../context/new.context";
function MyMain() {
	const classes = useStyles();
	const { alert, open, paletteMovies } = useContext(NewContext);
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
					severity={alert.type}
				>
					{alert.msg}
				</Alert>
			)}
			{paletteMovies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} type="remove" />
			))}
		</main>
	);
}

export default MyMain;
