import React, { useEffect, useState } from "react";
import PricingModal from "../../components/modals/pricingModal/PricingModal";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import "./styles.css";

const axios = require("axios").default;

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api`,
});

function Dashboard() {
  if (!JSON.parse(localStorage.getItem("loggedIn")))
    window.location.assign("/");

  const [customerState, setCustomerState] = useState({
    id: JSON.parse(localStorage.getItem("customerID")),
    fullName: "",
    dob: "",
    addressLine1: "",
    addressLine2: "",
    postalCity: "",
    district: "",
    phone: "",
    email: "",
  });

  const [orderSummary, setOrderSummary] = useState({});

  useEffect(() => {
    async function getOrderSummary() {
      if (JSON.parse(localStorage.getItem("loggedIn"))) {
        await api
          .get(
            `/dashboard/customer/${JSON.parse(
              localStorage.getItem("customerID")
            )}/orderSummary`
          )
          .then((res) => {
            const { status, data } = res;

            if (status === 200) {
              setOrderSummary(data);
            }
          });
      }
    }

    async function getCustomerDetails() {
      if (JSON.parse(localStorage.getItem("loggedIn"))) {
        api.get(`/dashboard/customer/${customerState.id}`).then((res) => {
          const { status, data } = res;

          if (status === 200 && data.statusMessage === "CUSTOMER_FOUND") {
            const { customer } = data;
            setCustomerState({
              fullName: `${customer.name.firstName} ${customer.name.lastName}`,
              dob: customer.dob,
              addressLine1: customer.address.line1,
              addressLine2: customer.address.line2,
              postalCity: customer.address.postalCity,
              district: customer.address.district,
              phone: customer.phone,
              email: customer.email,
            });
          }
        });
      }
    }

    getOrderSummary();
    getCustomerDetails();
  }, []);

  return (
    <div className="position-relative">
      <Navbar />
      <Sidebar customer={customerState} />
      <PricingModal />
    </div>
  );
}

export default Dashboard;
