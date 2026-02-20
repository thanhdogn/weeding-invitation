import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Divider from "../components/Divider";

const allPhotos = [
  "/143A0014.jpg",
  "/143A9215.jpg",
  "/143A9249.jpg",
  "/143A9265 20X30.jpg",
  "/143A9305.jpg",
  "/143A9365 60x90 LT2B.jpg",
  "/143A9450.jpg",
  "/143A9475 60X90 LT2B.jpg",
  "/143A9482.jpg",
  "/143A9574.jpg",
  "/143A9682.jpg",
  "/143A9718.jpg",
  "/143A9749.jpg",
  "/143A9767.jpg",
  "/143A9799.jpg",
  "/143A9823.jpg",
  "/143A9849.jpg",
  "/143A9864.jpg",
  "/143A9924 20X30.jpg",
  "/143A9934.jpg",
  "/143A9953.jpg",
  "/143A9964.jpg",
  "/143A9972.jpg",
  "/143A9979.jpg",
];

export default function GalleryPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link href="/#gallery" className={styles.backLink}>
          ← Quay lại thiệp mời
        </Link>
        <h1 className={styles.title}>Album Ảnh Cưới</h1>
        <p className={styles.subtitle}>
          Khoảnh khắc hạnh phúc nhất của chúng mình
        </p>
      </header>

      <div className={styles.grid}>
        {allPhotos.map((src, index) => (
          <div key={index} className={styles.photoItem}>
            <Image
              src={src}
              alt={`Wedding Photo ${index + 1}`}
              width={800} // Reasonable width
              height={1200} // Reasonable height aspect ratio
              className={styles.image}
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <Divider />
        <p className={styles.footerText}>Cảm ơn bạn đã ghé xem! ❤️</p>
      </div>
    </main>
  );
}
