import React, { Component } from "react";
import MovieBox from "./MovieBox";
import "../style/Palette.css";
export default class Palette extends Component {
	render() {
		const { movies } = this.props;

		const movieBoxes = movies.map((movie) => (
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
				<div className="Palette__movies">{movieBoxes}</div>
			</div>
		);
	}
}
