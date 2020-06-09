const styles = {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		border: "1px solid black",
		padding: "0.5rem",
		position: "relative",
		minHeight: "34rem",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
		display: "flex",
		flexDirection: "column",
	},
	movies: {
		display: "flex",
		justifyContent: "flex-start",
		flexWrap: "wrap",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
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
};
export default styles;