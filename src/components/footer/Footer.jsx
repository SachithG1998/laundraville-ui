import React from "react";
import { footerLinks, socials } from "./data";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start my-4">
        <div className="d-flex flex-row justify-content-center mb-2">
          {socials.map((social) => {
            return (
              <div className="px-2">
                <a key={social.id} href={social.url} target="_blank">
                  <i class={`${social.icon} fa-lg`} />
                </a>
              </div>
            );
          })}
        </div>

        <div className="row text-center text-md-start">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.id}
                className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"
              >
                <h1 className="text-uppercase mb-4">{footerLink.header}</h1>
                {footerLink.items}
              </div>
            );
          })}
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-12 col-md-8">
            <form action="">
              <div className="row">
                <div className="col-12 col-md-3 col-lg-2 p-0 col-form-label text-center text-md-start">
                  <label htmlFor="subscribeEmail">
                    <p>Subscribe to our Newsletter</p>
                  </label>
                </div>
                <div className="col-12 col-md-6 col-lg-5 px-sm-3">
                  <input
                    type="email"
                    className="form-control"
                    id="subscribeEmail"
                  />
                </div>
                <div className="col-12 col-md-3 py-3 py-md-0">
                  <button className="btn btn-primary ">Subsribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
