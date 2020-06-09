const styles = {
	cardContent: {
		padding: ".5rem",
		"&:last-child": {
			padding: "1rem",
		},
	},
	castSection: {
		marginTop: "2rem",
		"& h1": {
			margin: "1rem 0rem",
			fontSize: "2rem",
			color: "rgba(0,0,0,0.7)",
		},
	},
	casts: {
		display: "grid",
		gridTemplateColumns: "repeat(10, 15rem);",
		overflowX: "auto",
		justifyContent: "flex-start",
		gridGap: "1rem",
		padding: "1rem 0rem",
	},
};
export default styles;
