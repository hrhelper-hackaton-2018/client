import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  cards: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  card: {
    marginRight: '20px',
    flexBasis: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  grow: {
    flexGrow: '1'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardIcon: {
    width: '60px',
    height: '60px'
  }
});

const InfoCard = props => {
  const { classes, title, description, Icon } = props;
  console.log(Icon);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.center}>
          <Icon className={classes.cardIcon} fontSize="large" />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            align="center"
          >
            {title}
          </Typography>
          <Typography component="p" align="center">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.center}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(InfoCard);
