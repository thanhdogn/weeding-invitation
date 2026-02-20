import Image from "next/image";
import styles from "./GiftSection.module.css";

export default function GiftSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Hộp Mừng Cưới</h2>
      <p className={styles.intro}>
        Sự hiện diện của bạn là món quà ý nghĩa nhất đối với chúng mình. Tuy
        nhiên, nếu bạn muốn gửi lời chúc phúc bằng quà, chúng mình xin phép nhận
        qua hình thức này.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.bankName}>ACB</h3>
          <p className={styles.accountName}>Đỗ Văn Thành</p>
          <p className={styles.accountNumber}>20792487</p>
          <div className={styles.qrWrapper}>
            <Image
              src="/ThanhQR.jpg"
              alt="QR Code Đỗ Văn Thành" // Use specific name
              width={200}
              height={200}
              className={styles.qrImage}
            />
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.bankName}>Techcombank</h3>
          <p className={styles.accountName}>Nguyễn Thị Huyền</p>
          <p className={styles.accountNumber}>1907 3808 6460 11</p>
          <div className={styles.qrWrapper}>
            <Image
              src="/HuyenQR.jpg"
              alt="QR Code Nguyễn Thị Huyền" // Use specific name
              width={200}
              height={200}
              className={styles.qrImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
