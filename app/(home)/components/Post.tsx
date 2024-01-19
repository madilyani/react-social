import React, { useState } from "react";
import PostItem from "./PostItem";
import { postList } from "@/app/Base/Modul";

export default function Post() {
  const [isActive, setIsActive] = useState<any>(false);
  return (
    <div className="post__row">
      {postList.map((item, index) => {
        return (
          <PostItem
            {...item}
            key={index}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </div>
  );
}
