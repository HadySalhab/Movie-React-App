import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTheme } from "@material-ui/core/styles";
import MySearchArea from "./MySearchArea";
import useStyles from "../style/MyDrawerStyle";
import { NewContext, DispatchNewContext } from "../context/new.context";
function MyDrawer() {
	const theme = useTheme();
	const classes = useStyles();
	const { open } = useContext(NewContext);
	const { closeDrawer } = useContext(DispatchNewContext);
	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={closeDrawer}>
					{theme.direction === "ltr" ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>

			<Divider />
			<MySearchArea />
		</Drawer>
	);
}

export default MyDrawer;
