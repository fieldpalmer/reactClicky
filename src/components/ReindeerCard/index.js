import React from "react";
import "./index.css";

const ReindeerCard = props => (
    <div 
      className="card m-0" 
      key={props.id} 
      onClick={()=> props.onClick(props.clicked, props.id)}
    >
      <img 
        className="img-fluid"
        src={require(`../../images/${props.image}`)} 
        alt={props.name}
      />
    </div>
);

export default ReindeerCard;