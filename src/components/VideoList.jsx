import React from "react";

const VideoList = ({ iframe, title }) => {
  
  return (
    <div className="videoMode">
        <div>{ iframe }</div>
        <legend>{ title }</legend>
    </div>
  )
};

export default VideoList;
