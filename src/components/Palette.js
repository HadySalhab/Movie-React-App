import React, { Component } from "react";
import MovieBox from "./MovieBox";
import Navbar from "./Navbar";
import MovieSorter from "../vo/MovieSorter";
import "../style/Palette.css";
export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortBy: "original",
		};
		this.movieSorter = new MovieSorter(props.movies);
		this.onSortChange = this.onSortChange.bind(this);
	}
	onSortChange(newSortBy) {
		this.setState({
			sortBy: newSortBy,
		});
	}
	render() {
		const { sortBy } = this.state;
		const { movies, paletteName } = this.props;
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
			</div>
		);
	}
}
