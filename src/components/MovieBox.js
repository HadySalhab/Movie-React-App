import React, { Component } from "react";
import Constants from "../data/Constants";
import StringTrimmer from "../vo/StringTrimmer";
import "../style/MovieBox.css";

export default class MovieBox extends Component {
	render() {
		const { id, title, poster_path, date } = this.props;
		const imageUrl =
			Constants.IMAGE_BASE_URL + Constants.IMAGE_FILE_SIZE + poster_path;
		const transformedTitle = StringTrimmer.removeParenthesesAndReturn(title);
		return (
			<div className="MovieBox">
				<img
					className="MovieBox__image"
					src={`${imageUrl}`}
					alt="Movie Poster"
				/>
				<div className="MovieBox__text">
					<p className="MovieBox__title">{transformedTitle}</p>
					<span className="MovieBox__date">{date}</span>
				</div>
			</div>
		);
	}
}
