import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import tmdbClient from "../vo/TmdbClient";
import MovieCard from "./MovieCard";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import PaletteFinder from "../vo/PaletteFinder";

const drawerWidth = 450;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
		gridColumn: "1/-1",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(25rem,1fr))",
		gridColumnGap: "1rem",
		justifyItems: "center",
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	results: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: `1rem calc(${drawerWidth}px*0.5 - 35rem*0.5)`,
	},
	alert: {
		gridRow: "2",
		gridColumn: "1/-1",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "1rem",
	},
	alertMessage: {
		textAlign: "center",
		fontSize: "2.3rem",
		display: "inline-block",
	},
}));

export default function NewPalette(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [movies, setMovies] = useState([]);
	const [paletteMovies, setPaletteMovies] = useState([]);
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [alert, setAlert] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const onInputChange = (e) => {
		setInput(e.target.value);
	};
	const searchMovie = async () => {
		setInput("");
		setMovies([]);
		const movies = await tmdbClient.searchMovie(input);
		setMovies(movies.results);
	};
	const handleLearnMore = (id) => {
		window.open(`/movies/${id}`);
	};
	const handleAddOrRemove = (id, type) => {
		if (type === "add") {
			addMovieToPalette(id);
		} else {
			removeMovieFromPalette(id);
		}
	};
	const addMovieToPalette = (id) => {
		const isMovieInPalette = paletteMovies.some((movie) => movie.id === id);
		if (isMovieInPalette) {
			setAlert(true);
			setTimeout(() => {
				setAlert(false);
			}, 2000);
		} else {
			const movie = movies.find((mov) => mov.id === id);
			const currentPalette = paletteMovies.map((movie) => movie);
			currentPalette.push(movie);
			setPaletteMovies(currentPalette);
		}
	};

	const removeMovieFromPalette = (id) => {
		const movie = paletteMovies.find((mov) => mov.id === id);
		const currentPalette = paletteMovies
			.map((movie) => movie)
			.filter((movie) => movie.id !== id);
		setPaletteMovies(currentPalette);
	};
	const clearPalette = () => {
		setPaletteMovies([]);
	};

	const clearResults = () => {
		setMovies([]);
	};
	const savePalette = () => {
		const newPalette = {
			paletteName: "New Test",
			id: "new-test",
			emoji: "🎨",
			movies: paletteMovies,
		};
		PaletteFinder.addPalettesToSeed(newPalette);
		props.history.push("/");
	};
	useEffect(() => {
		console.log(paletteMovies);
	}, [paletteMovies]);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Persistent drawer
					</Typography>
					<Button variant="contained" color="secondary" onClick={savePalette}>
						Save Palette
					</Button>
				</Toolbar>
			</AppBar>
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
				<Typography variant="h2">Search Your Movie</Typography>
				<ValidatorForm onSubmit={searchMovie}>
					<TextValidator
						value={input}
						onChange={onInputChange}
						validators={["required"]}
						errorMessages={["this field is required"]}
					/>
					<Button type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</ValidatorForm>

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
			</Drawer>
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
		</div>
	);
}
