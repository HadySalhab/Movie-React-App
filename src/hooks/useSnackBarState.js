import React, { useState } from "react";
const useSnackBarState = (initialState) => {
	const [isSnackBarOpen, setSnackBarOpen] = useState(initialState);
	const openSnackBar = () => {
		setSnackBarOpen(true);
	};
	const closeSnackBar = () => {
		setSnackBarOpen(false);
	};
	return [isSnackBarOpen, openSnackBar, closeSnackBar];
};
export default useSnackBarState;
