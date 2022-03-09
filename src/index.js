//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
/*
//"The Code Developed by ME."
const timeZone = {
  interval: "",
  color: ""
};
const currentDate = new Date();
console.log(currentDate);
currentDate.getHours(4);

if (currentDate.getHours() >= 0 && currentDate.getHours() < 12) {
  timeZone.interval = "Morning";
  timeZone.color = "Red";
} else if (currentDate.getHours() >= 12 && currentDate.getHours() < 18) {
  timeZone.interval = "Afternoon";
  timeZone.color = "Green";
} else {
  timeZone.interval = "Night";
  timeZone.color = "Blue";
}

ReactDOM.render(
  <h1 className="heading" style={timeZone}>
    Good {timeZone.interval}
  </h1>,
  document.getElementById("root")
);
*/

//Code by Angela YU.
// const date = new Date(2022, 1, 1, 21);

const date = new Date();
const currentHour = date.getHours();

let greeting = "";

const customStyle = {
  color: ""
};

if (currentHour < 12) {
  greeting = "Good Morning";
  customStyle.color = "Red";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "Green";
} else {
  greeting = "Good Night";
  customStyle.color = "Blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
