import React, { Component } from "react";
import "../style/Navbar.css";
export default class Navbar extends Component {
	render() {
		return (
			<header className="Navbar">
				<h1 className="logo">
					<a className="logo__link" href="/">
						Movie Palettes
					</a>
				</h1>
			</header>
		);
	}
}
