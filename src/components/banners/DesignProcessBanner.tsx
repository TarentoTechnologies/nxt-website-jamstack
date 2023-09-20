import {
  cardHeader,
  infoSectionH2,
} from "../../styles/style-guide/Typography.module.css";
import { bgNeutralGray } from "../../styles/style-guide/ColorGuide.module.css";
import { bannerStyles, imgStyles } from "./DesignProcessBanner.module.css";

interface DesignProcessBannerProps {
  data: {
    heading: string;
    subHeading: string;
    levelOneDesc: string;
    levelTwoDesc: string;
    img: any;
    bgGray?: boolean;
  };
}

export const DesignProcessBanner = ({ data }: DesignProcessBannerProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${bannerStyles} ${
        data?.bgGray ? bgNeutralGray : ""
      }`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-md-6 ${imgStyles}`}>
          <img
            src={data?.img}
            alt={data?.heading}
            title={data?.heading}
            className={`img-fluid`}
          />
        </div>
        <div className={`col-md-6 col-lg-5 offset-lg-1 pt-3`}>
          <h3 className={`${infoSectionH2} pt-3`}>{data?.heading}</h3>
          <p className={`pt-3`}>{data?.levelOneDesc}</p>
          <h4 className={`${cardHeader} pt-3`}>{data?.subHeading}</h4>
          <p className={`pt-3`}>{data?.levelTwoDesc}</p>
        </div>
      </div>
    </div>
  );
};
