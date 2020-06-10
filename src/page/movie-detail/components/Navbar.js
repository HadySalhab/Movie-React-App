import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "../style/NavbarStyle";

const Navbar = (props) => {
	const { classes } = props;
	return (
		<nav className={classes.nav}>
			<Button
				className={classes.logo}
				variant="contained"
				color="secondary"
				onClick={() => {
					props.history.goBack();
				}}
			>
				Back
			</Button>
		</nav>
	);
};

export default withStyles(styles)(Navbar);
