import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import styles from "../style/ReviewsStyle";

const Reviews = ({ classes, reviews }) => {
	return (
		<section className={classes.reviewSection}>
			<h1>Reviews</h1>
			<div className={classes.reviews}>
				{reviews.map((review) => (
					<Card key={review.id} className={classes.reviewCard}>
						<CardContent
							classes={{
								root: classes.reviewContent,
							}}
						>
							<Typography gutterBottom variant="h5" component="h2">
								{review.author}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{review.content}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
export default withStyles(styles)(Reviews);
