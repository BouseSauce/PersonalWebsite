import "./Nav.css";
import React from "react";
import Logo from '../images/logo.png'
function template() {
  return (
    <div className="nav">
    	<img className="logo" src={Logo} />
      	<a href="#"><h1>Home</h1></a>
      	<a href="#"><h1>Portfolio</h1></a>
      	<a href="#"><h1>About</h1></a>
      	<a href="#"><h1>Resume</h1></a>
      	<a href="#"><h1 className="contact">Contact</h1></a>
    </div>
  );
};

export default template;
