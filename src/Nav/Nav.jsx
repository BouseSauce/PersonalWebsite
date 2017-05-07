import "./Nav.css";
import React from "react";
import Logo from '../images/logo.png'
function template() {
  return (
    <div className="nav">
    	<img className="logo" src={Logo} />
      	<h1>Home</h1>
      	<h1>Portfolio</h1>
      	<h1>About</h1>
      	<h1>Resume</h1>
      	<h1 className="contact">Contact</h1>
    </div>
  );
};

export default template;
