import "./Portfolio.css";
import React from "react";
import Game from "../images/game.jpg"

function template() {
  return (
      <div className="portContainer">
      	<h1>My Latest Projects</h1>
      	<div className="itemContainer">
      	
      			<a href="#"><p className="item itemOne">Landing Page</p></a>
           <a href="#"> <p className="item itemTwo">Paintball</p></a>
      			<a href="#"><p className="item itemThree">MiniMax Algorithm</p></a>
      	</div>
      </div>
    
  );
};

export default template;
