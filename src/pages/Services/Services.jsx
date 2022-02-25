import React from "react";

import Card from "../../components/Card";

import "./Services.css";

import { serviceCardData1 ,serviceCardData2 ,serviceCardData3 } from "./servicedata";

function Services()
{
  return (
      <>
        <div className="container">

          <div className="container service1 ">
            <Card
            cardImage={serviceCardData1.image}
              cardTitle={serviceCardData1.title}
              cardText={serviceCardData1.text}
            />
          </div>

          <div className="container service2  ">
            <Card
            cardImage={serviceCardData2.image}
              cardTitle={serviceCardData2.title}
              cardText={serviceCardData2.text}
            />
          </div>

          <div className="container service3  ">
            <Card
            cardImage={serviceCardData3.image}
              cardTitle={serviceCardData3.title}
              cardText={serviceCardData3.text}
            />
          </div>

          </div>
          </>
  );
  }
  export default Services;
