import React, { Component } from 'react';

import Slider from '@material-ui/lab/Slider';

import './styles.css';


class VideoPlayerProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.currentTime
    }
  }

  handleChange = (event, value) => {
    this.setState({ value: value });
    this.props.handleProgressChange(value);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.currentTime });
  }

  render() {
    return (
      <div className="progress-bar">
        <Slider
          value={this.state.value}
          aria-labelledby="label"
          onChange={this.handleChange}
          max={this.props.duration}
        />
      </div>
    )
  }

}

export default VideoPlayerProgressBar;
