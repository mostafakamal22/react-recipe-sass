import logo from "@/assets/images/logo.webp";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-header"]}>
          <a href="#" className={styles["footer-logo"]}>
            <img
              src={logo}
              alt="Recipe Logo"
              className={styles["footer-logo-image"]}
            />
            <span className={styles["footer-logo-text"]}>Recipe</span>
          </a>
          <span className={styles["footer-brand"]}>Route</span>
        </div>
        <hr className={styles["footer-divider"]} />
        <span className={styles["footer-rights"]}>
          © 2025{" "}
          <a href="#0" className={styles["footer-rights-link"]}>
            Mostafa Kamal™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
