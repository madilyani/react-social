import React from "react";
import Details from "./Details";
import Password from "./Password";
import Delete from "./Delete";

export default function Main({
  form,
  updateForm,
}: {
  form: any;
  updateForm: any;
}) {
  return (
    <div className="profileMain">
      <Details form={form} updateForm={updateForm} />
      <Password form={form} updateForm={updateForm} />
      <Delete />
    </div>
  );
}
