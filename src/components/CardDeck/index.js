import React from "react";
import "./index.css"

const CardDeck = (props) => {
  return (
    <div className="card-deck p-4 mx-4">{props.children}</div>
  )
}

export default CardDeck;
