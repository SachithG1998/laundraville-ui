import React from "react";

import UserInfoCard from "./UserInfoCard";

function Sidebar(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="sidebar" className="col-md-2 d-none d-md-block glassy dark">
          <div id="left-sidebar">
            <UserInfoCard customer={props.customer} totalDue={props.totalDue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
