import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import backwardArrow from "../../../static/icons/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg";
import forwardArrow from "../../../static/icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg";

export const PortfolioCarousel = () => {
  return (
    <div className="container-fluid" data-testid="portfolio-carousel">
      <div className="">
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="https://picsum.photos/824/457?random=1"
              alt="Test image 1"
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/824/457?random=2"
              alt="Test image 2"
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/824/457?random=3"
              alt="Test image 3"
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/824/457?random=4"
              alt="Test image 4"
              className="img-fluid"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
