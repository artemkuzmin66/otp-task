import React from 'react';
import './slider.scss';


const Slider = (props) => {
   debugger
   return (
      <div className="slider">
         <input value={props.range} onChange={props.change} className="range" type="range" id="fader" min="0" max="600" step="1" />
      </div>

   );
}

export default Slider;