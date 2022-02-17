import React from "react";

import Layout from "./Layout";

import { routes } from "../../LayoutList";

import "../../common/styles.css";
import "./index.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="glassy box">
        <Layout routes={routes} />
      </div>
    </div>
  );
}
