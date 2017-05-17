import "./About.css";
import React from "react";
import MyFace from "../images/myFace.jpg";

function template() {
  return (
    <div className="about">
      <h1>Understanding my passion</h1>
      	<p>There's something to be said about working with beautiful ideas to turn them into impactful web pages. I started developement to create something beautiful that has the ability to impact others. </p>
    	<img src={MyFace} className="faceImage" />
    </div>
  );
};

export default template;
