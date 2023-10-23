import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.reload();
        }}
      >
        <img src="/assets/brand.svg" alt="brand" />
      </div>
      <div className={styles["header-menu"]}>
        <div className={styles.items}>Home</div>
        <div className={styles.items}>Attorneys</div>
        <div className={styles.items}>Practice Areas</div>
        <div className={styles.items}>About Us</div>
      </div>
      <div className={styles["socials"]}>
        <div className={styles["social-link"]}>
          <img src="/assets/Socials/instagram.svg" alt="Instagram" />
        </div>
        <div className={styles["social-link"]}>
          <img src="/assets/Socials/facebook.svg" alt="Facebook" />
        </div>
        <div className={styles["social-link"]}>
          <img src="/assets/Socials/twitter.svg" alt="Twitter" />
        </div>
        <div className={styles["social-link"]}>
          <img src="/assets/Socials/pinterest.svg" alt="Pinterest" />
        </div>
      </div>
      <div className={styles["footer-text-box"]}>
        <div className={styles["footer-text"]}>
          © 2020 Acme. All right reserved.
        </div>
        <div className={styles["footer-text"]}>Privacy Policy</div>
        <div className={styles["footer-text"]}>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
