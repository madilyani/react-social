"use client";
import { eye, eyeCross } from "@/app/Base/SVG";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function Login({
  modal,
  setModal,
  setLogged,
}: {
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
  setLogged: Dispatch<SetStateAction<boolean>>;
}) {
  const [isShown, setIsShown] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };
  return (
    <div className="modal__form">
      <h2>Log In</h2>
      <div className="input__outer">
        <label htmlFor="">Your username or e-mail</label>
        <div className="input ">
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => updateForm({ email: e.target.value })}
            value={form.email}
          />
        </div>
      </div>
      <div className="input__outer">
        <label htmlFor="">Your password</label>
        <div className="input input--password">
          <input
            type={isShown ? "text" : "password"}
            placeholder="Your Password"
            onChange={(e) => updateForm({ password: e.target.value })}
            value={form.password}
          />
          <span onClick={() => setIsShown(!isShown)}>
            {isShown ? eyeCross : eye}
          </span>
        </div>
      </div>
      <div className="modal__form-btn">
        <button
          type="button"
          onClick={() => {
            setModal(null);
            setLogged(true);
          }}
          disabled={form.email === "" || form.password === ""}
          className="button light"
        >
          Log In
        </button>
      </div>
      <p>
        <button type="button">Forgot password?</button>
      </p>
      <p className="med">
        Don't have an account?{" "}
        <button onClick={() => setModal("signup")} type="button">
          Sign Up
        </button>
      </p>
    </div>
  );
}
