import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../../data/Constants";
const useStyles = makeStyles((theme) => ({
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
		gridColumn: "1/-1",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -DRAWER_WIDTH,
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(22rem,1fr))",
		gridColumnGap: "1rem",
		justifyItems: "center",
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},

	alert: {
		gridRow: "2",
		gridColumn: "1/-1",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "1rem",
	},
	alertMessage: {
		textAlign: "center",
		fontSize: "2.3rem",
		display: "inline-block",
	},
}));

export default useStyles;
