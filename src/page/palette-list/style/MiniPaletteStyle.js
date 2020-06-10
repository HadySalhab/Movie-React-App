const styles = {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		border: "1px solid black",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
	},

	movies: {
		flex: "1",
		display: "flex",
		justifyContent: "flex-start",
		flexWrap: "wrap",
		width: "100%",
		minHeight: "340px",
		borderRadius: "5px",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
	},

	text: {
		marginTop: "auto",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
		paddingTop: ".5rem",
		fontSize: "1.5rem",
		position: "relative",
	},

	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem",
	},
	emojis: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	deleteIcon: {
		fontSize: "2.5rem",
		"&:hover": {
			cursor: "pointer",
		},
	},
};
export default styles;
