"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Post from "./components/Post";

export default function Home() {
  // const [form, setForm] = useState<any>({
  //   folders: EventsList,
  // });
  // const updateForm = (data: any) => {
  //   setForm((form: any) => ({ ...form, ...data }));
  // };a
  // const [currentUrl, setCurrentUrl] = useState<string>("");
  // useEffect(() => {
  //   setCurrentUrl(window.location.href);
  // }, []);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 1;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      document.getElementById("header")?.classList.remove("active");
    }
    if (isRightSwipe) {
      document.getElementById("header")?.classList.add("active");
    }
  };
  return (
    <div className="post">
      <div className="auto__container">
        <div
          className="post__inner"
          id="scrollable"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Post />
        </div>
      </div>
    </div>
  );
}
