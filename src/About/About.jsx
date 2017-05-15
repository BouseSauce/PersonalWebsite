import "./About.css";
import React from "react";
import MyFace from "../images/myFace.jpg";

function template() {
  return (
    <div className="about">
      <h1>Understanding my passion</h1>
   
      	
      	<p>There's something to be said about working with passionate business owners that truly love what they do. I’m no different. I started my business because I honestly enjoy coming to work every day to create something beautiful that has the ability to impact others. </p>
    	<img src={MyFace} className="faceImage" />
    </div>
  );
};

export default template;
