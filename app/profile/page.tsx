"use client";
import React, { useState } from "react";
import Side from "./components/Side";
import Main from "./components/Main";

export default function Profile() {
  const [form, setForm] = useState<any>({
    avatar: "/images/user.jpg",
    username: "Amelia_D",
    email: "ameliad45@gmail.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    productLink: "linktr.ee/greatlearning",
    password: "",
  });
  const updateForm = (data: any) => {
    setForm((form: any) => ({ ...form, ...data }));
  };
  console.log("form", form);
  return (
    <div className="profile">
      <div className="auto__container">
        <div className="profile__inner">
          <Side form={form} updateForm={updateForm} />
          <Main form={form} updateForm={updateForm} />
        </div>
      </div>
    </div>
  );
}
