import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%",
	},
	input: {
		width: "100%",
		padding: ".5rem",
		margin: "1rem 0rem",
	},

	btnContainer: {
		marginTop: "1rem",
		display: "flex",
		width: "100%",
		margin: "0 auto",
		justifyContent: "space-between",
	},

	btnSave: {
		marginRight: "1rem",
		"&:disabled": {
			backgroundColor: "#282c34",
			color: "grey",
		},
	},

	btnSaveLabel: {
		fontSize: "1rem",
	},

	formError: {
		color: "red",
		fontSize: "1.5rem",
		display: "block",
		marginBottom: "1rem",
	},
}));
export default useStyles;
