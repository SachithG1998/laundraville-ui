import React from "react";

import logout from "../../../helpers/logout";

function UserInfoCard(props) {
  return (
    <div className="container text-center mt-5 d-d-inline-flex">
      <div className="card p-3 glassy light rounded-corners">
        <div className="d-flex align-items-center">
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{props.customer.fullName}</h4>{" "}
            <p>{`${props.customer.addressLine1}, ${props.customer.addressLine2}, ${props.customer.postalCity}`}</p>
            <div className="container m-0 p-0">
              <div className="row">
                <div className="col-12 col-md-6">
                  <button
                    className="btn btn-sm btn-danger w-100 m-1"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
                <div className="col-12 col-md-6">
                  <button className="btn btn-sm btn-primary w-100 m-1">
                    Edit Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
