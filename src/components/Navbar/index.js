import React from "react";

import "./index.css";

const routes = [
  {
    id: "home",
    name: "Home",
    to: "/",
  },
  {
    id: "aboutus",
    name: "About Us",
    to: "/aboutus",
  },
  {
    id: "service",
    name: "Service",
    to: "/services",
  },
  {
    id: "pricing",
    name: "Pricing",
    to: "/pricing",
  },
  {
    id: "contactus",
    name: "Contact Us",
    to: "/contactus",
  },
];

export default function Navbar() {
  return (
    <div className="Box">
      {routes.map((route) => (
        <a>{route.name}</a>
      ))}
    </div>
  );
}
