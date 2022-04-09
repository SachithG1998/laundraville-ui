import React, { useEffect, useState } from "react";
import PricingModal from "../../components/modals/pricingModal/PricingModal";

import Navbar from "./components/Navbar";
import OrderList from "./components/OrderList";
import Sidebar from "./components/Sidebar";

import "./styles.css";

const axios = require("axios").default;

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api`,
});

function Dashboard() {
  if (!JSON.parse(localStorage.getItem("loggedIn")))
    window.location.assign("/");

  const [customer, setCustomer] = useState({
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

  const [orderSummary, setOrderSummary] = useState({
    totalDue: 0,
    orders: [],
  });

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
              setOrderSummary({
                totalDue: data.totalDue,
                orders: data.orders,
              });
            }
          });
      }
    }

    async function getCustomerDetails() {
      if (JSON.parse(localStorage.getItem("loggedIn"))) {
        api.get(`/dashboard/customer/${customer.id}`).then((res) => {
          const { status, data } = res;

          if (status === 200 && data.statusMessage === "CUSTOMER_FOUND") {
            const { customer } = data;
            setCustomer({
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

  // useEffect(() => {
  //   console.log(orderSummary);
  // }, [orderSummary]);

  return (
    <div className="position-relative">
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-3">
            <Sidebar customer={customer} totalDue={orderSummary.totalDue} />
            <PricingModal />
          </div>
          <div className="col-12 col-md-9">
            {orderSummary.orders.map((order) => (
              <OrderList key={order._id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
