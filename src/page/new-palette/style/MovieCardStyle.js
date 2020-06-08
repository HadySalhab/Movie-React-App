import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
	root: {
		marginBottom: "1rem",
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	img: {
		height: "14rem",
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "auto",
	},
	cardBtn: {
		fontSize: "1.2rem",
		color: "rgba(0,0,0,0.7)",
	},
});
export default useStyles;
