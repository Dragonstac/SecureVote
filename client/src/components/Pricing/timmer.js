import React from "react";

import Countdown from "react-countdown";

// Random component
const Completionist = () => <span  style={{color: 'white'}} >Voting have been finished</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};



function timmer() {
  return (
    <div  style={{color: 'white'}} >
        
        <Countdown date={'2022-11-13T13:25:50.417-07:00'} renderer={renderer} />
        {/* <Countdown date={Date.now() + 10000} renderer={renderer} /> */}
      
      </div>
  )
}

export default timmer







