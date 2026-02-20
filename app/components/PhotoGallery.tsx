"use client";

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PhotoGallery.module.css";
import ScrollAnimation from "./ScrollAnimation";

// Use the new 143... images
const allPhotos = [
  {
    src: "/143A9979.jpg", // Smaller one first
    alt: "Wedding Moment 1",
  },
  {
    src: "/143A9215.jpg",
    alt: "Wedding Moment 2",
  },
  {
    src: "/143A9749.jpg",
    alt: "Wedding Moment 3",
  },
  // Add more if needed later, but user asked for 2-3 initially
  {
    src: "/143A9450.jpg",
    alt: "Wedding Moment 4",
  },
  {
    src: "/143A9964.jpg",
    alt: "Wedding Moment 5",
  },
  {
    src: "/143A0014.jpg",
    alt: "Wedding Moment 6",
  },
];

export default function PhotoGallery() {
  // const visibleCount = 12; // Just hardcode the slice
  // const isAllVisible = visibleCount >= allPhotos.length; // No longer needed as we always link to gallery

  return (
    <section className={styles.gallery} id="gallery">
      <h2 className={styles.heading}>Album Ảnh Cưới</h2>
      <div className={styles.grid}>
        {allPhotos.slice(0, 12).map((photo, index) => (
          <ScrollAnimation key={index} animation="scale-up">
            <div className={styles.photoItem}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={800}
                className={styles.image}
                style={{ objectFit: "cover" }}
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/gallery" className={styles.showMoreButton}>
          Xem thêm ảnh đẹp 📸
        </Link>
      </div>
    </section>
  );
}
