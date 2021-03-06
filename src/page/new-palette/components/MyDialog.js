import React, { Fragment, useContext } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import StringHelper from "../../../vo/StringHelper";
import useStyles from "../style/MyDialogStyle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import {
	DispatchPalettesContext,
	PalettesContext,
} from "../../../context/app/palettes.context";
import useDialog from "../../../hooks/useDialog";
import { NewContext } from "../context/new.context";

function MyDialog(props) {
	const { paletteMovies } = useContext(NewContext);
	const {
		isOpen,
		hideDialog,
		showDialogWith,
		setContent,
		getContent,
	} = useDialog();

	const {
		clearError,
		triggerValidation,
		register,
		getValues,
		errors,
	} = useForm();
	const { addPalette } = useContext(DispatchPalettesContext);
	const palettes = useContext(PalettesContext);

	const [input, setInput] = React.useState("");
	const classes = useStyles();

	const isPaletteNameUnique = (pName) => {
		return !palettes.some((p) => {
			return p.paletteName === pName;
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await triggerValidation("paletteNameInput");
		if (result) {
			setInput(getValues("paletteNameInput"));
			setContent("emoji");
		} else {
			setTimeout(() => {
				clearError();
			}, 2000);
		}
	};

	const savePalette = (emoji) => {
		const createdPalette = {
			paletteName: input,
			emoji: emoji.native,
			movies: paletteMovies,
			id: StringHelper.replaceWhiteSpacesWithDash(input),
		};
		addPalette(createdPalette);
		props.history.push("/");
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
				onClick={() => {
					showDialogWith("form");
				}}
				disabled={paletteMovies.length === 0}
			>
				Save Palette
			</Button>

			<Dialog
				open={isOpen}
				onClose={hideDialog}
				aria-labelledby="form-dialog-title"
			>
				{getContent() === "form" && (
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
								<Button onClick={hideDialog} color="primary">
									Cancel
								</Button>
								<Button type="submit" variant="contained" color="secondary">
									Save
								</Button>
							</DialogActions>
						</form>
					</Fragment>
				)}
				{getContent() === "emoji" && <Picker onSelect={savePalette} />}
			</Dialog>
		</div>
	);
}
export default withRouter(MyDialog);
