import { FC } from "react";
import Link from "next/link";
import { ButtonProps } from "@/lib/interface";
import Arrow from "../../../public/icons/arrow.svg";

import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({ href = "", text, btnType, target = "" }) => {
  return (
    <button className={styles.container}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {text}
        <span>
          <Arrow width={20} height={20} className={styles.icon} />
        </span>
      </Link>
    </button>
  );
};
export default Button;
