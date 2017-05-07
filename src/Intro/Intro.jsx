import "./Intro.css";
import React from "react";
import Nav from '../Nav/Nav';

function template() {
  return (
  	<div class="container">

    <div className="intro">
        <Nav/>
        <div className="introContent">
    	<p className="subText">Resume, Github & Portfolio</p>
      	<p className="heading">Web Developer</p>

      	  <div className="buttonContainer">

   			<a href="#"><h1 className="button">Resume</h1></a>
   		
   		
   			<a href='#'><h1 className="button">Portfolio</h1></a>
   		 </div>
    </div>
    </div>
  

    </div>
  );
};

export default template;
