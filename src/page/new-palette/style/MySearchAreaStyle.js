import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 450;
const useStyles = makeStyles((theme) => ({
	results: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: `1rem calc(${drawerWidth}px*0.5 - 30rem*0.5)`,
	},

	searchArea: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		paddingTop: "2rem",
		"&>h2": {
			textAlign: "center",
		},
	},
}));
export default useStyles;
