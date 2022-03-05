import React from "react";

import Logo from "../../../assets/images/Logo.png";

function LaundravilleLogoImg() {
  return (
    <a class="navbar-brand navbar-logo-anchor" href="/">
      <img src={Logo} alt="Laundraville Logo" className="navbar-logo" />
    </a>
  );
}

export default LaundravilleLogoImg;
