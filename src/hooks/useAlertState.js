import React, { useState } from "react";
const useAlertState = (initialState) => {
	const [alert, setAlert] = useState(initialState);
	const showAlert = (type, msg) => {
		setAlert({ type, msg });
	};
	const hideAlert = () => {
		setAlert(null);
	};

	const showAlertFor = (type, msg, timeInMillis) => {
		showAlert(type, msg);
		setTimeout(() => {
			hideAlert();
		}, timeInMillis);
	};

	return [alert, showAlertFor, hideAlert];
};

export default useAlertState;
