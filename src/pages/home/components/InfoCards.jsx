import React from "react";

import Card from "../../../components/card/Card";

import { infoCardsData } from "../data";

import "../Home.css";

function InfoCards() {
  return (
    <div className="container-fluid p-0">
      <div className="row justify-content-center py-5 px-3 g-4">
        {infoCardsData.map((infoCard) => {
          return (
            <div
              key={infoCard.id}
              className="col-10 col-md-6 col-lg-4 text-white text-center"
            >
              <Card
                cardImage={infoCard.image}
                cardTitle={infoCard.title}
                cardText={infoCard.text}
                cardStyle="h-100"
                dataAos="fade-down"
                dataAosDuration="1000"
                dataAosDelay={infoCard.animationDelay}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfoCards;
