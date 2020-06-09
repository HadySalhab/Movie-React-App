const styles = {
	container: {
		maxWidth: "130rem",
		margin: "0 auto",
		overflow: "auto",
		padding: "0 3rem",
	},

	trailerSection: {
		marginTop: "2rem",
		"& h1": {
			fontSize: "2rem",
			color: "rgba(0,0,0,0.7)",
			margin: "1rem 0rem",
		},
	},
	trailers: {
		display: "grid",
		gridTemplateColumns: "repeat(2,1fr);",
		justifyContent: "center",
		gridGap: "1rem",
	},
	reviewSection: {
		margin: "2rem 0",
		"& h1": {
			fontSize: "2rem",
			color: "rgba(0,0,0,0.7)",
			margin: "1rem 0rem",
		},
	},
	reviews: {
		padding: "2rem 2rem 2rem 0.1rem",
		maxHeight: "30rem",
		overflowY: "auto",
	},
	reviewCard: {
		marginBottom: "1rem",
	},
	reviewContent: {
		"& h2": {
			fontSize: "2rem",
		},
		"& p": {
			fontSize: "1.5rem",
		},
	},
	footer: {
		padding: "2rem",
		color: "white",
		fontSize: "1.7rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		opacity: "0.9",
		marginTop: "1rem",
		backgroundColor: "#282c34",
		alignSelf: "flex-end",
		width: "100%",
		"& a": {
			color: "#D3D3D3",
			textDecoration: "underline",
		},
	},
};
export default styles;
