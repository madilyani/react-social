"use client";
import { eye, eyeCross } from "@/app/Base/SVG";
import React, { useState } from "react";

export default function Password({
  form,
  updateForm,
}: {
  form: any;
  updateForm: any;
}) {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [pos, setPos] = useState<any>({ password: "", retype_password: "" });
  const updatePos = (data: any) => {
    setPos((pos: any) => ({ ...pos, ...data }));
  };
  return (
    <>
      <h3>Password</h3>
      <div className="profileMain__inner">
        <div className="input__outer">
          <label htmlFor="">Password</label>
          <div className="input input--password">
            <input
              type={isShown ? "text" : "password"}
              value={pos.password}
              onChange={(e) => updatePos({ password: e.target.value })}
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
              value={pos.retype_password}
              onChange={(e) => updatePos({ retype_password: e.target.value })}
            />
            <span onClick={() => setIsShown2(!isShown2)}>
              {isShown2 ? eyeCross : eye}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="button publish"
          disabled={
            pos.password === "" ||
            pos.retype_password === "" ||
            pos.password !== pos.retype_password
          }
          onClick={() => {
            updateForm({ password: pos.password });
            updatePos({ password: "", retype_password: "" });
          }}
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
