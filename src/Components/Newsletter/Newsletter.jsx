import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <p className={styles.brand}>Subscribe Our Newsletter</p>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          required
          className={styles["name-input-field"]}
          placeholder="Name:"
        />
        <input
          type="email"
          required
          className={styles["email-input-field"]}
          placeholder="Enter your Email"
        />
        <button type="submit" className={styles["send-btn"]}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
