import React from "react";

import "./Navbar.css";

import Logo from "../../assets/images/Logo.png";
import { pages } from "../../routes";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top glassy light">
      <div class="container-fluid">
        <a class="navbar-brand navbar-logo-anchor" href="/">
          <img src={Logo} alt="Laundraville Logo" className="navbar-logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapsibleContent"
          aria-controls="navbarCollapsibleContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapsibleContent">
          <div className="navbar-nav ms-3 me-auto my-2 my-lg-0 navbar-nav-scroll">
            {pages.map((page) => {
              return (
                <div className="nav-item">
                  <a
                    className="nav-link nav-link-font"
                    href={page.to}
                    key={page.id}
                  >
                    {page.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
