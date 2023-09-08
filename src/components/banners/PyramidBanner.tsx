import { PrimaryCTA } from "../buttons/PrimaryCTA";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import {
  bannerStyles,
  retailInfo,
  imgPadding,
  infoSectionPadding,
} from "./PyramidBanner.module.css";

interface PyramidBannerProps {
  data: {
    title: string;
    description: string;
    btnDescr?: string;
    pyramidImg: any;
  };
}

export const PyramidBanner = ({ data }: PyramidBannerProps) => {
  return (
    <div className={`container-fluid ${bannerStyles}`}>
      <div className={`row`}>
        <div className={`col-md-12 col-lg-4 offset-lg-2`}>
          <div className={`d-flex justify-content-center align-items-center`}>
            <img
              className={`${imgPadding} img-fluid`}
              src={data.pyramidImg}
              alt={data.title}
              title={data.title}
            />
          </div>
        </div>
        <div className={`col-md-12 col-lg-6 col-xl-4`}>
          <div className={`${infoSectionPadding} ${retailInfo}`}>
            <PrimaryTitle title={data.title} variant="banner" color="white" />
            <p>{data.description}</p>
            <PrimaryCTA label={data.btnDescr} primary />
          </div>
        </div>
      </div>
    </div>
  );
};
