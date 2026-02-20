"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    // Target Date: March 8, 2026
    const difference = +new Date("2026-03-08T00:00:00") - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Cùng Đếm Ngược</h2>
      <div className={styles.timerGrid}>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>Ngày</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>Giờ</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>Phút</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>Giây</span>
        </div>
      </div>
    </section>
  );
}
