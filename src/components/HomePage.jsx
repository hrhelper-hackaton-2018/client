import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  heading: {
    color: 'white',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1532507921154-ac3409002909?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ed13725bd19c9a0ccadc558e6cbe61b&auto=format&fit=crop&w=995&q=80")',
    backgroundSize: 'cover',
    height: '95vh',
    position: 'relative',
    padding: '0'
  },
  textBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
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
  }
});

const HomePage = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <header className={classes.heading}>
        <Typography
          gutterBottom
          variant="display2"
          component="h1"
          align="center"
          className={classes.textBox}
          color="inherit"
        >
          Make your life as HR a lot easier
        </Typography>
      </header>
      <div>
        <div className={classes.cards}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  align="center"
                >
                  Sentiment Analysis
                </Typography>
                <Typography component="p" align="center">
                  Our platform allows you to track person's emotions while
                  conducting interview
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
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  align="center"
                >
                  Summary info of the person
                </Typography>
                <Typography component="p" align="center">
                  After finishing the video interview you can watch the summary
                  info about the person
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
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  align="center"
                >
                  Useful Tips
                </Typography>
                <Typography
                  component="p"
                  align="center"
                  className={classes.grow}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, vitae.
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(HomePage);
