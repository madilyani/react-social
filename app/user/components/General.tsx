import { linktrIcon, tickIcon } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";

export default function General() {
  return (
    <div className="general">
      <div className="general__inner">
        <div className="general__inner-image">
          <img src="/images/profile.jpg" alt="" />
        </div>
        <div className="general__inner-content">
          <div className="general__inner-text">
            <h2>Greatlerningofficial {tickIcon}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
            <Link href="">{linktrIcon} linktr.ee/greatlearning</Link>
          </div>
          <button type="button" className="button light">
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
}
