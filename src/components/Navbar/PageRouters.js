import React from "react";

export default function PageRouters(props) {
  return (
    <>
      {props.routes.map((route) => (
        <a href={route.to}>{route.name}</a>
      ))}
    </>
  );
}
