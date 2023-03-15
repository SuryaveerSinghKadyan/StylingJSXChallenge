//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let greeting = "";

const currentHour = new Date().getHours();

let textColourObj = {
  color: "",
  borderColor: ""
};

if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good Morning";
  textColourObj.color = "red";
  textColourObj.borderColor = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good Afternoon";
  textColourObj.color = "green";
  textColourObj.borderColor = "green";
} else {
  greeting = "Good Evening";
  textColourObj.color = "blue";
  textColourObj.borderColor = "blue";
}

ReactDOM.render(
  <h1 style={textColourObj} className="heading">
    {greeting}
  </h1>,
  document.getElementById("root")
);
