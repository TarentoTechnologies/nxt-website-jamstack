import { Link } from "gatsby";
import { url } from "inspector";

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
    <div
      className={`container-fluid ${bannerWithCTA} text-white`}
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
  );
};
