"use client";
import React, { useEffect, useRef, useState } from "react";
import PostItem from "@/app/(home)/components/PostItem";
import { postList } from "@/app/Base/Modul";
export default function Page({ params }: { params: { id: string } }) {
  const [isActive, setIsActive] = useState<any>(false);
  const [itemData, setItemData] = useState<any>(null);
  useEffect(() => {
    if (params.id) {
      setItemData(postList.filter((item: any) => item.id === params.id)[0]);
    }
  }, [params.id]);

  return (
    <div className="centered">
      <PostItem {...itemData} isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
