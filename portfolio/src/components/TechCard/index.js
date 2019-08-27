import React from "react";
import './index.css'

const Card = props => (
    <div className="card" id="tech">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Card;