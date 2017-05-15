import "./Portfolio.css";
import React from "react";
import Game from "../images/game.jpg"

function template() {
  return (
      <div className="portContainer">
      	<h1>My Current Projects</h1>
      	<div className="itemContainer">
      	
      			<a href="https://github.com/BouseSauce/PersonalWebsite"><p className="item itemOne">This Page</p></a>
           <a href="https://github.com/BouseSauce/PaintballWebsite"> <p className="item itemTwo">Making old <br/>look new again</p></a>
      			<a href="https://github.com/BouseSauce/TicTacToeMiniMax"><p className="item itemThree">Small Business<br/> Landing page</p></a>
      	</div>
      </div>
    
  );
};

export default template;
