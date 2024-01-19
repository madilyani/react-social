import { linktrIcon } from "@/app/Base/SVG";
import React from "react";

export default function Details() {
  return (
    <>
      <h3>Profile Details</h3>
      <div className="profileMain__inner">
        <div className="input__outer">
          <label htmlFor="">User Name</label>
          <div className="input">
            <input type="text" value="Amelia_D" />
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Email</label>
          <div className="input ">
            <input type="email" value="ameliad45@gmail.com" />
          </div>
        </div>
        <div className="input__outer">
          <div className="input">
            <textarea
              name=""
              id=""
              rows={4}
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation . "
            ></textarea>
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Product Link</label>
          <div className="input input--link">
            <input
              type="text"
              value="https://www.pexels.com/photo/two-young-men-standing-back-to-back-in-front-of-an-apartment-building-in-city-18035289/"
            />
            <span>{linktrIcon}</span>
          </div>
        </div>
        <button type="button" className="button publish">
          Save Changes
        </button>
      </div>
    </>
  );
}
