"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Reviews",
      href: "/reviews",
    },
    {
      text: "Guides",
      href: "/guides",
    },
    {
      text: "Gear",
      href: "/gear",
    },
    {
      text: "Glossary",
      href: "/glossary",
    },
    {
      text: "All Articles",
      href: "/all",
    },
  ];

  return (
    <LayoutWrapper>
      <ContentPadding>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>GG</div>
            <ul
              className={
                isOpen === false
                  ? styles.navMenu
                  : `${styles.navMenu} ${styles.active}`
              }
            >
              {navItems.map((navItem, index) => (
                <li
                  key={index}
                  className={styles.navItem}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={navItem.href} className={styles.navItem}>
                    {navItem.text}
                  </Link>
                </li>
              ))}
              {isOpen && (
                <li className={styles.navItem} onClick={() => setIsOpen(false)}>
                  <Link href='/search' className={styles.navItem}>
                    Search
                  </Link>
                </li>
              )}
            </ul>
            {isOpen && (
              <div
                className={`${styles.overlay} ${
                  isOverlayVisible ? styles.visible : ""
                }`}
                onClick={() => {
                  setIsOpen(false);
                  setIsOverlayVisible(false);
                }}
              ></div>
            )}
            <span
              className={
                isOpen === false
                  ? styles.hamburger
                  : `${styles.hamburger} ${styles.active}`
              }
              onClick={openMenu}
            >
              <span className={styles.whiteBar}></span>
              <span className={styles.whiteBar}></span>
              <span className={styles.whiteBar}></span>
            </span>
          </nav>
        </header>
        <div className={styles.greenTop}></div>
      </ContentPadding>
    </LayoutWrapper>
  );
}
export default Nav;
