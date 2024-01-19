"use client";
import React, { TouchEvent, useEffect, useRef, useState } from "react";
import {
  homeIcon,
  instagramIcon,
  logOutIcon,
  plusIcon,
  userIcon,
  userSolid,
} from "./SVG";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import Modal from "./Modal";
import SignUp from "./SignUp";

export default function Header() {
  const [modal, setModal] = useState<string | null>(null);
  const [logged, setLogged] = useState<boolean>(true);
  const [xDown, setXDown] = useState<any>(null);
  const [yDown, setYDown] = useState<any>(null);
  const [active, setActive] = useState(false);
  const [headerMob, setHeaderMob] = useState(false);
  const wrapper = useRef<any>(null);
  useEffect(() => {
    const windowClick = (e: MouseEvent) => {
      if (!wrapper.current.contains(e.target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);
  const pathname = usePathname();
  useEffect(() => {
    setActive(false);
  }, [pathname]);
  // useEffect(() => {
  //   const scrollable = document.getElementById("scrollable");

  //   function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
  //     setXDown(e.targetTouches[0].clientX);
  //     setYDown(e.targetTouches[0].clientY);
  //   }
  //   function handleTouchMove(e: any) {
  //     if (!xDown || !yDown) {
  //       return;
  //     }

  //     var xUp = e.originalEvent.touches[0].clientX;
  //     var yUp = e.originalEvent.touches[0].clientY;

  //     var xDiff = xDown - xUp;
  //     var yDiff = yDown - yUp;

  //     if (Math.abs(xDiff) > Math.abs(yDiff)) {
  //       /*most significant*/
  //       if (xDiff > 0) {
  //         /* left swipe */
  //       } else {
  //         /* right swipe */
  //       }
  //     } else {
  //       if (yDiff > 0) {
  //         /* up swipe */
  //         console.log("up");
  //       } else {
  //         /* down swipe */
  //         console.log("down");
  //       }
  //     }
  //     /* reset values */
  //     setXDown(null);
  //     setYDown(null);
  //   }
  //   scrollable?.addEventListener("touchstart", handleTouchStart, false);
  //   document?.addEventListener("touchmove", handleTouchMove, false);
  //   // scrollable?.addEventListener("touchmove", function (e) {
  //   //   console.log(e.target); // the element that was swiped
  //   //   setHeaderMob(false);
  //   // });
  //   // scrollable?.addEventListener("swiped-down", function (e) {
  //   //   console.log(e.target); // the element that was swiped
  //   //   setHeaderMob(true);
  //   // });
  // }, []);

  return (
    <>
      <header
        className={"header " + (headerMob ? "active" : "")}
        ref={wrapper}
        id="header"
      >
        <div className="auto__container">
          <div className="header__inner">
            <div className="header__inner-row">
              <Link
                href="/"
                className="header__inner-logo"
                onClick={() => setActive(false)}
              >
                <img src="/images/logo.svg" alt="" />
              </Link>
              <Link
                href="/"
                className={
                  "header__inner-link " + (pathname === "/" ? "active" : "")
                }
                onClick={() => setActive(false)}
              >
                {homeIcon}
                Home
              </Link>
              <Link
                href="/join"
                className={
                  "header__inner-link pc " +
                  (pathname === "/join" ? "active" : "")
                }
                onClick={() => setActive(false)}
              >
                Join
              </Link>
              <Link
                href="/profile"
                className={
                  "header__inner-link mob " +
                  (pathname === "/profile" ? "active" : "")
                }
                onClick={() => setActive(false)}
              >
                {userSolid}
                Profile
              </Link>
            </div>
            <div className="header__inner-row">
              <Link
                href="/addProduct"
                className="button light"
                onClick={() => setActive(false)}
              >
                {plusIcon} <span> Add Product & Person</span>
              </Link>
              <div className="userPop">
                <div
                  className="userPop__btn"
                  onClick={() => {
                    setActive(!active);
                    if (!logged) {
                      setModal("login");
                    }
                  }}
                >
                  {userIcon}
                </div>
                {logged && (
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0 }}
                        className="userPop__menu"
                      >
                        <Link href="/profile" onClick={() => setActive(false)}>
                          {userIcon} profile{" "}
                        </Link>
                        <hr />

                        <Link href="" onClick={() => setActive(false)}>
                          {instagramIcon} Follow the Founder{" "}
                        </Link>
                        <hr />
                        <button
                          type="button"
                          onClick={() => setLogged(!logged)}
                        >
                          {logOutIcon} Log out{" "}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {modal === "login" && (
          <Modal modal={modal} setModal={setModal}>
            <Login setLogged={setLogged} modal={modal} setModal={setModal} />
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modal === "signup" && (
          <Modal modal={modal} setModal={setModal}>
            <SignUp setLogged={setLogged} modal={modal} setModal={setModal} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
