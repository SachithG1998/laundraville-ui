import React, { useState } from "react";
import Joi from "joi";

import { toast } from "react-toastify";

import axios from "axios";

import "../styles.css";

const api = axios.create({
  baseURL: process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL,
});

function Login() {
  /* Defining login state and setLogin hook */
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  /* Validation schema for signup form */
  const validationSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(8).max(16).required(),
  });

  /* Manually update input value */
  const handleInputValues = (event) => {
    const target = event.target;

    const name = target.name;
    let value = target.value;

    setLogin((prevState) => {
      return { ...prevState, ...{ [name]: value } };
    });
  };

  /* Validate input in comparison with the validation schema */
  const validateForm = () => {
    const result = validationSchema.validate(login);

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

  const loginCustomer = async () => {
    await api
      .post("/customer/login", login)
      .then((res) => {
        const { status, data } = res;

        console.log(res);

        if (status === 200) {
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
      })
      .catch((error) => console.log(error));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      loginCustomer();
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
            <h2 className="text-primary">Login Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="username"
                id="username"
                className="input-text"
                placeholder="Username"
                value={login.username}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-row">
              <input
                type="password"
                name="password"
                id="password"
                className="input-text"
                placeholder="Password"
                value={login.password}
                onChange={handleInputValues}
              />
            </div>
            <div className="form-row">
              <button
                type="submit"
                name="register"
                className="btn btn-primary mb-3"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
