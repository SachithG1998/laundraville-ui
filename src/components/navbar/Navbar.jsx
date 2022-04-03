import React from "react";

import "./Navbar.css";

import LaundravilleLogoImg from "../brand/LaundravilleBrand";
import Navlinks from "./components/Navlinks";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top glassy light">
      <div class="container-fluid">
        <LaundravilleLogoImg to="/" />
        <Navlinks />
      </div>
    </nav>
  );
}

export default Navbar;
