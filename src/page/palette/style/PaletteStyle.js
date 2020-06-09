const styles = {
	root: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	movies: {
		marginTop: "-2rem",
		padding: "2rem",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(17rem,1fr))",
		gridGap: "1rem",
	},
	drawerHead: {
		display: "inline-block",
		gridColumn: "1/-1",
	},
	footer: {
		padding: "2rem",
		color: "white",
		fontSize: "1.7rem",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		fontWeight: "bold",
		opacity: "0.9",
		marginTop: "1rem",
		backgroundColor: "#282c34",
		alignSelf: "flex-end",
		width: "100%",
		marginTop: "auto",
	},
	footerEmoji: {
		marginLeft: "1rem",
	},
};
export default styles;
