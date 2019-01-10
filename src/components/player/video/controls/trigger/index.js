import React from 'react';

import { PlayArrow, Pause } from '@material-ui/icons';

import './styles.css';

const VideoPlayerTrigger = props => (
  <div className="trigger">
    {props.pause ?
      <button onClick={props.togglePlay}>
        <PlayArrow fontSize="large"/>
      </button>
    :
      <button onClick={props.togglePlay}>
        <Pause fontSize="large"/>
      </button>
    }
  </div>
);

export default VideoPlayerTrigger;
