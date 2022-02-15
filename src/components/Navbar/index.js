import React from "react";

import Layout from "./Layout";

import { routes } from "../../routes";

import "./index.css";

export default function Navbar() {
  return (
    <div className="Box">
      <Layout routes={routes} />
    </div>
  );
}
