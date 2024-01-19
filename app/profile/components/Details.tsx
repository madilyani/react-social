import { linktrIcon } from "@/app/Base/SVG";
import React, { useState } from "react";

export default function Details({
  form,
  updateForm,
}: {
  form: any;
  updateForm: any;
}) {
  const [pos, setPos] = useState<any>({
    username: form.username,
    email: form.email,
    description: form.description,
    productLink: form.productLink,
  });
  const updatePos = (data: any) => {
    setPos((pos: any) => ({ ...pos, ...data }));
  };
  return (
    <>
      <h3>Profile Details</h3>
      <div className="profileMain__inner">
        <div className="input__outer">
          <label htmlFor="">User Name</label>
          <div className="input">
            <input
              type="text"
              placeholder="User Name"
              value={pos.username}
              onChange={(e) => updatePos({ username: e.target.value })}
            />
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Email</label>
          <div className="input ">
            <input
              type="email"
              placeholder="Email"
              value={pos.email}
              onChange={(e) => updatePos({ email: e.target.value })}
            />
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Description</label>
          <div className="input">
            <textarea
              name=""
              id=""
              placeholder="Description"
              rows={4}
              value={pos.description}
              onChange={(e) => updatePos({ description: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Product Link</label>
          <div className="input input--link">
            <input
              type="text"
              placeholder="Product Link"
              value={pos.productLink}
              onChange={(e) => updatePos({ productLink: e.target.value })}
            />
            <span>{linktrIcon}</span>
          </div>
        </div>
        <button
          type="button"
          className="button publish"
          disabled={
            pos.username === "" ||
            pos.email === "" ||
            pos.description === "" ||
            pos.productLink === ""
          }
          onClick={() =>
            updateForm({
              username: pos.username,
              email: pos.email,
              description: pos.description,
              productLink: pos.productLink,
            })
          }
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
