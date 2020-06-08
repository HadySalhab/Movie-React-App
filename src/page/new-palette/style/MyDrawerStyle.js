import { makeStyles } from "@material-ui/core/styles";
import Constanst from "../../../data/Constants";
const useStyles = makeStyles((theme) => ({
	drawer: {
		width: Constanst.DRAWER_WIDTH,
		flexShrink: 0,
	},
	drawerPaper: {
		width: Constanst.DRAWER_WIDTH,
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
