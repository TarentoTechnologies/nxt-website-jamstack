import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { navButtons, swiperContainer } from "./PortfolioCarousel.module.css";
import { SwiperNavButtons } from "./SwiperNavButtons";

interface PortfolioCarouselProps {
  data: any[];
}

export const PortfolioCarousel = ({ data }: PortfolioCarouselProps) => {
  return (
    <div className={`${swiperContainer}`}>
      <Swiper
        // spaceBetween={24}
        modules={[Navigation, Pagination, A11y]}
        // slidesPerView={1.5}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
        }}
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
        <div className={`${navButtons}`}>
          <SwiperNavButtons />
        </div>
      </Swiper>
    </div>
  );
};
