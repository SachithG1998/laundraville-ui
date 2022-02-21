import React from "react";

import Cover from "../assets/images/laundry.png";
import Card from "../components/Card";

import "./Home.css";

import { introCardData } from "./data";

function Home() {
  return (
    <>
      <div className="cover-area">
        <img src={Cover} alt="Folded Laundry" className="img-fluid" />
        <div className="intro-card">
          <Card
            cardTitle={introCardData[0].title}
            cardText={introCardData[0].text}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
