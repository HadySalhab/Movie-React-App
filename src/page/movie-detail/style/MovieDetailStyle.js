const styles = {
	container: {
		maxWidth: "130rem",
		margin: "0 auto",
		overflow: "auto",
		padding: "0 3rem",
	},
	circularProgress: {
		color: "#de8918",
	},
	progress: {
		paddingTop: "5rem",
		display: "flex",
		justifyContent: "center",
	},
	alert: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "1rem",
	},
	alertMessage: {
		textAlign: "center",
		fontSize: "1.5rem",
		display: "inline-block",
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
