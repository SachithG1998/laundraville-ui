import React from "react";

import "./Navbar.css";

import LaundravilleLogoImg from "../brand/LaundravilleBrand";
import Navlinks from "./components/Navlinks";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top glassy light">
      <div className="container-fluid">
        <LaundravilleLogoImg to="/" />
        <Navlinks />
      </div>
    </nav>
  );
}

export default Navbar;
