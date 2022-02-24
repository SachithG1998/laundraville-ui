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
=======
function Services() {
  return <div></div>;
}

export default Services;
>>>>>>> 4a0d8a430617bc76275498ed456e78b84f7c111e
