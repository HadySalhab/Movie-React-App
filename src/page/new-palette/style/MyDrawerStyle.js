import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH, DRAWER_WIDTH_LARGE } from "../../../data/Constants";
import sizes from "../../../vo/sizes";
const useStyles = makeStyles((theme) => ({
	drawer: {
		width: DRAWER_WIDTH_LARGE,
		[sizes.down("lg")]: {
			width: DRAWER_WIDTH,
		},
		flexShrink: 0,
	},
	drawerPaper: {
		width: DRAWER_WIDTH_LARGE,
		[sizes.down("lg")]: {
			width: DRAWER_WIDTH,
		},
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
		gridColumn: "1/-1",
	},
}));
export default useStyles;
