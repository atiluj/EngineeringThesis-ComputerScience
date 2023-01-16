import styles from "./Code.module.css";
import "../style.css";

export default function Code({ children }) {
  return (
    <div className={styles.hljs}>
      <p>{children}</p>
    </div>
  );
}
