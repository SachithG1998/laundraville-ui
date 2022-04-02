import React from "react";

import profileIcon from "../../../assets/images/dashboard/profile-icon.png";

function Profile() {
  return (
    <>
      <div class="dropdown">
        <a
          class="btn btn-outline-light dropdown-toggle"
          role="button"
          id="profileDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="img-responsive"
            height="50px"
          />
        </a>

        <ul
          class="dropdown-menu glassy light"
          aria-labelledby="profileDropdown"
        >
          <li>
            <a className="dropdown-item" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                console.log(JSON.parse(localStorage.getItem("loggedIn")));
                localStorage.setItem("loggedIn", false);

                window.location.reload();
              }}
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
