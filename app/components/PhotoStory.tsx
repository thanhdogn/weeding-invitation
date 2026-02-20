import Image from "next/image";
import styles from "./PhotoStory.module.css";
import ScrollAnimation from "./ScrollAnimation";

const storyEvents = [
  {
    title: "Lần Đầu Gặp Gỡ",
    description:
      "Chúng mình tình cờ gặp nhau tại một quán cà phê nhỏ vào một chiều mưa. Ánh mắt chạm nhau, và câu chuyện bắt đầu từ đó.",
    image: "/143A9482.jpg", // Changed from 143A9215 to show faces better
  },
  {
    title: "Buổi Hẹn Đầu Tiên",
    description:
      "Bữa tối lãng mạn dưới ánh nến. Chúng mình đã nói chuyện suốt hàng giờ đồng hồ về những ước mơ và dự định.",
    image: "/143A9305.jpg",
  },
  {
    title: "Lời Cầu Hôn",
    description:
      'Giữa khung cảnh hoàng hôn tuyệt đẹp, anh đã quỳ xuống và hỏi cưới. Em đã nói "Đồng ý" trong hạnh phúc vỡ òa.',
    image: "/143A9450.jpg",
  },
  {
    title: "Ngày Chung Đôi",
    description:
      "Và giờ đây, chúng mình hân hoan chờ đón ngày trọng đại nhất cuộc đời, ngày mà hai ta chính thức về chung một nhà.",
    image: "/143A9682.jpg",
  },
];

export default function PhotoStory() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Chuyện Tình Yêu</h2>
      <div className={styles.list}>
        {storyEvents.map((event, index) => (
          <div
            key={index}
            className={`${styles.item} ${index % 2 === 1 ? styles.reverse : ""}`}
          >
            <ScrollAnimation animation="fade-in">
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={styles.image}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up">
              <div className={styles.content}>
                {/* Year removed as requested */}
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.description}>{event.description}</p>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </section>
  );
}
