import React, { Component } from 'react';

import { Fullscreen, FullscreenExit } from '@material-ui/icons';

import './styles.css';


const VideoPlayerFullscreen = (props) => (
  <div className="fullscreen">
    <button type="button" onClick={props.handleFullscreen}>
      {props.isFullscreen ?
      <FullscreenExit fontSize="large" />
      :
      <Fullscreen fontSize="large" />
      }
    </button>
  </div>
)

export default VideoPlayerFullscreen;
