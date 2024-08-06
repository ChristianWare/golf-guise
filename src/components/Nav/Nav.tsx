"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      text: "Packages",
      href: "/packages",
    },
    {
      text: "Courses",
      href: "/courses",
    },
    {
      text: "About Us",
      href: "/about",
    },
    {
      text: "Gallery",
      href: "/gallery",
    },

    {
      text: "Contact",
      href: "contact",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href='/' className={styles.logo}>
            {/* <span>
              <Golf width={23} height={23} className={styles.icon} />
            </span> */}
            AZ Golf Whisperer
          </Link>
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
    </>
  );
}

export default Nav;
