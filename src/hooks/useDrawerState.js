import React, { useState } from "react";
const useDrawerState = (isOpen) => {
	const [open, setOpen] = useState(isOpen);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return [open, handleDrawerClose, handleDrawerOpen];
};

export default useDrawerState;
