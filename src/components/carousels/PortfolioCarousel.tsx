import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import backwardArrow from "../../../static/icons/Chevron_backward_Light.svg";
import forwardArrow from "../../../static/icons/Chevron_forward_D.svg";
import img1 from "../../../static/images/agencyportfolio/01 CEO Dashboard Copy 2.png";
import img2 from "../../../static/images/agencyportfolio/Home Copy 4.png";
import {
  navButtons,
  nextBtn,
  prevBtn,
  swiperContainer,
} from "./PortfolioCarousel.module.css";

interface PortfolioCarouselProps {
  data: any[];
}

export const PortfolioCarousel = ({ data }: PortfolioCarouselProps) => {
  return (
    <div className="swiper">
      <div className={`${swiperContainer}`}>
        <Swiper
          spaceBetween={24}
          modules={[Navigation, Pagination]}
          slidesPerView={1.5}
          // navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={true}
        >
          {data?.map((listData: any, index: number) => {
            return (
              <SwiperSlide>
                <img
                  src={listData?.localFile?.url}
                  alt={listData?.alternativeText}
                  className="img-fluid"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className={`${navButtons}`}>
        <div className={`swiper-button-prev ${prevBtn}`}>
          <img src={backwardArrow} alt="Previous" />
        </div>
        <div className={`swiper-button-next ${nextBtn}`}>
          <img src={forwardArrow} alt="Next" />
        </div>
      </div> */}
    </div>
  );
};
