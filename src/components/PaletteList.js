import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
	render() {
		const paletteList = this.props.paletteList;
		return (
			<div>
				<h1>Movies Palette List</h1>
				{paletteList.map((palette) => (
					<p>
						<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
					</p>
				))}
			</div>
		);
	}
}
