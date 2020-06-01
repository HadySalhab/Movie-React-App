import React, { Component } from "react";
import "../style/Navbar.css";
export default class Navbar extends Component {
	render() {
		const { title } = this.props;
		return (
			<header className="Navbar">
				<h1 className="logo">{title}</h1>
			</header>
		);
	}
}
