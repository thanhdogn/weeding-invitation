"use client";

import { useState } from "react";
import styles from "./RSVPForm.module.css";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    side: "groom",
    attendance: "yes",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({ name: "", side: "groom", attendance: "yes" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.rsvpSection} id="rsvp">
      <h2 className={styles.heading}>Xác Nhận Tham Dự</h2>
      <p className={styles.subheading}>
        Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi.
        <br />
        Vui lòng phản hồi trước ngày 03/03/2026 để chúng tôi đón tiếp được chu
        đáo nhất.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Tên Khách Mời</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={styles.input}
            placeholder="Nhập tên của bạn..."
          />
        </div>

        <div className={styles.formGroup}>
          <label>Bạn là khách mời của ai?</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="side"
                value="groom"
                checked={formData.side === "groom"}
                onChange={(e) =>
                  setFormData({ ...formData, side: e.target.value })
                }
              />
              Nhà Trai (Đỗ Thành)
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="side"
                value="bride"
                checked={formData.side === "bride"}
                onChange={(e) =>
                  setFormData({ ...formData, side: e.target.value })
                }
              />
              Nhà Gái (Nguyễn Huyền)
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Bạn sẽ tham dự chứ?</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={formData.attendance === "yes"}
                onChange={(e) =>
                  setFormData({ ...formData, attendance: e.target.value })
                }
              />
              Sẽ tham gia!
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={formData.attendance === "no"}
                onChange={(e) =>
                  setFormData({ ...formData, attendance: e.target.value })
                }
              />
              Tiếc quá, mình bận rồi
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className={styles.submitButton}
        >
          {status === "submitting" ? "Đang gửi..." : "Gửi Xác Nhận"}
        </button>

        {status === "success" && (
          <p className={styles.successMessage}>
            Cảm ơn bạn! Chúng mình đã nhận được xác nhận.
          </p>
        )}
        {status === "error" && (
          <p className={styles.errorMessage}>
            Có lỗi xảy ra. Vui lòng thử lại.
          </p>
        )}
      </form>
    </section>
  );
}
