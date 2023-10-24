import Grid from "@mui/material/Grid";
import styles from "./AreaOfPractices.module.css";

const AreaOfPractices = () => {
  return (
    <div className={styles.container}>
      <p className={styles.brand}>Area of Practices</p>
      <Grid container spacing={3} className={styles.section}>
        <Grid item xs={8} className={styles.items}>
          <img src="/assets/business.svg" alt="Business Law" />
          <span className={styles["practice-name"]}>BUSINESS LAW</span>
        </Grid>
        <Grid item xs={4} className={styles.items}>
          <img src="/assets/partnership.svg" alt="Partnership Law" />
          <span className={styles["practice-name"]}>Partnership LAW</span>
        </Grid>
        <Grid item xs={4} className={styles.items}>
          <img src="/assets/real-estate.svg" alt="Real Estate Law" />
          <span className={styles["practice-name"]}>REAL ESTATE LAW</span>
        </Grid>
        <Grid item xs={8} className={styles.items}>
          <img src="/assets/business-2.svg" alt="Business Law" />
          <span className={styles["practice-name"]}>BUSINESS LAW</span>
        </Grid>
        <Grid item xs={8} className={styles.items}>
          <img
            src="/assets/landlord-disputes.svg"
            alt="Landlord Disputes Law"
          />
          <span className={styles["practice-name"]}>LANDLORD DISPUTE LAW</span>
        </Grid>
        <Grid item xs={4} className={styles.items}>
          <img src="/assets/elder-abuse.svg" alt="Elder Abuse Law" />
          <span className={styles["practice-name"]}>ELDER ABUSE LAW</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default AreaOfPractices;
