import React, { useState } from "react";
const useSortState = (initialSort) => {
	const [sortBy, setSortBy] = useState(initialSort);
	const updateSort = (newSort) => {
		setSortBy(newSort);
	};
	return [sortBy, updateSort];
};
export default useSortState;
