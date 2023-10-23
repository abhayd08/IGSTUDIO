import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import { Mousewheel, Keyboard } from "swiper/modules";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const swiperRef = useRef(null);

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const reviews = [
    {
      name: "Jane Cooper",
      id: "jane-review",
      image: "/src/assets/pp-1.svg",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Devon Lane",
      id: "devon-review",
      image: "/src/assets/pp-2.svg",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Robert Fox",
      image: "/src/assets/pp-3.svg",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Scott Edwards",
      id: "scott-review",
      image: "/src/assets/pp-1.svg",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Rubel",
      id: "rubel-review",
      image: "/src/assets/pp-2.svg",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Paul",
      id: "paul-review",
      image: "/src/assets/pp-3.svg",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.brand}>What says our Happy Clients</p>
        <div className={styles["nav-btns"]}>
          <div className={styles["prev-btn"]} onClick={goToPrevSlide}>
            <img src="/src/assets/prev.svg" alt="Previous" />
          </div>
          <div className={styles["next-btn"]} onClick={goToNextSlide}>
            <img src="/src/assets/next.svg" alt="Next" />
          </div>
        </div>
      </div>
      <div className={styles["reviews-section"]}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          ref={swiperRef}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.name}>
                <div className={styles.review} id={styles[review.id]}>
                  <img
                    src={review.image}
                    className={styles["profile-pic"]}
                    alt={review.name}
                  />
                  <span className={styles["profile-name"]}>{review.name}</span>
                  <span className={styles["designation"]}>
                    {review.designation}
                  </span>
                  <span className={styles["review-description"]}>
                    {review.description}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
