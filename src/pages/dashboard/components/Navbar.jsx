import React from "react";

import Profile from "../../../components/customerEntry/profile/Profile";
import Basket from "../../../components/basket/Basket";
import LaundravilleBrand from "../../../components/brand/LaundravilleBrand";

function Navbar() {
  return (
    <nav class="navbar fixed-top flex-md-nowrap ps-2 glassy light">
      <LaundravilleBrand to="/" />
      <div className="d-flex flex-row-reverse align-items-center">
        <Basket />
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
