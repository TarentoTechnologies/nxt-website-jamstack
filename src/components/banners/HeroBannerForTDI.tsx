import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  bannerStyles,
  border,
  headerInfo,
  imgStyles,
  subtextStyles,
  titleStyles,
} from "./HeroBannerForTDI.module.css";

interface HeroBannerForTDIProps {
  title: string;
  img: any;
  imgAltText?: string;
  subText?: string;
  description: string;
}

export const HeroBannerForTDI = ({
  title,
  img,
  imgAltText,
  subText,
  description,
}: HeroBannerForTDIProps) => {
  return (
    <div
      className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div
          className={`col-sm-12 col-md-6 d-flex flex-column justify-content-center px-md-0`}
        >
          <div className={`${headerInfo}`}>
            <div className={`${cardHeader} ${titleStyles}`}>{title}</div>
            <div className={`${subtextStyles}`}>
              <span className={`${border}`}></span>
              <p>{subText}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-6 d-flex align-items-center`}>
          <img
            className={`${imgStyles} img-fluid`}
            src={img}
            alt={imgAltText}
            title={imgAltText}
          />
        </div>
      </div>
    </div>
  );
};
