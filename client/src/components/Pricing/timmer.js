import React from "react";
import { TextWrapper } from '../../globalStyles';
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span  style={{color: 'white'}} ><TextWrapper
mb="1.4rem"
weight="600"
size="1.5rem"
color="white"
align="center"
> Voting is Finished!
</TextWrapper></span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        <TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.5rem"
						color="white"
						align="center"
					> Time Left- {hours}:{minutes}:{seconds}
					</TextWrapper>
        
      </span>
    );
  }
};



function timmer() {
  return (
    <div  style={{color: 'white'}} >
        
        <Countdown date={'2022-11-13T04:12:50.417-07:00'} renderer={renderer} />
        {/* <Countdown date={Date.now() + 10000} renderer={renderer} /> */}
      
      </div>
  )
}

export default timmer







