import { editIcon, linktrIcon, tickIcon } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";

export default function Side() {
  return (
    <div className="profileSide">
      <div className="profileSide__avatar">
        <img src="/images/user.jpg" alt="" />
        <div className="profileSide__avatar-edit">{editIcon}</div>
      </div>
      <div className="profileSide__info">
        <div className="profileSide__name">
          <h2>Amelia_D</h2> <span>{tickIcon}</span>
        </div>
        <a href="#" className="profileSide__link">
          ameliad45@gmail.com
        </a>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a href="#" className="profileSide__linktr">
          {linktrIcon} linktr.ee/greatlearning
        </a>
      </div>
    </div>
  );
}
