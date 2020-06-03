import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import "../style/Navbar.css";
export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.onSortChange = this.onSortChange.bind(this);
	}
	onSortChange(event) {
		this.props.onSortChange(event.target.value);
	}
	render() {
		const { title, sortBy } = this.props;
		return (
			<header className="Navbar">
				<h1>
					<Link className="logo" to="/">
						Movie Palette
					</Link>
				</h1>
				<Select value={sortBy} onChange={this.onSortChange}>
					<MenuItem value="original">Original</MenuItem>
					<MenuItem value="popularity">By Popularity</MenuItem>
					<MenuItem value="vote">By Vote</MenuItem>
					<MenuItem value="date">By Date</MenuItem>
					<MenuItem value="name">By Name</MenuItem>
				</Select>
			</header>
		);
	}
}
