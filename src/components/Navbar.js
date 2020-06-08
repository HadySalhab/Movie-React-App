import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import "../style/Navbar.css";

const styles = {
	selectRoot: {
		color: "white",
		fontSize: "1.2rem",
		padding: "1rem",
	},
	iconFilled: {
		color: "white",
	},
	logo: {
		padding: "0.5rem 1rem",
		marginLeft: "1rem",
		fontSize: "1.3rem",
		backgroundColor: "#de8918",
		"&:hover": {
			backgroundColor: "#c98020",
		},
	},
};

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
			<header className="Navbar">
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
			</header>
		);
	}
}
export default withStyles(styles)(Navbar);
