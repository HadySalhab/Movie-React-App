import { makeStyles } from "@material-ui/core/styles";
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
}));

export default useStyles;
