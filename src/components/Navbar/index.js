import React from "react";

import PageRouters from "./PageRouters";

import routes from "../../routes";

import "./index.css";

export default function Navbar() {
  return (
    <div className="Box">
      <PageRouters routes={routes} />
    </div>
  );
}
