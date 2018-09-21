import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InfoCard from './InfoCard';
import Button from '@material-ui/core/Button';
import SentimentSatisfiedAltRouned from '@material-ui/icons/SentimentSatisfiedAltRounded';
import InsertChartOutlined from '@material-ui/icons/InsertChartOutlined';
import LiveHelp from '@material-ui/icons/LiveHelp';

const styles = theme => ({
  heading: {
    color: 'white',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1532507921154-ac3409002909?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ed13725bd19c9a0ccadc558e6cbe61b&auto=format&fit=crop&w=995&q=80")',
    backgroundSize: 'cover',
    height: '100vh',
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
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  grow: {
    flexGrow: '1'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardsSection: {
    marginTop: '3rem',
    marginBottom: '4rem'
  }
});

const cardInfo = [
  {
    title: 'Sentiment Analysis',
    description:
      "Our platform allows you to track person's emotions while conducting interview",
    Icon: SentimentSatisfiedAltRouned
  },
  {
    title: 'Summary info of the person',
    description:
      'After finishing the video interview you can watch the summary info about the person',
    Icon: InsertChartOutlined
  },
  {
    title: 'Useful Tips',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vitae.',
    Icon: LiveHelp
  }
];

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
      <div className={classes.cardsSection}>
        <div className={classes.cards}>
          {cardInfo.map(ci => (
            <InfoCard key={ci.title} {...ci} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(HomePage);
