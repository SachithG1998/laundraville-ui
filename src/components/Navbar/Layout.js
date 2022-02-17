import React from "react";

export default function Layout(props) {
  return (
    <>
      <nav>
        {props.routes.map((route) => (
          <a key={route.id} href={route.to}>
            {route.name}
          </a>
        ))}
      </nav>
    </>
  );
}
