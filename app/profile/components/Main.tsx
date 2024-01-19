import React from "react";
import Details from "./Details";
import Password from "./Password";
import Delete from "./Delete";

export default function Main() {
  return (
    <div className="profileMain">
      <Details />
      <Password />
      <Delete />
    </div>
  );
}
