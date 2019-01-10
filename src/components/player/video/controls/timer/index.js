import React from 'react';

import './styles.css';

const leftPad = num => (num > 10) ? num : `0${num}`;

const formattedTime = seg => {
  const minutes = parseInt(seg / 60, 10);
  const seconds = parseInt(seg % 60, 10);
  return `${leftPad(minutes)}:${leftPad(seconds)}`;
}

const VideoPlayerTimer = props => (
  <div className="timer">
    <p>{formattedTime(props.currentTime)}/{formattedTime(props.duration)}</p>
  </div>
);

export default VideoPlayerTimer;
