import "./Nav.css";
import React from "react";
import Logo from '../images/logo.png'
function template() {
  return (
    <div id="Nav" className="nav">
    
    	<img className="logo" src={Logo} />
      	<a href="#Nav"><h1>Home</h1></a>
      	<a href="#About"><h1>About</h1></a>
      	<a href="https://github.com/BouseSauce"><h1>GitHub</h1></a>
      	<a href="https://www.dropbox.com/s/81yyq3xqimgyfqs/Samuel%20Kennedy%20CV.pdf?dl=0"><h1>Resume</h1></a>
      
      
   
    </div>
  );
};

export default template;
 