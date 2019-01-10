import React, { Component } from 'react';

import VideoPlayerTitle from './title';
import VideoPlayerControl from './controls';
import VideoPlayerSpinner from './spinner';

import './styles.css';


class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pause: false,
      duration: 0,
      currentTime: 0,
      currentVolume: 1,
      isFullscreen: false,
      loading: true
    }
    this.video = React.createRef();
    this.videoPlayer = React.createRef();
  }

  togglePlay = () => {
    if (!this.state.pause) {
      this.video.current.pause();
    } else {
      this.video.current.play();
    }
    this.setState({
      pause: !this.state.pause,
    });
  }

  handleLoadedMetadata = el => {
    this.setState({
      duration: this.video.current.duration
    });
  }

  handleTimeUpdate = el => {
    this.setState({
      currentTime: this.video.current.currentTime
    });
  }

  handleProgressChange = currentTime => {
    this.video.current.currentTime = currentTime;
  }

  handleVolumeChange = currentVolume => {
    this.video.current.volume = currentVolume;
  }

  preventVideoContextMenu = event => {
    event.preventDefault();
  }

  handleFullscreen = () => {
    let isFullscreen = false;
    if (!document.webkitIsFullScreen) {
      this.videoPlayer.current.webkitRequestFullscreen();
      isFullscreen = true;
    } else {
      document.webkitExitFullscreen();
      isFullscreen = false;
    }
    this.setState({
      isFullscreen: isFullscreen
    });
  }

  handleSeeking = () => {
    this.setState({
      loading: true
    });
  }

  handleSeeked = () => {
    this.setState({
      loading: false
    });
  }

  render() {
    const { video } = this.props;
    return (
      <div className="video" ref={this.videoPlayer}>
        <VideoPlayerTitle title={video.title}/>
        <VideoPlayerSpinner loading={this.state.loading}/>
        <VideoPlayerControl
          pause={this.state.pause}
          togglePlay={this.togglePlay}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
          currentVolume={this.state.currentVolume}
          isFullscreen={this.state.isFullscreen}
          handleProgressChange={this.handleProgressChange}
          handleVolumeChange={this.handleVolumeChange}
          handleFullscreen={this.handleFullscreen}
        />
        <div onContextMenu={this.preventVideoContextMenu} onClick={this.togglePlay} className="video-container">
          <video
            ref={this.video}
            autoPlay={!this.pause}
            src={video.src}
            onLoadedMetadata={this.handleLoadedMetadata}
            onTimeUpdate={this.handleTimeUpdate}
            onSeeking={this.handleSeeking}
            onSeeked={this.handleSeeked}
            onCanPlayThrough={this.handleSeeked}
          />
        </div>
      </div>
    )
  }

}

export default VideoPlayer;
