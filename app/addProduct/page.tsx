"use client";
import React from "react";
import Upload from "./components/Upload";
import { chevronLeft, tickIcon } from "../Base/SVG";
import More from "./components/More";
import General from "./components/General";
import Link from "next/link";
const reqList = [
  {
    id: "1",
    text: "Only images that include people/person/part of a person",
  },
  {
    id: "2",
    text: "only one product are allowed",
  },
  {
    id: "3",
    text: "Only High Quality Image",
  },
  {
    id: "4",
    text: "Respect the Property of Other People",
  },
  {
    id: "5",
    text: "only more than 300 DP",
  },
];
export default function page() {
  return (
    <>
      <div className="upHeader">
        <div className="auto__container">
          <div className="upHeader__inner">
            <Link href="/" className="back">
              {chevronLeft}
            </Link>
            <div className="upHeader__inner-logo">
              <img src="/images/logoWhite.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="addProduct">
        <div className="auto__container">
          <div className="addProduct__inner">
            <div className="upload__row">
              <Upload />
              <div className="upload__list">
                {reqList.map((item: any, index: number) => {
                  return (
                    <div className="upload__list-item" key={index}>
                      {tickIcon} {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
            <More />
            <General />
          </div>
        </div>
      </div>
    </>
  );
}
