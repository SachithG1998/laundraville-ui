import React from "react";

import Basket from "../../basket/Basket";
import CustomerEntry from "./CustomerEntry";
import Profile from "../../customerEntry/profile/Profile";

import { pages } from "../../../routes";

function Navlinks() {
  return (
    <>
      <button
        class="navbar-toggler navbar-right"
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

        <div className="d-flex justify-content-between align-items-center">
          {JSON.parse(localStorage.getItem("loggedIn")) ? (
            <Profile />
          ) : (
            <CustomerEntry />
          )}

          {JSON.parse(localStorage.getItem("loggedIn")) ? <Basket /> : <></>}
        </div>
      </div>
    </>
  );
}

export default Navlinks;
