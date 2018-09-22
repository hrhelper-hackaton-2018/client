import React from 'react';
import Paper from '@material-ui/core/Paper';
import ReactWebCamCapture from 'react-webcam-capture';
import { captureUserMedia } from '../utils';
import Webcam from './Webcam';
import RecordRTC from 'recordrtc';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import apiAdapter from '../ApiAdapter';

const hasGetUserMedia = !!(
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

const styles = {
  buttonPannel: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  firstButton: {
    marginRight: '1rem'
  }
};

class VideoRecorder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordVideo: null,
      src: null,
      uploadSuccess: false,
      uploading: false,
      videoSrc: null,
      recording: false
    };

    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
  }

  componentDidMount() {
    if (!hasGetUserMedia) {
      alert(
        'Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.'
      );
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log('requestUserMedia');
    captureUserMedia(stream => {
      this.setState({ src: window.URL.createObjectURL(stream) });
    });
  }

  startRecord() {
    this.setState(() => ({
      recording: true
    }));
    captureUserMedia(stream => {
      this.state.recordVideo = RecordRTC(stream, {
        type: 'video',
        mimeType: 'video/webm',
        video: {
          width: 580,
          height: 350
        }
      });
      this.state.recordVideo.startRecording();
    });
  }

  stopRecord() {
    this.setState(() => ({
      recording: false
    }));
    this.state.recordVideo.stopRecording(auidioVideoWebmUrl => {
      this.setState(() => ({
        videoSrc: auidioVideoWebmUrl
      }));
      const { blob } = this.state.recordVideo;
      this.setState({ uploading: true });
      apiAdapter.submitVideo(blob).then(() => {
        this.setState({ uploading: false });
        this.setState({ uploadSuccess: true });
        setTimeout(() => {
          this.setState({ uploadSuccess: false });
        }, 3000);
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="headline" align="center">
          {this.state.recording ? 'Recording Video' : ''}
        </Typography>
        <Typography variant="headline" align="center">
          {this.state.uploading ? 'Uploading Video...' : ''}
        </Typography>
        <Typography variant="headline" align="center" color="primary">
          {this.state.uploadSuccess ? 'Upload Success!' : ''}
        </Typography>
        <div>
          <Webcam src={this.state.src} />
        </div>
        <div className={classes.buttonPannel}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.startRecord}
            className={classes.firstButton}
          >
            Start Recording
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.stopRecord}
          >
            Stop Recording
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(VideoRecorder);
