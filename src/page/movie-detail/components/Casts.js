import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "../style/CastsStyle";
import { IMAGE_W276 } from "../../../data/Constants";
import { withStyles } from "@material-ui/styles";
const Casts = ({ visibleCast, classes }) => {
	return (
		<section className={classes.castSection}>
			<h1>Top Cast</h1>
			<div className={classes.casts}>
				{visibleCast.map((cast) => (
					<Card key={cast.id} className={classes.card}>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="140"
							image={IMAGE_W276 + cast.profile_path}
							title="Contemplative Reptile"
						/>
						<CardContent
							classes={{
								root: classes.cardContent,
							}}
						>
							<Typography gutterBottom variant="h5" component="h2">
								{cast.character}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{cast.name}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
export default withStyles(styles)(Casts);
