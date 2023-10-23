import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src="/src/assets/brand.svg" alt="brand" />
        </div>
        <nav className={styles["nav-menu"]}>
          <div className={styles["nav-items"]}>Home</div>
          <div className={styles["nav-items"]}>Attorneys</div>
          <div className={styles["nav-items"]}>Practice Areas</div>
          <div className={styles["nav-items"]}>About Us</div>
        </nav>
        <button className={styles["contact-btn"]}>Contact Now</button>
      </div>
      <div className={styles["hero-section"]}>
        <div className={styles["text-info"]}>
          <div>
            <span className={styles.title}>You don’t have to </span>
            <br />
            <span className={styles.title}>Fight them Alone.</span>
          </div>
          <span className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </span>
          <form
            className={styles["subscription-form"]}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <img
              src="/src/assets/mail-icon.svg"
              className={styles["mail-icon"]}
              alt="mail"
            />
            <input
              className={styles["email-input-box"]}
              type="email"
              required
              placeholder="Enter your email address"
            />
            <button type="submit" className={styles["submit-btn"]}>
              Let’s Talk
            </button>
          </form>
        </div>
        <div className={styles.img}>
          <img alt="image" src="/src/assets/image.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
