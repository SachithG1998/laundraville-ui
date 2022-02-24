import React from "react";

import Cover from "../../assets/images/home/laundry.png";
import Card from "../../components/Card";

import "./Home.css";

import { introCardData, infoCardsData } from "./data";

function Home() {
  return (
    <>
      <div className="container-fluid cover-area">
        <img src={Cover} alt="Folded Laundry" className="img-fluid" />

        {/* Recheck this in spare time */}
        <div className="container intro-card text-white">
          <Card
            cardTitle={introCardData.title}
            cardText={introCardData.text}
            cardButton={introCardData.button}
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 px-3 g-4">
        {infoCardsData.map((infoCard) => {
          return (
            <div key={infoCard.id} className="col text-white text-center">
              <Card
                cardImage={infoCard.image}
                cardTitle={infoCard.title}
                cardText={infoCard.text}
                cardStyle="h-100"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
