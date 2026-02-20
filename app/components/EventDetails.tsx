import styles from "./EventDetails.module.css";

export default function EventDetails() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Chương Trình Lễ Cưới</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.subheading}>Nhà Trai</h3>
          <p className={styles.locationName}>Tư gia</p>
          <p className={styles.address}>Nhà ông bà Hưng - Mai</p>
          <p className={styles.description}>Cửa hàng giày dép Hưng Mai</p>
          <p className={styles.time}>13:00 - 08/03/2026</p>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.7845164092582!2d106.4248217755083!3d20.267769613479853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136072bbbdefe2b%3A0xce305f0a75531f51!2sHung%20mai!5e0!3m2!1svi!2s!4v1771557382752!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={undefined}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.subheading}>Nhà Gái</h3>
          <p className={styles.locationName}>Tư gia</p>
          <p className={styles.address}>Nhà ông bà Thắm - Bé</p>
          <p className={styles.description}>Đối diện Bể bơi Hòa Thạch</p>
          <p className={styles.time}>09:00 - 08/03/2026</p>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.196882350028!2d105.56830377552227!3d20.944607190663206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345ab58663a493%3A0x5d505d0c367725c4!2zQuG7gyBCxqFpIEjDsmEgVGjhuqFjaA!5e0!3m2!1svi!2s!4v1771562102140!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={undefined}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
