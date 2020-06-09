import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";

const styles = {
	message: {
		fontSize: "1.5rem",
	},
};

const SnackbarMUI = (props) => {
	const closeSnackbar = () => {
		props.closeSnackbar();
	};

	const { sortBy, isSnackbarOpen, classes } = props;
	return (
		<Snackbar
			className="Snackbar"
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			open={isSnackbarOpen}
			autoHideDuration={3000}
			message={
				<span id="message-id" className={classes.message}>
					Updated: By {sortBy}
				</span>
			}
			ContentProps={{
				"aria-describedby": "message-id",
			}}
			onClose={closeSnackbar}
			action={[
				<IconButton
					onClick={closeSnackbar}
					color="inherit"
					key="close"
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>,
			]}
		/>
	);
};
export default withStyles(styles)(SnackbarMUI);
