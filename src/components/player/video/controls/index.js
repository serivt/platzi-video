import React from 'react';

import VideoPlayerTrigger from './trigger';
import VideoPlayerTimer from './timer';
import VideoPlayerProgressBar from './progress-bar';
import VideoPlayerVolume from './volume';
import VideoPlayerFullscreen from './fullscreen';


import './styles.css';

const VideoPlayerControls = props => (
  <div className="controls">
    <div className="controls__progress-bar">
      <VideoPlayerProgressBar
        currentTime={props.currentTime}
        duration={props.duration}
        handleProgressChange={props.handleProgressChange}
      />
    </div>
    <div>
      <VideoPlayerTrigger
        pause={props.pause}
        togglePlay={props.togglePlay}
      />
      <VideoPlayerTimer
        currentTime={props.currentTime}
        duration={props.duration}
      />
      <span style={{float: 'right'}}>
        <VideoPlayerVolume
          currentVolume={props.currentVolume}
          handleVolumeChange={props.handleVolumeChange}
        />
        <VideoPlayerFullscreen
          isFullscreen={props.isFullscreen}
          handleFullscreen={props.handleFullscreen}
        />
      </span>
    </div>
  </div>
)

export default VideoPlayerControls;
