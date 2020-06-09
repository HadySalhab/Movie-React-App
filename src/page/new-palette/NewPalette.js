import React from "react";
import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";
import MyMain from "./components/MyMain";
import useStyles from "./style/NewPaletteStyle";
import { NewProvider } from "./context/new.context";

export default function NewPalette(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<NewProvider>
				<MyAppBar />
				<MyDrawer />
				<MyMain />
			</NewProvider>
		</div>
	);
}
