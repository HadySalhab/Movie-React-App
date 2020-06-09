import React, { useState } from "react";
const useAlertState = (initialState) => {
	const [alert, setAlert] = useState(initialState);
	const showAlert = () => {
		setAlert(true);
	};
	const hideAlert = () => {
		setAlert(false);
	};

	const showAlertFor = (timeInMillis) => {
		showAlert();
		setTimeout(() => {
			hideAlert();
		}, timeInMillis);
	};

	return [alert, showAlertFor];
};

export default useAlertState;
