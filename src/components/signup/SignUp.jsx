import React from "react";

import "./SignUp.css";

function SignUp() {
  return (
    <div className="page-content my-5">
      <div className="form-v10-content">
        <form
          className="form-detail"
          action="#"
          method="post"
          id="registerCustomerForm"
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
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="input-text"
                  placeholder="Last Name"
                  required
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
                required
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
                required
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
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="input-text"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-right glassy dark">
            <h2>Contact Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="addLine1"
                className="addLine1"
                id="addLine1"
                placeholder="Address Line 1"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="addLine2"
                className="addLine2"
                id="addLine2"
                placeholder="Address Line 2"
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="city"
                  className="city"
                  id="city"
                  placeholder="City"
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="district"
                  className="district"
                  id="district"
                  placeholder="District"
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
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="yourEmail"
                id="yourEmail"
                className="input-text"
                placeholder="Your Email"
                required
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