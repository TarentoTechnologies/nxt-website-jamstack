import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React from "react";
import { useEffect, useRef, useState } from "react";

import backwardArrowSmall from "../../../static/icons/Chevron_forward_LightSmall.svg";
import backwardArrow from "../../../static/icons/Left_arrow.svg";
import forwardArrow from "../../../static/icons/Right_arrow.svg";
import forwardArrowSmall from "../../../static/icons/rightForwardSmall.svg";
import {
  customImgWidth,
  customSlideWidth,
  leftIndicatorPos,
  rightIndicatorPos,
} from "./PortfolioCarousel.module.css";

interface PortfolioCarouselProps {
  data: any[];
}

export const PortfolioCarousel = ({ data }: PortfolioCarouselProps) => {
  const carousel: any = useRef<Splide>();

  const [carouselOptions, setCarouselOptions] = useState<any>({
    type: "loop",
    perPage: 1,
    perMove: 1,
    lazyLoad: "nearby",
    start: 0,
    gap: "0",
    slideFocus: true,
    autoWidth: true,
    pagination: true,
    paginationDirection: "rtl",
  });

  const [items, setItems] = useState<any[]>(
    data?.map((listData: any, index: number) => {
      return (
        <div className={`me-4 mb-3`}>
          <img
            key={index}
            src={listData?.localFile?.url}
            alt={listData?.alternativeText}
            className="img-fluid w-100"
          />
        </div>
      );
    })
  );

  useEffect(() => {
    if (data?.length > 1) {
      const tempData: any = [];
      data?.map((listData: any, index: number) => {
        return tempData.push(
          <div className={`me-4 mb-3`}>
            <img
              key={index}
              src={listData?.localFile?.url}
              alt={listData?.alternativeText}
              className="img-fluid w-100"
            />
          </div>
        );
      });

      setItems(tempData);
    }
  }, [data]);

  return (
    <div
      className={`position-relative ${customSlideWidth}`}
      id="portfolioCarousel"
    >
      <Splide
        ref={carousel}
        options={carouselOptions}
        hasTrack={false}
        aria-label="highlight-carousel"
      >
        <div className="splide__arrows">
          <div className="splide__arrows">
            <div className="splide__arrow--prev" role="button">
              <img
                src={backwardArrow}
                alt="Previous slide"
                id={"leftIndicator"}
                className={`position-absolute ${leftIndicatorPos}`}
              />
            </div>
            <div className="splide__arrow--next" role="button">
              <img
                src={forwardArrow}
                alt="Next slide"
                id={"rightIndicator"}
                className={`position-absolute ${rightIndicatorPos}`}
              />
            </div>
          </div>
        </div>

        <SplideTrack>
          {items?.map((data: any, index: number) => {
            return (
              <SplideSlide key={index} className={`${customImgWidth}`}>
                {data}
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  );
};
