import sizes from "../../../vo/sizes";
const styles = {
	root: {
		backgroundColor: "#282c34",
		padding: "2rem 0rem",
		minHeight: "100vh",
	},
	container: {
		maxWidth: "110rem",
		padding: "0rem 2rem",
		margin: "0 auto",
		overflow: "auto",
	},
	palettes: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(30rem,1fr))",
		gridGap: "2rem",
		[sizes.down("xs")]: {
			width: "80%",
			margin: "0 auto",
			justifyContent: "center",
			gridTemplateColumns: "repeat(1,minmax(20rem,1fr))",
		},
		[sizes.down("xxs")]: {
			width: "85%",
		},
	},
	nav: {
		marginBottom: "1rem",
		display: "flex",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		gridColumn: "1/-1",
		[sizes.down("xs")]: {
			flexDirection: "column",
			alignItems: "stretch",
		},
		"& h1": {
			textAlign: "center",
			fontSize: "3rem",
			[sizes.down("xxs")]: {
				fontSize: "2.5rem",
			},
		},
	},
	createBtn: {
		color: "white",
		fontSize: "1rem",
		[sizes.down("xs")]: {
			width: "100%",
			marginTop: "1rem",
		},

		backgroundColor: "#de8918",
		"&:hover": {
			backgroundColor: "#c98020",
		},
	},
};
export default styles;
