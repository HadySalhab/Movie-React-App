import React, { useContext } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MyDialog from "./MyDialog";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NewContext, DispatchNewContext } from "../context/new.context";

import useStyles from "../style/MyToolbarStyle";

function MyToolbar() {
	const { open } = useContext(NewContext);
	const { openDrawer } = useContext(DispatchNewContext);
	const classes = useStyles();
	return (
		<Toolbar
			classes={{
				root: classes.toolbarRoot,
			}}
		>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				onClick={openDrawer}
				edge="start"
				className={clsx(classes.menuButton, open && classes.hide)}
			>
				<MenuIcon />
			</IconButton>
			<div className={classes.toolbarContainer}>
				<Typography
					variant="h5"
					noWrap
					classes={{
						root: classes.title,
					}}
				>
					New Movie Palette
				</Typography>

				<div className={classes.toolbarBtnsContainer}>
					<MyDialog />

					<Link to="/">
						<Button
							variant="contained"
							color="secondary"
							classes={{
								root: classes.btnBack,
								label: classes.btnBackLabel,
							}}
						>
							Go Back
						</Button>
					</Link>
				</div>
			</div>
		</Toolbar>
	);
}

export default MyToolbar;
