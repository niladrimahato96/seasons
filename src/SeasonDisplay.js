import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  'winter' : {
    text : "It's Chilly. Use Sweater",
    iconName : 'snowflake'
  },
  'summer' : {
    text : "Let's hit the beach!",
    iconName : 'sun'
  }
}
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }else{
    return lat > 0 ? "winter" : "summer";
  }
}
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  return(
      <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} massive icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right ${iconName} massive icon`}></i>
      </div>
  );
};

export default SeasonDisplay;
