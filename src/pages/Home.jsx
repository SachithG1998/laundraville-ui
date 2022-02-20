import React from "react";

import Cover from "../assets/images/laundry.png";
import Card from "../components/Card";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="vh-100">
        <img
          src={Cover}
          alt="Folded Laundry Cover Image"
          className="img-fluid"
        />
      </div>
    </>
  );
}

export default Home;
