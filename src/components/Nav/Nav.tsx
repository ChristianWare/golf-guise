"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "../Search/Search";
import Instagram from "../../../public/icons/instagram.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Twitter from "../../../public/icons/twitter.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

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
      href: "#",
    },
    {
      text: "Guides",
      href: "#",
    },
    {
      text: "Reviews",
      href: "#",
    },
    {
      text: "Golf Courses",
      href: "#",
    },
    {
      text: "Tours",
      href: "#",
    },
    {
      text: "About",
      href: "#",
    },
    {
      text: "All Articles",
      href: "#",
    },
  ];

  return (
    <>
      <div className={styles.greenTop}></div>
      <LayoutWrapper>
        <header className={styles.header}>
          <div className={styles.navTop}>
            <div className={styles.logo}>
              <Link href='/' className={styles.logo}>
                Golf Guise
              </Link>
            </div>
            <div className={styles.searchBar}>
              <Search />
              <div className={styles.socialsContainer}>
                <Instagram className={styles.icon} width={18} height={18} />
                <Facebook className={styles.icon} width={18} height={18} />
                <Twitter className={styles.icon} width={18} height={18} />
                <LinkedIn className={styles.icon} width={18} height={18} />
              </div>
            </div>
          </div>
          <nav className={styles.navbar}>
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
                  <Link href='/search' className={styles.navItem}>Search</Link>
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
      </LayoutWrapper>
    </>
  );
}
export default Nav;
