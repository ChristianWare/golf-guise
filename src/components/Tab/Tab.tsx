import styles from "./Tab.module.css";

interface Props {
  color?: string;
  text: string;
}

const Tab = ({ color = "", text }: Props) => {
  return <span className={` ${styles.span} ${styles[color]}`}>{text}</span>;
};
export default Tab;
