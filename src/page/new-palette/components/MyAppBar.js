import React, { useContext } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "../style/MyAppBarStyle";
import MyToolbar from "./MyToolbar";
import { NewContext } from "../context/new.context";

function MyAppBar() {
	const classes = useStyles();
	const { open } = useContext(NewContext);

	return (
		<div>
			<CssBaseline />
			<AppBar
				classes={{
					root: classes.appbarRoot,
				}}
				elevation={0}
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<MyToolbar />
			</AppBar>
		</div>
	);
}

export default MyAppBar;
