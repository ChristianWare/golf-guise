"use client";

import { useEffect } from "react";
import styles from "./Modal.module.css";
import Close from "../../../public/icons/close.svg";

interface Props {
  isOpen: Boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.btn}>
          <Close className={styles.icon} onClick={onClose} />
        </button>
        {children}
      </div>
    </div>
  );
}
