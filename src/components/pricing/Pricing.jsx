import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

import formatCurrency from "../../helpers/formatCurrency";

import AddToCart from "./components/AddToCart";

import "./Pricing.css";

const axios = require("axios").default;

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api/service`,
});

function Pricing() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getData() {
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
    }

    getData();
  }, []);

  const createBasket = async (customerID, addToBasket) => {
    await api
      .post("/basket/newBasket", {
        customerID: customerID,
        basketDatetime: moment().format(),
      })
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          localStorage.setItem("basketID", JSON.stringify(data.basketID));
          addToBasket(data);
        }
      });
  };

  return (
    <div className="container-fluid p-3">
      <div className="row d-flex justify-content-center p-5 p-md-4 p-lg-3">
        {services.map((service) => {
          return (
            <div
              id="pricing-card"
              key={service._id}
              className="card glassy light rounded-corners border-0 col-12 col-md-6 col-lg-3 m-5"
            >
              <img
                className="mx-auto img-thumbnail border-0"
                style={{ height: "200px" }}
                src={`${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/static/images/${service.image}`}
                alt="descriptive text"
              />
              <div className="card-body text-center mx-auto">
                <h5 className="card-title">{service.serviceName}</h5>
                <p className="card-text">
                  {`${formatCurrency(service.unitPrice)} / ${service.unit}`}
                </p>

                {JSON.parse(localStorage.getItem("loggedIn")) ? (
                  <AddToCart
                    api={api}
                    service={service}
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
