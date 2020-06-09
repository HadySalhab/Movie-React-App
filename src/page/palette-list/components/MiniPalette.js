import React from "react";
import MiniMovie from "./MiniMovie";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/styles";
import styles from "../style/MiniPaletteStyle";
import useDialog from "../../../hooks/useDialog";

const MiniPalette = (props) => {
	const onMiniPaletteClicked = (event) => {
		props.onMiniPaletteClicked(props.id);
	};

	const deletePalette = () => {
		props.deletePalette(props.id);
		hideDialog();
	};
	const { isOpen, showDialog, hideDialog } = useDialog();
	const { classes, paletteName, emoji, movies } = props;

	const miniMovieBoxes = movies.map((movie) => (
		<MiniMovie key={movie.id} poster_path={movie.poster_path} />
	));

	return (
		<div className={classes.root}>
			<div className={classes.movies} onClick={onMiniPaletteClicked}>
				{miniMovieBoxes}
			</div>
			<div className={classes.text}>
				<h5 className={classes.title}>
					{paletteName}
					<span className={classes.emojis}>
						<span className={classes.emoji}>{emoji}</span>
						<DeleteIcon onClick={showDialog} className={classes.deleteIcon} />
					</span>
				</h5>
			</div>
			<Dialog
				open={isOpen}
				aria-labelledby="delete-dialog-title"
				onClose={hideDialog}
			>
				<DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
				<List>
					<ListItem button onClick={deletePalette}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
								<CheckIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Delete" />
					</ListItem>
					<ListItem button onClick={hideDialog}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
								<CloseIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Cancel" />
					</ListItem>
				</List>
			</Dialog>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
