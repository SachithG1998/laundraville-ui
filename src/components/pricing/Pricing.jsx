import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddToCart from "./components/AddToCart";

import "./Pricing.css";

const axios = require("axios").default;

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api/service`,
});

function Pricing() {
  const [services, setServices] = useState([]);

  useEffect(async () => {
    await api.get("/all").then((res) => {
      const { status, data } = res;

      if (status === 200 && data.statusMessage === "RETURNED_SERVICES") {
        setServices(data.services);
      } else if (status === 200 && data.statusMessage === "NO_SERVICES") {
        toast.warning(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (data.statusMessage === "ERROR") {
        toast.error(data.errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }, []);

  var currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LKR",
  });

  return (
    <div class="container-fluid p-3">
      <div className="row d-flex justify-content-center p-5 p-md-4 p-lg-3">
        {services.map((service) => {
          return (
            <div
              id="pricing-card"
              class="card glassy light border-0 col-12 col-md-6 col-lg-3 my-5 mx-5"
            >
              <img
                class="mx-auto img-thumbnail border-0"
                style={{ height: "200px" }}
                src={`${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/static/images/${service.image}`}
                alt="descriptive text"
              />
              <div class="card-body text-center mx-auto">
                <h5 class="card-title">{service.serviceName}</h5>
                <p class="card-text">
                  {currencyFormatter.format(service.unitPrice)}
                </p>

                {JSON.parse(localStorage.getItem("loggedIn")) ? (
                  <AddToCart />
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
