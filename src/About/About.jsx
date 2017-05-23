import "./About.css";
import React from "react";
import MyFace from "../images/myFace.jpg";

function template() {
  return (
    <div id="About" className="about">
      <h1>Understanding my passion</h1>
      	<p>There's something to be said about working with powerful ideas to turn them into beautiful web pages. I started developement to create something meaningful that has the ability to positively impact others. </p>
    	<img src={MyFace} className="faceImage" />
    </div>
  );
};

export default template;
