import { PrimaryCTA } from "../buttons/PrimaryCTA";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import {
  bannerStyles,
  retailInfo,
  imgPadding,
  infoSectionPadding,
} from "./PyramidBanner.module.css";

interface PyramidBannerProps {
  title: string;
  description: string;
  btnDescr?: string;
  pyramidImg: any;
}

export const PyramidBanner = ({
  title,
  description,
  btnDescr,
  pyramidImg,
}: PyramidBannerProps) => {
  return (
    <div className={`container-fluid ${bannerStyles}`}>
      <div className={`row`}>
        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-4 offset-lg-2`}>
          <div className={`d-flex justify-content-center align-items-center`}>
            <img
              className={`${imgPadding} img-fluid`}
              src={pyramidImg}
              alt="Data pyramid"
              title="Data pyramid"
            />
          </div>
        </div>
        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4`}>
          <div className={`${infoSectionPadding} ${retailInfo}`}>
            <PrimaryTitle title={title} variant="banner" color="white" />
            <p>{description}</p>
            <PrimaryCTA label={btnDescr} primary />
          </div>
        </div>
      </div>
    </div>
  );
};
