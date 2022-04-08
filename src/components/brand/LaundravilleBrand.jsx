import React from "react";

import Logo from "../../assets/images/Logo.png";

function LaundravilleBrand(props) {
  return (
    <a class="navbar-brand navbar-logo-anchor" href={props.to}>
      <img src={Logo} alt="Laundraville Logo" className="navbar-logo" />
    </a>
  );
}

export default LaundravilleBrand;
