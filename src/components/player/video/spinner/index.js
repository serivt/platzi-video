import React from 'react';

import './styles.css';


const VideoPlayerSpinner = props => {
  if (!props.loading) return null;
  return (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default VideoPlayerSpinner;
