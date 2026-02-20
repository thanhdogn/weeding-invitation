"use client";

import { useState, useEffect } from "react";
import styles from "./EnterSite.module.css";

export default function EnterSite() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem("hasEntered");
    if (hasEntered === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("hasEntered", "true");
    setIsVisible(false);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Dispatch custom event
    window.dispatchEvent(new Event("startMethod"));
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Đỗ Thành
          <br />
          &
          <br />
          Nguyễn Huyền
        </h1>
        <p className={styles.subtitle}>Trân trọng kính mời</p>
        <button onClick={handleEnter} className={styles.button}>
          Mở Thiệp
        </button>
      </div>
    </div>
  );
}
