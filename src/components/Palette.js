import React, { Component } from "react";
import SnackbarMUI from "./SnackbarMUI";
import MovieBox from "./MovieBox";
import Navbar from "./Navbar";
import MovieSorter from "../vo/MovieSorter";
import "../style/Palette.css";

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortBy: "original",
			isSnackbarOpen: false,
		};
		this.movieSorter = new MovieSorter(props.movies);
		this.onSortChange = this.onSortChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	closeSnackbar() {
		this.setState({
			isSnackbarOpen: false,
		});
	}
	onSortChange(newSortBy) {
		this.setState({
			sortBy: newSortBy,
			isSnackbarOpen: true,
		});
	}
	render() {
		const { sortBy, isSnackbarOpen } = this.state;
		const { movies, paletteName, emoji } = this.props;
		const sortedMovies = this.movieSorter.sortMoviesBy(sortBy);

		const movieBoxes = sortedMovies.map((movie) => (
			<MovieBox
				key={movie.id}
				id={movie.id}
				title={movie.title}
				date={movie.release_date}
				poster_path={movie.poster_path}
			/>
		));
		return (
			<div className="Palette">
				<Navbar
					title={paletteName}
					onSortChange={this.onSortChange}
					sortBy={sortBy}
				/>
				<div className="Palette__movies">{movieBoxes}</div>
				<footer className="Palette__footer">
					{paletteName}
					<span className="Palette__footer-emoji">{emoji}</span>
				</footer>
				<SnackbarMUI
					sortBy={sortBy}
					isSnackbarOpen={isSnackbarOpen}
					closeSnackbar={this.closeSnackbar}
				/>
			</div>
		);
	}
}
