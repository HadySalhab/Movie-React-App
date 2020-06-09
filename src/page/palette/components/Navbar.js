import React from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "../style/NavbarStyle";

const Navbar = (props) => {
	const onSortChange = (event) => {
		props.onSortChange(event.target.value);
	};
	const { sortBy, classes } = props;
	return (
		<nav className={classes.nav}>
			<Link to="/">
				<Button className={classes.logo} variant="contained" color="secondary">
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
				onChange={onSortChange}
			>
				<MenuItem value="original">Original</MenuItem>
				<MenuItem value="popularity">By Popularity</MenuItem>
				<MenuItem value="vote">By Vote</MenuItem>
				<MenuItem value="date">By Date</MenuItem>
				<MenuItem value="name">By Name</MenuItem>
			</Select>
		</nav>
	);
};

export default withStyles(styles)(Navbar);
