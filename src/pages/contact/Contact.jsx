import React, { useState } from "react";
import Joi from "joi";
import moment from "moment";

import { toast } from "react-toastify";

import "../contact/Contstyles.css";

const axios = require("axios").default;

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

function Contact() {

  const [customer, setCustomer] = useState({
    firstName: "",
    message: "",
    email: "",

  });


  const validationSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    email: Joi.string().required(),
    message: Joi.string().required(),
  });


  const handleInputValues = (event) => {
    const target = event.target;

    const name = target.name;
    let value = target.value;

    setCustomer((prevState) => {
      return { ...prevState, ...{ [name]: value } };
    });
  };

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

  const sendEmail = () => {
    window.location.href = `mailto:laundreavillelaundry@gmail.com?subject=Inquiry%20by%20${encodeURI(customer.email)}&body=${encodeURI(customer.message)}`;
    console.log(customer.email);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();


    if (validateForm()) {
      sendEmail();
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
          <div className="form-left1 glassy dark">
            <h2>Our Contact Details</h2>
            <div className="form-groupped">
              <div className="form-group">
                <div className="form-row form-row-1">Call us :</div>
                <div className="form-row form-row-2">
                  <i class="fa fa-phone"></i>
                  <a href="tel:+94 771234567"> +94 771234567</a>
                </div>
              </div>

              <div className="form-group">
                <div className="form-row form-row-1">Location :</div>
                <div className="form-row form-row-2">
                  <i class="fa a-map-marker"></i>
                  <a
                    href="https://goo.gl/maps/ozkvCeZjaJkjMZXJ9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    University Kandy Road Kelaniya, 11600
                  </a>
                </div>
              </div>

              <div className="form-group">
                <div className="form-row form-row-1">Send a Email :</div>
                <div className="form-row form-row-2">
                  <i class="fa fa-envelope"></i>
                  <a
                    href="mailto:laundravillelaundry@gmail.com? Subject=Welcometo%20laundraville"
                    target="_top">
                    laundravillelaundry@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="form-right1 glassy light">
            <h2 className="text-primary">Your Suggestions</h2>
            <div className="form-row ">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="input-text"
                placeholder="Your Name"
                value={customer.firstName}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-row ">
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

            <div className="form-row">
              <input
                type="text"
                name="message"
                className="message"
                id="message"
                placeholder="Your Message"
                value={customer.phone}
                onChange={handleInputValues}
              />
            </div>

            <div className="form-row-last">
              <button
                type="submit"
                name="Sendmessage"
                className="btn btn-primary mb-3">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
