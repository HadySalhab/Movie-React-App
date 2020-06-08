import { makeStyles } from "@material-ui/core/styles";
import Constanst from "../../../data/Constants";
const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${Constanst.DRAWER_WIDTH}px)`,
		marginLeft: Constanst.DRAWER_WIDTH,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	appbarRoot: {
		backgroundColor: "transparent",
	},
}));

export default useStyles;
