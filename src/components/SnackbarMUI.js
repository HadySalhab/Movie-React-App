import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

export default class SnackbarMUI extends Component {
	constructor(props) {
		super(props);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	closeSnackbar() {
		this.props.closeSnackbar();
	}
	render() {
		const { sortBy, isSnackbarOpen } = this.props;
		return (
			<Snackbar
				className="Snackbar"
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				open={isSnackbarOpen}
				autoHideDuration={2000}
				message={<span id="message-id">Updated: By {sortBy}</span>}
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
