import React from "react";

function Card({ cardTitle, cardText }) {
  return (
    <div className="card card-layout glassy dark rounded-corners">
      <div className="card-body">
        <h1 className="card-title">{cardTitle}</h1>
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  );
}

export default Card;
