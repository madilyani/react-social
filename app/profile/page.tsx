import React from "react";
import Side from "./components/Side";
import Main from "./components/Main";

export default function Profile() {
  
  return (
    <div className="profile">
      <div className="auto__container">
        <div className="profile__inner">
          <Side />
          <Main />
        </div>
      </div>
    </div>
  );
}
