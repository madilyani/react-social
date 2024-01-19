"use client";
import { eye, eyeCross } from "@/app/Base/SVG";
import React, { useState } from "react";

export default function Password() {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  return (
    <>
      <h3>Password</h3>
      <div className="profileMain__inner">
        <div className="input__outer">
          <label htmlFor="">Password</label>
          <div className="input input--password">
            <input
              type={isShown ? "text" : "password"}
              value="E01234568@988"
            />
            <span onClick={() => setIsShown(!isShown)}>
              {isShown ? eyeCross : eye}
            </span>
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Retype password</label>
          <div className="input input--password">
            <input
              type={isShown2 ? "text" : "password"}
              value="E01234568@988"
            />
            <span onClick={() => setIsShown2(!isShown2)}>
              {isShown2 ? eyeCross : eye}
            </span>
          </div>
        </div>

        <button type="button" className="button publish">
          Save Changes
        </button>
      </div>
    </>
  );
}
