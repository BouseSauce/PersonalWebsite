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
		     	 <a href="#Home"><h1>Home</h1></a>
		      <a href="#Portfolio"><h1 >Portfolio</h1></a>
		      <a href="#About"><h1>About</h1></a>
		      <a href="https://www.dropbox.com/s/81yyq3xqimgyfqs/Samuel%20Kennedy%20CV.pdf?dl=0"><h1>Resume</h1></a>
		    
		    </div>
		    <div className="callText">
		    	<p><a href="mailto:sam.kennedy02@gmail.com">Sam.kennedy02@gmail.com</a></p>
		    </div>
		     <div className="imageIcons">
			    	<a href="https://www.instagram.com/the_drifting_kiwi/?hl=en" target="_blank"><img  src={InstaIcon} /> </a>
			    	<a href="https://github.com/BouseSauce" target="_blank"><img src={GithubIcon} /></a>
			    	<a href="https://www.linkedin.com/in/sam-kennedy-50a19164/" target="_blank" ><img src={LinkIcon} /> </a>
			    </div>
	    </div>
	</div>
  );
};

export default template;
 