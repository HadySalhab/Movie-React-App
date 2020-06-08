import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "../style/NavbarStyle";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.onSortChange = this.onSortChange.bind(this);
	}
	onSortChange(event) {
		this.props.onSortChange(event.target.value);
	}
	render() {
		const { title, sortBy, classes } = this.props;
		return (
			<nav className={classes.nav}>
				<Link to="/">
					<Button
						className={classes.logo}
						variant="contained"
						color="secondary"
					>
						Movie Palette
					</Button>
				</Link>
				<Select
					classes={{
						root: classes.selectRoot,
						iconFilled: classes.iconFilled,
					}}
					variant="filled"
					value={sortBy}
					onChange={this.onSortChange}
				>
					<MenuItem value="original">Original</MenuItem>
					<MenuItem value="popularity">By Popularity</MenuItem>
					<MenuItem value="vote">By Vote</MenuItem>
					<MenuItem value="date">By Date</MenuItem>
					<MenuItem value="name">By Name</MenuItem>
				</Select>
			</nav>
		);
	}
}
export default withStyles(styles)(Navbar);
