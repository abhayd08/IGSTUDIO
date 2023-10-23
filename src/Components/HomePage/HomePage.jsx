import AreaOfPractices from "../AreaOfPractices/AreaOfPractices";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Newsletter from "../Newsletter/Newsletter";
import Reviews from "../Reviews/Reviews";
import Team from "../Team/Team";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles["hero-container"]}>
        <HeroSection />
      </div>
      <div className={styles["intro-content"]}>
        <div className={styles["content-1"]}>Let’s Introduce Ourself</div>
        <div className={styles["info-box"]}>
          <img src="/assets/divider-line.svg" alt="Divider" />
          <div>
            <p className={styles.designation}>Criminal Lawyer</p>
            <p className={styles["content-2"]}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit
              Exercitation.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["features-container"]}>
        <p className={styles["features-heading"]}>Why Choose us?</p>
        <div className={styles["features-section"]}>
          <div className={styles.feature}>
            <img
              src="/assets/feature-icon.svg"
              className={styles["feature-icon"]}
              alt="Feature"
            />
            <span className={styles["feature-name"]}>98% Success Rate</span>
            <span className={styles["feature-description"]}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </span>
            <button className={styles["read-more-btn"]}>Read More</button>
          </div>
          <div className={styles.feature}>
            <img
              src="/assets/feature-icon.svg"
              className={styles["feature-icon"]}
              alt="Feature"
            />
            <span className={styles["feature-name"]}>100% Success Rate</span>
            <span className={styles["feature-description"]}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </span>
            <button className={styles["read-more-btn"]}>Read More</button>
          </div>
          <div className={styles.feature}>
            <img
              src="/assets/feature-icon.svg"
              className={styles["feature-icon"]}
              alt="Feature"
            />
            <span className={styles["feature-name"]}>100% Success Rate</span>
            <span className={styles["feature-description"]}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </span>
            <button className={styles["read-more-btn"]}>Read More</button>
          </div>
        </div>
      </div>
      <AreaOfPractices />
      <Reviews />
      <Team />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
