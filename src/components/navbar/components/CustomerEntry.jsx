import React from "react";

function CustomerEntry() {
  return (
    <div>
      <a type="button" href="/login" className="btn btn-outline-primary m-2">
        Log In
      </a>
      <a type="button" href="/signup" className="btn btn-primary m-2">
        Sign Up
      </a>
    </div>
  );
}

export default CustomerEntry;
