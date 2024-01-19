import React from "react";
import General from "./components/General";
import Info from "./components/Info";
import Products from "./components/Products";
import { chevronLeft } from "../Base/SVG";
import Link from "next/link";

export default function User() {
  return (
    <>
      <div className="upHeader">
        <div className="auto__container">
          <div className="upHeader__inner">
            <Link href="/" className="back">
              {chevronLeft}
            </Link>
            <Link href="/" className="upHeader__inner-logo">
              <img src="/images/logoWhite.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="user">
        <div className="auto__container">
          <div className="user__inner">
            <General />
            <Info />
            <Products />
          </div>
        </div>
      </div>
    </>
  );
}
