import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import PaletteFinder from "../../../vo/PaletteFinder";

function PaletteNameForm({ paletteMovies }) {
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
			const input = getValues("paletteNameInput");
			// savePalette(input);
		} else {
			setTimeout(() => {
				clearError();
			}, 2000);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="paletteNameInput"
				ref={register({
					required: true,
					validate: isPaletteNameUnique,
				})}
			/>
			{errors.paletteNameInput?.type === "required" && (
				<span>This field is required</span>
			)}
			{errors.paletteNameInput?.type === "validate" && (
				<span>Palette Name Taken</span>
			)}

			<Button type="submit" variant="contained" color="secondary">
				Save Palette
			</Button>
		</form>
	);
}

export default PaletteNameForm;
