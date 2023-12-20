"use client";

import styles from "./Time.module.css";

const date = new Date();

const Time = () => {
  return (
    <div className={styles.container}>
      {date.toLocaleTimeString("en-US", {
        timeZone: "America/Phoenix",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
      : Phoenix, AZ
    </div>
  );
};
export default Time;
