import React from "react";
import Side from "./components/Side";
import Main from "./components/Main";
import { chevronLeft } from "../Base/SVG";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="upHeader">
        <div className="auto__container">
          <div className="upHeader__inner">
            <Link href="/" className="back">
              {chevronLeft}
            </Link>
            <div className="upHeader__inner-logo">
              <img src="/images/logoWhite.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="auto__container">
          <div className="profile__inner">
            <Side />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}
