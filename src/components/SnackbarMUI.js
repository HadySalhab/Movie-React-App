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

class SnackbarMUI extends Component {
	constructor(props) {
		super(props);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	closeSnackbar() {
		this.props.closeSnackbar();
	}
	render() {
		const { sortBy, isSnackbarOpen, classes } = this.props;
		return (
			<Snackbar
				className="Snackbar"
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				open={isSnackbarOpen}
				autoHideDuration={10000}
				message={
					<span id="message-id" className={classes.message}>
						Updated: By {sortBy}
					</span>
				}
				ContentProps={{
					"aria-describedby": "message-id",
				}}
				onClose={this.closeSnackbar}
				action={[
					<IconButton
						onClick={this.closeSnackbar}
						color="inherit"
						key="close"
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>,
				]}
			/>
		);
	}
}
export default withStyles(styles)(SnackbarMUI);
