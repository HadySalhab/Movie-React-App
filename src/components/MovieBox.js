import React, { Component } from "react";
import Constants from "../data/Constants";
import StringTrimmer from "../vo/StringTrimmer";
import "../style/MovieBox.css";

export default class MovieBox extends Component {
	render() {
		const { title, poster_path, date } = this.props;
		const imageUrl =
			Constants.IMAGE_BASE_URL + Constants.IMAGE_FILE_SIZE + poster_path;
		const transformedTitle = StringTrimmer.removeParenthesesAndReturn(title);
		return (
			<div className="MovieBox">
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
