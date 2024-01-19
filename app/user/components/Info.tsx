import React from "react";
const infoList = [
  {
    id: "1",
    number: "304K",
    title: "followers",
  },
  {
    id: "2",
    number: "814k",
    title: "Views",
  },
  {
    id: "3",
    number: "1,792 k",
    title: "Likes Products",
  },
  {
    id: "4",
    number: "1,792 k",
    title: "Likes Persons",
  },
  {
    id: "5",
    number: "70%",
    title: "Beauty Rate",
  },
];
export default function Info() {
  return (
    <div className="info">
      <div className="info__inner">
        {infoList.map((item, index) => {
          return <InfoItem {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
const InfoItem = (props: { number: string; title: string }) => {
  return (
    <div className="infoItem">
      <h2 className="sm">{props.number}</h2>
      <h3>{props.title}</h3>
    </div>
  );
};
