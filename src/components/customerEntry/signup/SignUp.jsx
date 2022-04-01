import React, { useState } from "react";
import Joi from "joi";
import moment, { calendarFormat } from "moment";

import { toast } from "react-toastify";

import "../styles.css";

const axios = require("axios").default;

const api = axios.create({
  baseURL: process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL,
});

function SignUp() {
  /* Defining a customer state and setCustomer hook*/
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    addressLine1: "",
    addressLine2: "",
    postalCity: "",
    district: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  /* Formatting current date to match date picker format */
  let date = moment();
  date = date.subtract(18, "y").format("MM/DD/YYYY");

  /* Validation schema for signup form */
  const validationSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().optional().allow("").min(2),
    dob: Joi.date().max(date).required(),
    addressLine1: Joi.string().optional().allow(""),
    addressLine2: Joi.string().optional().allow(""),
    postalCity: Joi.string().optional().allow(""),
    district: Joi.string().optional().allow(""),
    phone: Joi.number().required(),
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(8).max(16).required(),
    confirmPassword: Joi.ref("password"),
  });

  /* Manually update input value */
  const handleInputValues = (event) => {
    const target = event.target;

    const name = target.name;
    let value = target.value;

    // formatting if dob field is recieved
    if (name === "dob") {
      value = moment(value).format("YYYY-MM-DD");
      console.log(value);
    }

    setCustomer((prevState) => {
      return { ...prevState, ...{ [name]: value } };
    });
  };

  /* Validates input values with comparison to the Joi validation schema */
  const validateForm = () => {
    const result = validationSchema.validate(customer);

    console.log(result);

    const { error } = result;

    if (error) {
      toast.error(error.toString(), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return false;
    } else {
      return true;
    }
  };

  const clearForm = () => {
    setCustomer({
      firstName: "",
      lastName: "",
      dob: "",
      addressLine1: "",
      addressLine2: "",
      postalCity: "",
      district: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const registerCustomer = async () => {
    await api
      .post("/customer/register", customer)
      .then((res) => {
        const { status, data } = res;

        if (
          status === 200 &&
          data.statusMessage === "CUSTOMER_REGISTERED_SUCCESSFULLY"
        ) {
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          clearForm();
        } else if (status === 200 && data.statusMessage === "CUSTOMER_EXISTS") {
          toast.warning(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Redirect to login page after 5 seconds
          setTimeout(() => {
            window.location = "/login";
          }, 5000);
        }
      })
      .catch((error) => console.log(error));
  };

  /* Function to handle on submit event */
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      registerCustomer();
    }
  };

  return (
    <div className="page-content my-5">
      <div className="form-v10-content">
        <form
          className="form-detail"
          id="registerCustomerForm"
          onSubmit={onSubmitHandler}
        >
          <div className="form-left glassy light">
            <h2 className="text-primary">General Infomation</h2>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="input-text"
                  placeholder="First Name"
                  value={customer.firstName}
                  onChange={handleInputValues}
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="input-text"
                  placeholder="Last Name"
                  value={customer.lastName}
                  onChange={handleInputValues}
                />
              </div>
            </div>
            <div className="form-row">
              <input
                type="date"
                name="dob"
                className="input-text"
                id="dob"
                placeholder="DOB"
                value={customer.dob}
                onChange={handleInputValues}
              />
            </div>
            <h2 className="text-primary">Login Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="username"
                id="username"
                className="input-text"
                placeholder="Username"
                value={customer.username}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-text"
                  placeholder="Password"
                  value={customer.password}
                  onChange={handleInputValues}
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="input-text"
                  placeholder="Confirm Password"
                  value={customer.confirmPassword}
                  onChange={handleInputValues}
                />
              </div>
            </div>
          </div>
          <div className="form-right glassy dark">
            <h2>Contact Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="addressLine1"
                className="addressLine1"
                id="addressLine1"
                placeholder="Address Line 1"
                value={customer.addressLine1}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="addressLine2"
                className="addressLine2"
                id="addressLine2"
                placeholder="Address Line 2"
                value={customer.addressLine2}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="postalCity"
                  className="postalCity"
                  id="postalCity"
                  placeholder="Postal City"
                  value={customer.postalCity}
                  onChange={handleInputValues}
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="district"
                  className="district"
                  id="district"
                  placeholder="District"
                  value={customer.district}
                  onChange={handleInputValues}
                />
              </div>
            </div>
            <div className="form-row form-row-2">
              <input
                type="text"
                name="phone"
                className="phone"
                id="phone"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                id="email"
                className="input-text"
                placeholder="Your Email"
                value={customer.email}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-checkbox">
              <label className="container">
                <p>
                  I understand that my information submmitted to Laundraville
                  shall not be shared with anyone.
                </p>
                <input type="checkbox" name="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="form-row-last">
              <button
                type="submit"
                name="register"
                className="btn btn-primary mb-3"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
