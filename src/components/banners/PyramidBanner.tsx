import { PrimaryCTA } from "../buttons/PrimaryCTA";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import {
  bannerStyles,
  imgPadding,
  infoSectionPadding,
  retailInfo,
} from "./PyramidBanner.module.css";

interface PyramidBannerProps {
  title: string;
  description: string;
  btnDescr?: string;
  btnLink?: any
  pyramidImg: any;
}

export const PyramidBanner = ({
  title,
  description,
  btnDescr,
  pyramidImg,
  btnLink
}: PyramidBannerProps) => {
  return (
    <div className={`container-fluid ${bannerStyles}`}>
      <div className={`row`}>
        <div className={`col-md-12 col-lg-4 offset-lg-2`}>
          <div className={`d-flex justify-content-center align-items-center`}>
            <img
              className={`${imgPadding} img-fluid`}
              src={pyramidImg}
              alt={title}
              title={title}
              data-sal="slide-up"
              data-sal-duration="900"
              data-sal-easing="ease-in-back"
            />
          </div>
        </div>
        <div className={`col-md-12 col-lg-6 col-xl-4`}>
          <div
            className={`${infoSectionPadding} ${retailInfo}`}
            data-sal="slide-up"
            data-sal-duration="900"
            data-sal-easing="ease-in-back"
          >
            <PrimaryTitle title={title} variant="banner" color="white" />
            <p>{description}</p>
            <PrimaryCTA label={btnDescr} btnLink={btnLink} primary />
          </div>
        </div>
      </div>
    </div>
  );
};
