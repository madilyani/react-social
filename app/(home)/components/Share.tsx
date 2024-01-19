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
  wrapper,
}: {
  id: any;
  name: string;
  imageUrl: any;
  wrapper: any;
}) {
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
              url={`https://react-social-kappa.vercel.app/product/${id}`}
            >
              <span>{facebookIcon} </span> facebook
            </FacebookShareButton>
            <PinterestShareButton
              url={`https://react-social-kappa.vercel.app/product/${id}`}
              media={`https://react-social-kappa.vercel.app${imageUrl}`}
            >
              <span>{pinterestIcon} </span> Pinterest
            </PinterestShareButton>
            <TwitterShareButton
              title={name}
              url={`https://react-social-kappa.vercel.app/product/${id}`}
            >
              <span>{twitterIcon}</span>
              twitter
            </TwitterShareButton>
            <EmailShareButton
              url={`https://react-social-kappa.vercel.app/product/${id}`}
              subject={name}
            >
              <span>{mailIcon}</span>
              email
            </EmailShareButton>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://react-social-kappa.vercel.app/product/${id}`
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
