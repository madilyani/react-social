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
  return (
    <div className="post">
      <div className="auto__container">
        <div className="post__inner">
          <Post />
        </div>
      </div>
    </div>
  );
}
