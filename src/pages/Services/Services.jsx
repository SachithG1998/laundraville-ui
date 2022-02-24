import React from "react";

import Card from "../../components/card/Card";

import "./Services.css";

import { serviceCardData1 ,serviceCardData2 } from "./servicedata";

function Services()
{
  return (
      <>
        <div className="container">
          <div className="container service1 ">
            <Card
              cardTitle={serviceCardData1.title}
              cardText={serviceCardData1.text}
            />
          </div>

          <div className="container service2  ">
            <Card
              cardTitle={serviceCardData2.title}
              cardText={serviceCardData2.text}
            />
          </div>
          </div>
          </>
  );
  }
  export default Services;
