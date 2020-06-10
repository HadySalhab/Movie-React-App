import sizes from "../../../vo/sizes";
const styles = {
	header: {
		color: "#D3D3D3",
		width: "100%",
		position: "relative",
		display: "flex",
		alignItems: "flex-end",
		padding: "3rem",
		[sizes.down("xs")]: {
			padding: "1.5rem",
		},
	},
	detail: {
		display: "flex",
		[sizes.down("xs")]: {
			flexDirection: "column",
			[sizes.down("xs")]: {
				alignItems: "center",
			},
		},
	},
	posterContainer: {
		borderRadius: "10px",
		overflow: "hidden",
	},
	poster: {
		height: "450px",
		width: "300px",
	},
	summary: {
		marginLeft: "2rem",
		color: "white",
		width: "50%",
		[sizes.down("xs")]: {
			width: "100%",
		},
		alignSelf: "center",
		"& h2": {
			fontSize: "4rem",
			[sizes.down("xs")]: {
				fontSize: "3rem",
			},
		},
	},
	facts: {
		fontSize: "1.8rem",
		marginTop: "-0.5rem",
	},
	tagline: {
		marginTop: "1rem",
		fontStyle: "italic",
		fontSize: "1.8rem",
	},
	date: {
		marginRight: "2rem",
	},
	genres: {
		display: "inline-block",
	},
	overview: {
		marginTop: "1rem",
		"& h4": {
			fontSize: "2rem",
		},
		"& p": {
			fontSize: "1.5rem",
		},
	},
	vote: {
		display: "flex",
		alignItems: "center",
		marginTop: "1rem",
	},
	voteAvg: {
		marginLeft: ".5rem",
		fontSize: "1.5rem",
		lineHeight: "1.2em",
		textAlign: "center",
	},
	voteScore: {
		marginLeft: "1rem",
		fontWeight: "bold",
		fontSize: "1.5rem",
		lineHeight: "1.2em",
	},
	list: {
		display: "flex",
		flexWrap: "wrap",
		marginTop: "2rem",
		fontSize: "1.5rem",
	},
	listItem: {
		flex: "0 0 50%",
		marginBottom: ".7rem",
		"& i": {
			marginRight: ".5rem",
		},
	},
	homepage: {
		color: "#D3d3d3",
		textDecoration: "underline",
	},
};
export default styles;
