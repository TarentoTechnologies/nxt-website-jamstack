import { Link } from "gatsby";
import { url } from "inspector";

import { bgUraniaBlue } from "../../styles/style-guide/ColorGuide.module.css";
import {
  bannerCTAtext,
  h1700V4,
} from "../../styles/style-guide/Typography.module.css";
import {
  bannerWithCTA,
  btnStyles,
  titleStyles,
} from "./BannerWithCTA.module.css";

interface BannerWithCTAProps {
  title: string;
  bgImg: any;
  CTAtext: string;
  CTAlink: any;
  isCTAExternal?: boolean;
}

export const BannerWithCTA = ({
  title,
  bgImg,
  CTAtext,
  CTAlink,
  isCTAExternal,
}: BannerWithCTAProps) => {
  return (
    <>
      {/* For smaller screens */}
      <div
        className={`container-fluid ${bannerWithCTA} text-white d-block d-sm-block d-md-block d-lg-block d-xl-none ${bgUraniaBlue}`}
      >
        <div className={`${h1700V4} ${titleStyles}`} data-aos="fade-up">
          {title}
        </div>
        <div className={`mt-5 ${btnStyles} text-center`} data-aos="fade-up">
          {!isCTAExternal ? (
            <Link to={CTAlink}>
              <label className={`${bannerCTAtext}`} role="button">
                {CTAtext}
              </label>
            </Link>
          ) : (
            <a href={CTAlink} rel="external" target="_blank">
              <label className={`${bannerCTAtext}`} role="button">
                {CTAtext}
              </label>
            </a>
          )}
        </div>
      </div>
      {/* For larger screens */}
      <div
        className={`container-fluid ${bannerWithCTA} text-white d-none d-sm-none d-md-none d-lg-none d-xl-block`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={`${h1700V4} ${titleStyles}`} data-aos="fade-up">
          {title}
        </div>
        <div className={`mt-5 ${btnStyles} text-center`} data-aos="fade-up">
          {!isCTAExternal ? (
            <Link to={CTAlink}>
              <label className={`${bannerCTAtext}`} role="button">
                {CTAtext}
              </label>
            </Link>
          ) : (
            <a href={CTAlink} rel="external" target="_blank">
              <label className={`${bannerCTAtext}`} role="button">
                {CTAtext}
              </label>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
