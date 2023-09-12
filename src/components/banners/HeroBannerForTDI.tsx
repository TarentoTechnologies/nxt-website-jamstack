import {
  bannerStyles,
  headerInfo,
  imgStyles,
  border,
  titleStyles,
  subtextStyles,
} from "./HeroBannerForTDI.module.css";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";

interface HeroBannerForTDIProps {
  data: {
    title: string;
    img: any;
    imgAltText?: string;
    subtext?: string;
    description: string;
  };
}

export const HeroBannerForTDI = ({ data }: HeroBannerForTDIProps) => {
  return (
    <div
      className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div
          className={`col-sm-12 col-md-6 d-flex flex-column justify-content-center`}
        >
          <div className={`${headerInfo}`}>
            <div className={`${cardHeader} ${titleStyles}`}>{data?.title}</div>
            <div className={`${subtextStyles}`}>
              <span className={`${border}`}></span>
              <p>{data?.subtext}</p>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-6 d-flex align-items-center`}>
          <img
            className={`${imgStyles} img-fluid`}
            src={data?.img}
            alt={data?.imgAltText}
            title={data?.imgAltText}
          />
        </div>
      </div>
    </div>
  );
};
