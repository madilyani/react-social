"use client";
import React, { useEffect, useRef, useState } from "react";
import { instagramIcon, logOutIcon, userIcon } from "./SVG";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import Modal from "./Modal";
import SignUp from "./SignUp";

export default function Header() {
  const [modal, setModal] = useState<string | null>(null);
  const [logged, setLogged] = useState<boolean>(true);
  const [active, setActive] = useState(false);
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

  return (
    <>
      <header className="header" ref={wrapper}>
        <div className="auto__container">
          <div className="header__inner">
            <div className="header__inner-row">
              <Link href="/" className="header__inner-logo">
                <img src="/images/logo.svg" alt="" />
              </Link>
              <Link
                href="/"
                className={
                  "header__inner-link " + (pathname === "/" ? "active" : "")
                }
              >
                Home
              </Link>
              <Link
                href="/join"
                className={
                  "header__inner-link " + (pathname === "/join" ? "active" : "")
                }
              >
                Join
              </Link>
            </div>
            <div className="header__inner-row">
              <Link href="/addProduct" className="button light">
                Add Product & Person
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
                        <Link href="/profile">{userIcon} profile </Link>
                        <hr />

                        <Link href="">{instagramIcon} Follow the Founder </Link>
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
