import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Rating } from 'semantic-ui-react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 16,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({title, image}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Rating icon='star' defaultRating={0} maxRating={5} clearable/>
      </CardActions>
    </Card>
  );
}