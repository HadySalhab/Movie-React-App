import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../style/MySearchAreaStyle";
import MovieCard from "./MovieCard";
import { useForm } from "react-hook-form";
function MySearchArea({
	searchMovie,
	paletteMovies,
	clearPalette,
	movies,
	clearResults,
	handleLearnMore,
	handleAddOrRemove,
}) {
	const classes = useStyles();
	const {
		clearError,
		triggerValidation,
		register,
		getValues,
		errors,
		setValue,
	} = useForm();
	return (
		<div className={classes.searchArea}>
			<Typography variant="h2">Search Your Movie</Typography>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const result = await triggerValidation("searchInput");
					if (result) {
						const value = getValues("searchInput");
						searchMovie(value);
						setValue("searchInput", "");
					} else {
						setTimeout(() => {
							clearError();
						}, 2000);
						console.log("not working");
					}
				}}
			>
				<input
					name="searchInput"
					ref={register({
						required: true,
					})}
				/>
				{/* errors will return when field validation fails  */}
				{errors.searchInput?.type === "required" && (
					<span>This field is required</span>
				)}
				<Button
					fullWidth={true}
					type="submit"
					variant="contained"
					color="secondary"
				>
					Search Movie
				</Button>
			</form>

			<Button
				variant="contained"
				color="secondary"
				disabled={paletteMovies.length === 0}
				onClick={clearPalette}
			>
				Clear Palette
			</Button>

			<Button
				variant="contained"
				color="secondary"
				disabled={movies.length === 0}
				onClick={clearResults}
			>
				Clear Results
			</Button>

			<div className={classes.results}>
				{movies.length > 0 &&
					movies.map((movie) => (
						<MovieCard
							key={movie.id}
							id={movie.id}
							title={movie.original_title}
							description={movie.overview}
							poster={movie.poster_path}
							learnMore={handleLearnMore}
							addOrRemove={handleAddOrRemove}
							type="add"
						/>
					))}
			</div>
		</div>
	);
}

export default MySearchArea;
