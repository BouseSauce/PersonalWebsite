import "./Contact.css";
import React from "react";

function template() {
    return (

      <div className="contact">
      <h1>Get in touch!</h1>
      <div className="contactContainer">
        
        <div className="contentContaier">
        	<div className="contactInfo">
        	<h1>Hey hey</h1>
        	<p>asdfasdfasdfasdf</p>
        	</div>
             <div className="inputForm">
             	<form>	
             		<div className="nameContainer">
	             		<div className="firstName">
		             		<p>First Name</p><br/>
		             		<input type="text" name="firstName"/>	
	             		</div>
	             		<div className="lastName">
		             		<p>Last Name</p>
		             		<input type="text" name="lastName"/>
	             		</div>
             		</div>
             		<div className="emailContainer">
             		<p>Email</p>
             			<input type="text" name="email"/>	
             		</div>
             		<div className="submit">
             				<input type="submit" value="Submit"/>
             		</div>
             	</form>
             </div>             
        </div>
        </div>
      </div>
    );

};



export default template;
