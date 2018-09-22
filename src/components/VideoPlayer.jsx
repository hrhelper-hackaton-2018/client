import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex'
  },
  video: {
    objectFit: true,
    position: 'relative'
  },
  canvas: {
    position: 'absolute'
  }
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    const imageSources = [
      'angry.png',
      'happy.png',
      'neutral-emoticon.png',
      'sad.png',
      'surprised.png'
    ];
    this.smileList = imageSources.map(imgSrc => {
      const image = new Image();
      image.src = imgSrc;
      return image;
    });
    this.state = {
      firstName: 'Oleg',
      secondName: 'Stotsky',
      age: 26,
      rects: [],
      lastRects: [],
      emotion: {
        anger: 0.0,
        contempt: 0.0,
        fear: 0.0,
        disgust: 0.0,
        happiness: 0.0,
        neutral: 0.0,
        sadness: 0.0,
        surprise: 0.0
      }
    };
  }

  componentDidMount() {
    this.video = document.getElementById('video');
    this.videoSource = document.getElementById('videoSource');
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');

    this.context.mozImageSmoothingEnabled = true;

    setInterval(() => this.trackEmotions(this.context, this.canvas), 5000);
    this.trackFaceOnline('Oleg', 'Stotsky', 22, this.context); //TODO: Pass data from props
    setInterval(
      () => this.drawInfo(this.canvas, this.context, this.smileList),
      10000
    );
  }

  drawInfo = (canvas, context, smileList) => {
    if (this.state.rects.length !== 0) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    this.state.rects.forEach(rect => {
      context.strokeStyle = '#a64ceb';
      context.font = '25px Helvetica';
      context.fillStyle = '#fff';
      context.fillText(this.state.firstName, rect.x + 10, rect.y - 55);
      context.fillText(this.state.secondName, rect.x + 10, rect.y - 30);
      context.fillText(this.state.age, rect.x + 10, rect.y - 5);
    });
    const { emotion } = this.state;
    const emotionKeys = Object.keys(emotion);
    var smileNeed = this.hintSelect(this.state);

    for (let i = 0; i < smileNeed.length; i++) {
      context.drawImage(
        smileList[smileNeed[i]],
        canvas.width - 90,
        80 + 85 * i
      );
    }
  };

  trackFaceOnline = (firstName, secondName, age, context) => {
    const tracker = new tracking.ObjectTracker('face');

    tracker.setInitialScale(4);
    tracker.setStepSize(3);
    tracker.setEdgesDensity(0.1);

    tracking.track('#video', tracker);

    tracker.on('track', event => {
      this.state.rects = event.data;
    });
  };

  trackEmotions = (context, canvas) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(video, 0, 0, video.width, video.height);
    const sourceImageUrl = canvas.toDataURL('image/jpeg');
    this.getFaceData(sourceImageUrl).then(data => {
      const { emotion: emotions } = data[0].faceAttributes;
      this.state.emotion = emotions;
    });
  };

  hintSelect = () => {
    const { emotion } = this.state;
    let smileList = [];

    if (emotion.surprise > 0.15) {
      smileList.push(4);
    }

    if (emotion.anger > 0.15) {
      smileList.push(0);
    }

    if (emotion.neutral > 0.5) {
      smileList.push(2);
    }

    if (emotion.happiness > 0.15) {
      smileList.push(1);
    }

    if (emotion.sadness > 0.15) {
      smileList.push(3);
    }

    if (smileList.length === 0) {
      smileList.push(2);
    }

    return smileList;
  };

  getFaceData = sourceImageUrl => {
    // Replace <Subscription Key> with your valid subscription key.
    let subscriptionKey = '7427354c80944d18bb98cb53d3e78456';
    //console.log(subscriptionKey);
    let uriBase =
      'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

    // Request parameters.
    let params = {
      returnFaceId: 'false',
      returnFaceLandmarks: 'false',
      returnFaceAttributes: 'emotion'
    };

    // Perform the REST API call.
    return new Promise((resolve, reject) => {
      $.ajax({
        url: uriBase + '?' + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj) {
          xhrObj.setRequestHeader('Content-Type', 'application/octet-stream');
          xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
        },

        type: 'POST',

        // Request body.
        data: this.makeBlob(sourceImageUrl),
        processData: false
      })

        .done(function(data) {
          console.log(data);
          resolve(data);
        })

        .fail(function(jqXHR, textStatus, errorThrown) {
          // Display error message.
          let errorString =
            errorThrown === ''
              ? 'Error. '
              : errorThrown + ' (' + jqXHR.status + '): ';
          errorString +=
            jqXHR.responseText === ''
              ? ''
              : jQuery.parseJSON(jqXHR.responseText).message
                ? jQuery.parseJSON(jqXHR.responseText).message
                : jQuery.parseJSON(jqXHR.responseText).error.message;
          reject(errorString);
          alert(errorString);
        });
    });
  };

  makeBlob = dataURL => {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      var raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <video
          className={classes.video}
          id="video"
          width="600"
          height="400"
          preload="true"
          autoPlay="ture"
          loop="true"
          muted="true"
        >
          <source
            id="videoSource"
            src="http://localhost:8080/video"
            type="video/webm"
          />
        </video>
        <canvas
          className={classes.canvas}
          id="canvas"
          width="580"
          height="350"
        />
      </div>
    );
  }
}

export default withStyles(styles)(VideoPlayer);
