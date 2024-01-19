import React from "react";
import General from "./components/General";
import Info from "./components/Info";
import Products from "./components/Products";

export default function User() {
  return (
    <div className="user">
      <div className="auto__container">
        <div className="user__inner">
          <General />
          <Info />
          <Products />
        </div>
      </div>
    </div>
  );
}
 