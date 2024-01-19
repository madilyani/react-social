"use client";
import { eye, eyeCross } from "@/app/Base/SVG";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function SignUp({
  modal,
  setModal,
  setLogged,
}: {
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
  setLogged: Dispatch<SetStateAction<boolean>>;
}) {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    reset_password: "",
  });

  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };
  return (
    <div className="modal__form">
      <h2>Sign Up</h2>
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
      <div className="input__outer">
        <label htmlFor="">Reset password</label>
        <div className="input input--password">
          <input
            type={isShown2 ? "text" : "password"}
            placeholder="Your Password"
            onChange={(e) => updateForm({ reset_password: e.target.value })}
            value={form.reset_password}
          />
          <span onClick={() => setIsShown2(!isShown2)}>
            {isShown2 ? eyeCross : eye}
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
          disabled={
            form.email === "" ||
            form.password === "" ||
            form.password !== form.reset_password
          }
          className="button light"
        >
          Sign Up
        </button>
      </div>

      <p className="med">
        Don't have an account?{" "}
        <button onClick={() => setModal("login")} type="button">
          Log in
        </button>
      </p>
    </div>
  );
}
