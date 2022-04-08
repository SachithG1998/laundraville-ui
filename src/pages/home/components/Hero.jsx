import React from "react";

import { introCardData } from "../data";

import Cover from "../../../assets/images/home/laundry.png";

import Card from "../../../components/card/Card";

function Hero() {
  return (
    <div className="container-fluid p-0 position-relative">
      <div className="row">
        <img src={Cover} alt="Folded Laundry" className="img-fluid" />

        <div className="col-12 m-4">
          <Card
            cardTitle={introCardData.title}
            cardText={introCardData.text}
            cardButton={introCardData.button}
            cardStyle="intro-card text-white glassy dark rounded-corners"
            dataAos="fade-right"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
