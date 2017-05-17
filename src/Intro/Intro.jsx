import "./Intro.css";
import React from "react";


function template() {

  var openBrace = '{';
  var closeBrace = '}';
  return (
  	<div className="container">

    <div className="intro">
       
        <div className="introContent">
    	<p className="subText">Resume, Github & Portfolio </p>
      	<p className="heading">{openBrace} Web Developer {closeBrace}</p>
      	  <div className="buttonContainer">
   			<a href="https://www.dropbox.com/s/81yyq3xqimgyfqs/Samuel%20Kennedy%20CV.pdf?dl=0"><h1 className="button">Resume</h1></a>
   			<a href='#'><h1 className="button">Portfolio</h1></a>
   		 </div>
    </div>
    </div>
  

    </div>
  );
};

export default template;
