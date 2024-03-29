import React from "react";

function Card(props) {
  return (
    <div
      className={`card card-layout ${props.cardStyle}`}
      data-aos={props.dataAos}
      data-aos-duration={props.dataAosDuration}
      data-aos-delay={props.dataAosDelay}
    >
      {typeof props.cardImage !== "undefined" ? (
        <img
          src={props.cardImage.src}
          alt={props.cardImage.alt}
          className="card-image-top"
        />
      ) : (
        <></>
      )}

      <div className="card-body">
        <h5
          className="card-title"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {props.cardTitle}
        </h5>

        <p
          className="card-text"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          {props.cardText}
        </p>

        {typeof props.cardButton !== "undefined" ? (
          <a
            href={props.cardButton.to}
            className="btn btn-primary"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            {props.cardButton.name}
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Card;
