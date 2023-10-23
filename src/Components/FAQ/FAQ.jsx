import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./FAQ.module.css";
import ExpandIcon from "./ExpandIcon";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.brand}>FAQ</p>
        <p className={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </p>
      </div>
      <div className={styles["FAQs-section"]}>
        <div className={styles.FAQ}>
          <div className={styles.question}>
            Do I need a personal injury report?
          </div>
          <div className={styles.answer}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </div>
        </div>
        <img src="/assets/divider-horizontal.svg" alt="Divider" />
        <Accordion className={styles.FAQ}>
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles["accordion-summary"]}
          >
            <span className={styles.question}>How much is my case worth?</span>
          </AccordionSummary>
          <AccordionDetails className={styles["accordion-details"]}>
            <span className={styles.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <img src="/assets/divider-horizontal.svg" alt="Divider" />
        <Accordion className={styles.FAQ}>
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            className={styles["accordion-summary"]}
          >
            <span className={styles.question}>
              What should I do right after car accident?
            </span>
          </AccordionSummary>
          <AccordionDetails className={styles["accordion-details"]}>
            <span className={styles.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <img src="/assets/divider-horizontal.svg" alt="Divider" />
        <Accordion className={styles.FAQ}>
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            className={styles["accordion-summary"]}
          >
            <span className={styles.question}>How much is my case worth?</span>
          </AccordionSummary>
          <AccordionDetails className={styles["accordion-details"]}>
            <span className={styles.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
