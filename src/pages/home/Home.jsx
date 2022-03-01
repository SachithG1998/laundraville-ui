import React from "react";

import Cover from "../../assets/images/home/laundry.png";
import Card from "../../components/card/Card";

import "./Home.css";

import { introCardData, infoCardsData } from "./data";

function Home() {
  return (
    <>
      <div className="container-fluid p-0 position-relative">
        <div className="row">
          <img src={Cover} alt="Folded Laundry" className="img-fluid" />

          <div className="col-12 m-4">
            <Card
              cardTitle={introCardData.title}
              cardText={introCardData.text}
              cardButton={introCardData.button}
              cardStyle="intro-card text-white"
              dataAos="fade-right"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 px-3 g-4">
          {infoCardsData.map((infoCard) => {
            return (
              <div key={infoCard.id} className="col text-white text-center">
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
    </>
  );
}

export default Home;
