import React from "react";

import Card from "C:/Users/laiyy/Source/Laundravile/laundraville-ui/src/components/card/ServiceCard.jsx";

import { Servicecard } from "./servicedata";

import "../Services/Services.css";

function Servicecards() {
  return (
    <div className="container-fluid p-0" id="cont">
      <div className="row justify-content-center py-5 px-3 g-4">
        {Servicecard.map((SCard) => {
          return (
            <div
              key={SCard.id}
              className="row g-0 text-white text-center">

            <div class ="col-md-4" id="pic">
              <Card cardImage={SCard.image}/>
            </div>

            <div className="col-md-8" id="cardst">
              <Card
                cardTitle={SCard.title}
                cardText={SCard.text}
                cardStyle="h-100"
                dataAos="fade-down"
                dataAosDuration="1000"
                dataAosDelay={SCard.animationDelay}/>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Servicecards;
