import React, { Component } from "react";
import Constants from "../data/Constants";
import stringHelper from "../vo/StringHelper";
import "../style/MovieBox.css";

export default class MovieBox extends Component {
	constructor(props) {
		super(props);
		this.onMovieBoxClicked = this.onMovieBoxClicked.bind(this);
	}
	onMovieBoxClicked() {
		this.props.onMovieBoxClicked(this.props.id, this.props.title);
	}
	render() {
		const { title, poster_path, date } = this.props;
		const imageUrl =
			Constants.IMAGE_BASE_URL + Constants.IMAGE_FILE_SIZE_W185 + poster_path;
		const transformedTitle = stringHelper.removeParenthesesAndReturn(title);
		return (
			<div className="MovieBox" onClick={this.onMovieBoxClicked}>
				<div className="MovieBox__img-container">
					<img
						className="MovieBox__img"
						src={`${imageUrl}`}
						alt="Movie Poster"
					/>
				</div>
				<div className="MovieBox__text">
					<p className="MovieBox__title">{transformedTitle}</p>
					<span className="MovieBox__date">{date}</span>
				</div>
			</div>
		);
	}
}
