import React from "react";

import Cover from "../assets/images/laundry.png";
import Card from "../components/Card";

import "./Home.css";

import { introCardData } from "./data";

function Home() {
  return (
    <>
      <div className="container-fluid cover-area">
        <img src={Cover} alt="Folded Laundry" className="img-fluid" />
        <div className="intro-card">
          <Card
            cardTitle={introCardData.title}
            cardText={introCardData.text}
            cardButton={introCardData.button}
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid test">
        <div className="row gy-5">
          <div className="col-12 col-md-6 col-lg-4">
            <Card
              cardTitle={introCardData.title}
              cardText={introCardData.text}
              cardButton={introCardData.button}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Card
              cardTitle={introCardData.title}
              cardText={introCardData.text}
              cardButton={introCardData.button}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Card
              cardTitle={introCardData.title}
              cardText={introCardData.text}
              cardButton={introCardData.button}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
