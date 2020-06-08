import { makeStyles } from "@material-ui/core/styles";
import Constanst from "../../../data/Constants";
const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%",
	},
	input: {
		width: "100%",
		padding: ".5rem",
		margin: "1rem 0rem",
	},

	results: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: `1rem calc(${Constanst.DRAWER_WIDTH}px*0.5 - 30rem*0.5)`,
	},

	searchArea: {
		padding: "0rem 1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		paddingTop: "2rem",
		"&>h2": {
			textAlign: "center",
		},
	},
	btnContainer: {
		marginTop: "1rem",
		display: "flex",
		width: "100%",
		margin: "0 auto",
		justifyContent: "space-between",
	},
	btnPrimary: {
		backgroundColor: "rgba(0,0,0,0.7)",
		padding: "0.5rem",
		"&:hover": {
			backgroundColor: "rgba(0,0,0,0.6)",
		},
	},
	btnPrimaryLabel: {
		fontSize: "1.2rem",
	},
	btnPalette: {
		backgroundColor: "#de8918",
		flex: "0 0 49%",
		"&:hover": {
			backgroundColor: "#c98020",
		},
	},
	btnPaletteLabel: {
		fontSize: "1rem",
	},
	btnResults: {
		flex: "0 0 49%",
	},
	btnResultsLabel: {
		fontSize: "1rem",
	},
	circularProgress: {
		alignSelf: "center",
		marginTop: "2rem",
		color: "#de8918",
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
	formError: {
		color: "red",
		fontSize: "1.5rem",
		display: "block",
		marginBottom: "1rem",
	},
}));
export default useStyles;
