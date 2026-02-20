"use client";

import { useState } from "react";
import Image from "next/image";
import { QrCode, X } from "lucide-react";
import styles from "./WebQR.module.css";

export default function WebQR() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.triggerButton}
        onClick={() => setIsOpen(true)}
        aria-label="Show QR Code"
      >
        <QrCode size={24} />
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <h3 className={styles.title}>
              Quét mã để truy cập trên điện thoại
            </h3>
            <div className={styles.imageWrapper}>
              <Image
                src="/web-QR.png"
                alt="Website QR Code"
                width={300}
                height={300}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.hint}>Mở camera để quét mã</p>
          </div>
        </div>
      )}
    </>
  );
}
