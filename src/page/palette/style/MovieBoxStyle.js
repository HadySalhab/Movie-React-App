const styles = {
	root: {
		position: "relative",
	},
	container: {
		overflow: "hidden",
		position: "relative",
		transition: "all 1s",
		"&:hover": {
			cursor: "pointer",
		},
		"&::after": {
			content: '""',
			display: "block",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(226, 226, 226, 0.2)",
			top: " 0%",
			left: "0%",
			position: "absolute",
			opacity: "0",
			transition: "all 0.5s",
		},
		"&:hover::after": {
			opacity: "1",
		},
	},
	img: {
		objectFit: "fill",
		borderRadius: "1rem",
		width: "100%",
	},
	text: {
		padding: "0 1rem",
	},
	title: {
		fontWeight: "700",
		fontSize: "1.5rem",
		textOverflow: "ellipsis",
		overflow: "hidden",
	},
	date: {
		fontSize: "1.3rem",
	},
};
export default styles;
