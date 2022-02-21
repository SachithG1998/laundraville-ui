import React from "react";

function Card({ cardTitle, cardText, cardButton }) {
  return (
    <div className="card card-layout glassy dark rounded-corners">
      <div className="card-body">
        <h1 className="card-title">{cardTitle}</h1>
        <p className="card-text">{cardText}</p>
        {typeof cardButton !== "undefined" ? (
          <a href={cardButton.to} className="btn btn-primary">
            {cardButton.name}
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Card;
