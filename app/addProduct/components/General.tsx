import { linktrIcon } from "@/app/Base/SVG";
import React from "react";

export default function General() {
  return (
    <div className="addProduct__form">
      <div className="addProduct__form-inner">
        <div className="input__outer">
          <label htmlFor="">Product Title</label>

          <div className="input">
            <input
              type="text"
              value="Cool looking Women wearing funky fashion dress"
            />
          </div>
        </div>
        <div className="input__outer">
          <div className="input">
            <textarea name="" id="" rows={4} value=""></textarea>
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Product Title</label>

          <div className="input input--amount">
            <input type="text" value="150" />
            <span>$</span>
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
      </div>
      <div className="addProduct__form-footer">
        <button type="button" className="button delete">
          Delete
        </button>
        <button type="button" className="button save">
          Save Now
        </button>
        <button type="button" className="button publish">
          Publish
        </button>
      </div>
    </div>
  );
}
