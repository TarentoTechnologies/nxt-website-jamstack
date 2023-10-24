import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


interface PortfolioCarouselProps {
  sliderData: any;
}

export const PortfolioCarousel = ({ sliderData }: PortfolioCarouselProps) => {

  return (
    <div className="container-fluid p-0 m-0">
      <div className="">
        <Swiper
          id={sliderData?.id}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".arrow-right-custom",
            prevEl: ".arrow-left-custom",
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            390: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 1.5,
              spaceBetween: 44,
            },
          }}
        >
          {sliderData?.Images.map((data: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <GatsbyImage
                  image={
                    getImage(data.localFile)
                      ? getImage(data.localFile)
                      : data.localFile
                  }
                  alt={`Portfolio carousel image ${index}`}
                  className="img-fluid"
                />
                {/* <img src={data.imgSrc} alt={data.alt} className="img-fluid" /> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
