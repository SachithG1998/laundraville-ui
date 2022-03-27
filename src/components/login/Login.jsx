import React from "react";

function Login() {
  const handleInputValues = () => {};

  const onSubmitHandler = () => {};

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
                // value={customer.username}
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
                //   value={customer.password}
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
