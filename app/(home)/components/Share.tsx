"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  copyIcon,
  facebookIcon,
  mailIcon,
  pinterestIcon,
  shareIcon,
  twitterIcon,
} from "@/app/Base/SVG";
import Link from "next/link";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";

export default function Share({
  imageUrl,
  id,
  name,
}: {
  id: any;
  name: string;
  imageUrl: any;
}) {
  const wrapper = useRef<any>(null);
  const [active, setActive] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    const windowClick = (e: MouseEvent) => {
      if (!wrapper.current.contains(e.target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);
  return (
    <div className="share" ref={wrapper}>
      <div
        className={"postItem__btn " + (active ? "active" : "")}
        onClick={() => {
          setActive(!active);
        }}
      >
        <span>{shareIcon}</span>
        Share
      </div>
      <AnimatePresence>
        {active === true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="share__menu"
          >
            <FacebookShareButton
              title={name}
              url={`https://cary.arealglam.com/catalog/${id}`}
            >
              <span>{facebookIcon} </span> facebook
            </FacebookShareButton>
            <PinterestShareButton
              url={`https://cary.arealglam.com/catalog/${id}`}
              media={`https://cary.arealglam.com${imageUrl}`}
            >
              <span>{pinterestIcon} </span> Pinterest
            </PinterestShareButton>
            <TwitterShareButton
              title={name}
              url={`https://cary.arealglam.com/catalog/${id}`}
            >
              <span>{twitterIcon}</span>
              twitter
            </TwitterShareButton>
            <EmailShareButton
              url={`https://cary.arealglam.com/catalog/${id}`}
              subject={name}
            >
              <span>{mailIcon}</span>
              email
            </EmailShareButton>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://cary.arealglam.com/catalog/${id}`
                );
                setActive(false);
              }}
            >
              <span>{copyIcon}</span>
              copy link
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
