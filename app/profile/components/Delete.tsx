import { noteIcon } from "@/app/Base/SVG";
import React from "react";

export default function Delete() {
  return (
    <>
      <h3>Delete Account</h3>
      <div className="profileMain__inner">
        <div className="note">
          {noteIcon}
          <h6>
            Deleting your account will delete all of the content you have
            created. It will be completely irrecoverable.
          </h6>
        </div>
        <div className="check">
          <input type="checkbox" />
          <label htmlFor="">I understand the consequences.</label>
        </div>
        <button type="button" className="button publish">
          Delete Account
        </button>
      </div>
    </>
  );
}
