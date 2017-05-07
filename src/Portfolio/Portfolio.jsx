import "./Portfolio.css";
import React from "react";
import Game from "../images/game.jpg"

function template() {
  return (
      <div className="portContainer">
      	<h1>My Latest Projects</h1>
      	<div className="itemContainer">
      	
      			<p className="item itemOne">Landing Page</p>
            <p className="item itemTwo">Paintball</p>
      			<p className="item itemThree">AI Algorithm</p>
      	</div>
      </div>
    
  );
};

export default template;
