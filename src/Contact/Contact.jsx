import "./Contact.css";
import React from "react";

function template() {
  var enterCounter = 0;
  var inputText =  <input type="text" placeholder="Name"  onKeyPress={handleKeyPress} />;
  var handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    
    
  console.log('handleKeyPress has been called');
  }
function template() {
  return (
    <div className="contact">
      <h1>Get in touch!</h1>
      <div className="inputBoxContainer">
      	
       
        <div className="emailFeild" >
      	   inputText
      	</div>
      
      </div>

    </div>
  );
};

export default template;
