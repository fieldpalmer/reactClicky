import React from "react";
import "./index.css"

const Scoreboard = props => (
  <div className="container p-0">
    <div className="row mx-4">
      <div className="col-sm-12">
        <h5 className="text-center">{props.message}</h5>
      </div>
      <div className="col-sm-6 text-right">
        <h4>high score: {props.highScore}</h4>
      </div>
      <div className="col-sm-6 text-left">
        <h4>your score: {props.currentScore}</h4>
      </div>
    </div>
  </div>
)

export default Scoreboard;
