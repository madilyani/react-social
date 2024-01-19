import {
  eye,
  globeIcon,
  plusIcon,
  shareIcon,
  starIcon,
  userIcon,
} from "@/app/Base/SVG";
import Link from "next/link";
import React, { useRef } from "react";
import Share from "./Share";

export default function PostItem(props: {
  id: string;
  image: string;
  avatar: string;
  user: string;
  prof: string;
  views: number;
  price: number;
  link: string;
  title: string;
  desc: string;
  isActive: any;
  setIsActive: any;
}) {
  const wrapper = useRef<any>(null);
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!wrapper.current.contains(e.target)) {
      if (props.isActive === props.id) props.setIsActive(null);
      else {
        props.setIsActive(props.id);
      }
    }
  };
  return (
    <div
      className={"postItem " + (props.isActive === props.id ? "mobActive" : "")}
      onClick={onClick}
    >
      <div className="postItem__image">
        <img src={props.image} alt="" />
      </div>
      <div className="postItem__inner">
        <div className="postItem__btns">
          <button type="button" className="postItem__btn">
            <span>{starIcon}</span>
            Like Product
          </button>
          <Share
            wrapper={wrapper}
            imageUrl={props.image}
            id={props.id}
            name={props.title}
          />
          {/* <button type="button" className="postItem__btn">
            <span>{shareIcon}</span>
            Share
          </button> */}
          <button type="button" className="postItem__btn">
            <span>{userIcon}</span>
            Like Person
          </button>
          <button type="button" className="postItem__btn">
            <span>{plusIcon}</span>
            Follow
          </button>
        </div>
        <div className="postItem__info">
          <div className="postItem__info-head">
            <div className="postItem__info-content">
              <div className="postItem__info-avatar">
                <img src={props.avatar} alt="avatar" />
              </div>
              <div className="postItem__info-gen">
                <h6 className="sm">
                  <Link href="/user">{props.user}</Link> {props.prof}
                </h6>
                <p className="sm">
                  {eye} {props.views} Views
                </p>
              </div>
            </div>
            <div className="postItem__info-tags">
              <span>{props.price}$</span>
              <Link href={props.link}>{globeIcon} Visit</Link>
            </div>
          </div>
          <div className="postItem__info-body">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
