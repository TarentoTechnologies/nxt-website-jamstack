import {
  cardHeader,
  infoSectionH2,
} from "../../styles/style-guide/Typography.module.css";
import { bgNeutralGray } from "../../styles/style-guide/ColorGuide.module.css";
import {
  bannerStyles,
  imgStyles,
  textStyles,
} from "./DesignProcessBanner.module.css";

interface DesignProcessBannerProps {
  heading: string;
  subHeading: string;
  levelOneDesc: string;
  levelTwoDesc: string;
  levelThreeDesc?: string;
  img: any;
  bgGray?: boolean;
}

export const DesignProcessBanner = ({
  heading,
  subHeading,
  levelOneDesc,
  levelTwoDesc,
  levelThreeDesc,
  img,
  bgGray,
}: DesignProcessBannerProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${bannerStyles} ${
        bgGray ? bgNeutralGray : ""
      }`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-md-6 ${imgStyles}`}>
          <img
            src={img}
            alt={heading}
            title={heading}
            className={`img-fluid`}
          />
        </div>
        <div className={`col-md-6 col-lg-5 offset-lg-1 pt-3 ${textStyles}`}>
          <h3 className={`${infoSectionH2} pt-3`}>{heading}</h3>
          <p className={`pt-3`}>{levelOneDesc}</p>
          <h4 className={`${cardHeader} pt-3`}>{subHeading}</h4>
          <p className={`pt-3 mb-0`}>{levelTwoDesc}</p>
          <p className={`pt-3`}>{levelThreeDesc}</p>
        </div>
      </div>
    </div>
  );
};
