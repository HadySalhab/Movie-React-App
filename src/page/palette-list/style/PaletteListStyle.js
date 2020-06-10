const styles = {
	root: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#282c34",
		minHeight: "100vh",
		alignItems: "flex-start",
		padding: "2rem 0rem",
	},
	container: {
		width: "110rem",
		display: "flex",
		padding: "0rem 2rem",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		marginBottom: "1rem",
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		gridColumn: "1/-1",
		"& h1": {
			textAlign: "center",
			fontSize: "3rem",
		},
	},
	createBtn: {
		color: "white",
		fontSize: "1rem",
		backgroundColor: "#de8918",
		"&:hover": {
			backgroundColor: "#c98020",
		},
	},
	palettes: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(25rem,1fr))",
		gridGap: "5%",
		width: "100%",
	},
};
export default styles;
