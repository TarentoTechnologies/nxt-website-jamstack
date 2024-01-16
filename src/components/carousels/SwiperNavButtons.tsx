import { useSwiper } from "swiper/react";

import backwardArrow from "../../../static/icons/Chevron_left.svg";
import forwardArrow from "../../../static/icons/Chevron_right.svg";
import { carouselBtn } from "./PortfolioCarousel.module.css";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns d-flex">
      <div className={`${carouselBtn} me-3`} onClick={() => swiper.slidePrev()}>
        <img src={backwardArrow} alt="Prev" width={60} />
      </div>
      <div className={`${carouselBtn}`} onClick={() => swiper.slideNext()}>
        <img src={forwardArrow} alt="Next" width={60} />
      </div>
    </div>
  );
};
