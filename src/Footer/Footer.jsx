import "./Footer.css";
import React from "react";
import InstaIcon from "../images/instagram.png";
import GithubIcon from "../images/github.png";
import LinkIcon from '../images/Linkedin.png'

function template() {
  return (
  	<div className="container">
  		<div className="pageBackGround">
		    <div className="footer">
		      <h1>Home</h1>
		      <h1>Portfolio</h1>
		      <h1>About</h1>
		      <h1>Resume</h1>
		      <h1>Contact</h1>
		    </div>
		    <div className="callText">
		    	<p>For more information call <a href="tel:0279503185"> 027-950-3185</a></p>
			   
		    </div>
		     <div className="imageIcons">
			    	<a href="https://www.instagram.com/the_drifting_kiwi/?hl=en" target="_blank"><img  src={InstaIcon} /> </a>
			    	<a href="https://github.com/BouseSauce" target="_blank"><img src={GithubIcon} /></a>
			    	<a  href="https://www.linkedin.com/in/sam-kennedy-50a19164/" target="_blank" ><img src={LinkIcon} /> </a>
			    </div>
	    </div>
	</div>
  );
};

export default template;
 