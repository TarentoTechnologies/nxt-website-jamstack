import React from "react";

import {
  heroBannerStyles,
  logoHeadStyles,
  logoMainStyles,
  logoSection,
} from "./HeroBanner.module.css";

interface HeroBannerProps {
  data: any;
}

export const HeroBanner = ({ data }: HeroBannerProps) => {
  return (
    <div
      className={`container-fluid ${heroBannerStyles}`}
      data-testid="hero-banner"
    >
      <div className={`${logoSection}`}>
        <div className={`${logoMainStyles}`}>
          <img
            src={data.PrimaryImage?.localFile?.url}
            alt={data.PrimaryImage?.alternativeText}
            title={data.PrimaryImage?.caption}
            className="img-fluid"
          />
        </div>
        <div className={`${logoHeadStyles}`}>
          <img
            src={data.SecondaryImage?.localFile?.url}
            alt={data.SecondaryImage?.alternativeText}
            title={data.SecondaryImage?.caption}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};
