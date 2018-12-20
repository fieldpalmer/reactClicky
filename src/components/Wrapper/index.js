import React from "react";
import "./index.css"

const Wrapper = props => {
  return (
    <div className="container">
      <h1 className="text-center">REINDEER GAMES</h1>
      <hr />
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper;
