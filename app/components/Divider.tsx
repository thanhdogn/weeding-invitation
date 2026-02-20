import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.symbol}>囍</div>
      <div className={styles.line}></div>
    </div>
  );
}
