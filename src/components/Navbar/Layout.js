import React from "react";

export default function Layout(props) {
  return (
    <>
      <nav>
        {props.routes.map((route) => (
          <a href={route.to}>{route.name}</a>
        ))}
      </nav>
    </>
  );
}
