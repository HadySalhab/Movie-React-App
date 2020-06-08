import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import PaletteFinder from "../../../vo/PaletteFinder";
import useStyles from "../style/MyDialogStyle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function MyDialog({ paletteMovies, onPaletteSaved }) {
	const [open, setOpen] = React.useState(false);
	const [content, setContent] = React.useState("form");
	const [input, setInput] = React.useState("");
	const classes = useStyles();

	const setEmojiContent = () => {
		setContent("emoji");
	};

	const setFormContent = () => {
		setContent("form");
	};
	const handleOpen = () => {
		setFormContent();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const {
		clearError,
		triggerValidation,
		register,
		getValues,
		errors,
		setValue,
	} = useForm();

	const isPaletteNameUnique = (pName) => {
		return PaletteFinder.isPaletteNameUnique(pName);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await triggerValidation("paletteNameInput");
		if (result) {
			setInput(getValues("paletteNameInput"));
			setEmojiContent();
		} else {
			setTimeout(() => {
				clearError();
			}, 2000);
		}
	};

	const savePalette = (emoji) => {
		onPaletteSaved(input, emoji.native);
	};

	return (
		<div>
			<Button
				classes={{
					root: classes.btnSave,
					label: classes.btnSaveLabel,
				}}
				variant="contained"
				color="secondary"
				onClick={handleOpen}
				disabled={paletteMovies.length === 0}
			>
				Save Palette
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				{content === "form" ? (
					<Fragment>
						<DialogTitle id="form-dialog-title">
							Choose Palette Name
						</DialogTitle>
						<form onSubmit={handleSubmit} className={classes.form}>
							<DialogContent>
								<DialogContentText>
									Please enter a name for your new beautiful palette. Make sure
									it's unique
								</DialogContentText>
								{/* <PaletteNameForm paletteMovies={paletteMovies} /> */}

								<input
									className={classes.input}
									name="paletteNameInput"
									ref={register({
										required: true,
										validate: isPaletteNameUnique,
									})}
								/>
								{errors.paletteNameInput?.type === "required" && (
									<span className={classes.formError}>
										This field is required
									</span>
								)}
								{errors.paletteNameInput?.type === "validate" && (
									<span className={classes.formError}>Palette Name Taken</span>
								)}
							</DialogContent>

							<DialogActions>
								<Button onClick={handleClose} color="primary">
									Cancel
								</Button>
								<Button type="submit" variant="contained" color="secondary">
									Save
								</Button>
							</DialogActions>
						</form>
					</Fragment>
				) : (
					<Picker onSelect={savePalette} />
				)}
			</Dialog>
		</div>
	);
}
