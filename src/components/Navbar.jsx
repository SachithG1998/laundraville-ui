import React from "react";

import "./Navbar.css";

import Logo from "../assets/images/Logo.png";
import { pages } from "../routes";

function Navbar() {
  return (
    <div className="p-2">
      <nav className="navbar navbar-expand-lg glassy">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="Laundraville Logo" className="navbar-logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {pages.map((page) => {
                return (
                  <a className="nav-link" href={page.to}>
                    {page.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
