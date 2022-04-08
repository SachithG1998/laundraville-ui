import React from "react";

import profileIcon from "../../../assets/images/dashboard/profile-icon.png";

import logout from "../../../helpers/logout";

function Profile() {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-outline-light dropdown-toggle"
          id="profileDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="img-responsive"
            height="40px"
          />
        </button>

        <ul
          className="dropdown-menu glassy light"
          aria-labelledby="profileDropdown"
        >
          <li>
            <a className="dropdown-item" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li>
            <button className="dropdown-item" onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
