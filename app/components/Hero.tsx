import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        {/* Desktop Image */}
        <div className={styles.desktopImage}>
          <Image
            src="/143A9265 20X30.jpg"
            alt="Wedding Background Desktop"
            fill
            priority
            className={styles.backgroundImage}
            quality={100}
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Mobile Image */}
        <div className={styles.mobileImage}>
          <Image
            src="/143A9265 20X30.jpg"
            alt="Wedding Background Mobile"
            fill
            priority
            className={styles.backgroundImage}
            quality={100}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.subheading}>Trân trọng báo tin lễ thành hôn của</p>
        <h1 className={styles.title}>
          <span>Đỗ Thành</span>
          <span className={styles.ampersand}>&</span>
          <span>Nguyễn Huyền</span>
        </h1>
        <div className={styles.date}>
          <p className={styles.solarDate}>Ngày 08 Tháng 03 Năm 2026</p>
          <p className={styles.lunarDate}>
            (Tức ngày 20 Tháng 01 Năm Bính Ngọ)
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>↓</span>
      </div>
    </section>
  );
}
