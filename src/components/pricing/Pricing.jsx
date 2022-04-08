import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

import AddToCart from "./components/AddToCart";

import "./Pricing.css";

const axios = require("axios").default;

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api/service`,
});

function Pricing() {
  const [services, setServices] = useState([]);

  const [basketItems, setBasketItems] = useState([]);

  useEffect(async () => {
    if (basketItems != 0) {
      await api
        .post(
          `/basket/saveBasket/${JSON.parse(localStorage.getItem("basketID"))}`,
          { basketItems: basketItems }
        )
        .then((res) => {
          const { status, data } = res;

          if (status === 200) {
            if (data.statusMessage === "BASKET_ITEM_ADDED_SUCCESSFULLY") {
              toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }
        });
    }
  }, [basketItems]);

  const createBasket = (customerID) => {
    api
      .post("/basket/newBasket", {
        customerID: customerID,
        basketDatetime: moment().format(),
      })
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          console.log(data);
        }
      });
  };

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
              key={service._id}
              class="card glassy light rounded-corners border-0 col-12 col-md-6 col-lg-3 m-5"
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
                  {`${currencyFormatter.format(service.unitPrice)} / ${
                    service.unit
                  }`}
                </p>

                {JSON.parse(localStorage.getItem("loggedIn")) ? (
                  <AddToCart
                    api={api}
                    service={service}
                    basketItems={basketItems}
                    setBasketItems={setBasketItems}
                    createBasket={createBasket}
                  />
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
