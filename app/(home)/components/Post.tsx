import React from "react";
import PostItem from "./PostItem";
import { postList } from "@/app/Base/Modul";

export default function Post() {
  return (
    <div className="post__row">
      {postList.map((item, index) => {
        return <PostItem {...item} key={index} />;
      })}
    </div>
  );
}
