import React, { Component } from 'react';

import { VolumeOff, VolumeDown, VolumeUp } from '@material-ui/icons';
import Slider from '@material-ui/lab/Slider';

import './styles.css';


class VideoPlayerVolume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.currentVolume,
      currentVolume: this.props.currentVolume
    }
  }

  handleVolume = () => {
    let currentVolume = (this.state.value != 0) ? 0 : 1;
    if (currentVolume == 1) currentVolume = this.state.currentVolume;
    this.setState({
      value: currentVolume
    });
    this.props.handleVolumeChange(currentVolume);
  }

  handleChange = (event, value) => {
    this.setState({
      value: value,
      currentVolume: value
    });
    this.props.handleVolumeChange(value);
  }

  render() {
    let icon = null;
    if (this.state.value == 0) {
      icon = <VolumeOff fontSize="large"/>;
    } else if (this.state.value == 1) {
      icon = <VolumeUp fontSize="large"/>;
    } else {
      icon = <VolumeDown fontSize="large"/>;
    }
    return (
      <React.Fragment>
        <div className="volume">
          <button className="volume__button" onClick={this.handleVolume}>
            {icon}
          </button>
          <div className="volume__slider">
            <Slider
              value={this.state.value}
              aria-labelledby="label"
              onChange={this.handleChange}
              min={0}
              max={1}
              step={0.05}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default VideoPlayerVolume;
