import React from "react";

import Card from "../../components/Card";

import "./Services.css";

import { serviceCardData1 } from "./servicedata";

function Services()
{
  return (
      <>
        <div className="row">
          <div className="col-sm-6 ">
            <Card
              cardTitle={serviceCardData1.title}
              cardText={serviceCardData1.text}
            />
          </div>
          </div>
          </>
  );
  }
  export default Services;
