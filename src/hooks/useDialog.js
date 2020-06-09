import React, { useState } from "react";
const useDialog = (content = null, open = false) => {
	const [dialog, updateDialog] = useState({ content, open });

	const setContent = (content) => {
		updateDialog({
			...dialog,
			content,
		});
	};
	const getContent = () => dialog.content;
	const showDialog = () => {
		updateDialog({
			...dialog,
			open: true,
		});
	};
	const hideDialog = () => {
		updateDialog({
			...dialog,
			open: false,
		});
	};
	const isOpen = dialog.open;

	const showDialogWith = (content) => {
		updateDialog({
			content,
			open: true,
		});
	};

	return {
		isOpen,
		showDialog,
		hideDialog,
		showDialogWith,
		setContent,
		getContent,
	};
};

export default useDialog;
