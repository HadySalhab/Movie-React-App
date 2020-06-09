import React, { useState } from "react";
const useLoadingState = (initialState) => {
	const [loading, setLoading] = useState(initialState);
	const showLoading = () => {
		setLoading(true);
	};
	const hideLoading = () => {
		setLoading(false);
	};

	return [loading, showLoading, hideLoading];
};

export default useLoadingState;
