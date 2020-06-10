import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../../vo/sizes";
const useStyles = makeStyles((theme) => ({
	toolbarRoot: {
		backgroundColor: "#282c34",
		opacity: "0.9",
		"&>h3": {
			padding: "2rem 0rem",
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: "none",
	},
	toolbarContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		[sizes.down("sm")]: {
			justifyContent: "flex-end",
		},
	},
	title: {
		[sizes.down("sm")]: {
			display: "none",
		},
	},
	toolbarBtnsContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},

	btnBack: {
		backgroundColor: "#de8918",
		"&:hover": {
			backgroundColor: "#c98020",
		},
	},

	btnBackLabel: {
		fontSize: "1rem",
	},
}));

export default useStyles;
