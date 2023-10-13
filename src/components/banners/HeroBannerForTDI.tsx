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
  data: {
    mainTitle?: string;
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
          className={`col-sm-12 col-md-6 d-flex flex-column justify-content-center px-md-0`}
        >
          <div className={`${headerInfo}`}>
            <div className={`${cardHeader} ${titleStyles}`}>
              {data.mainTitle && (
                <b>
                  {data.mainTitle}
                  <br />
                </b>
              )}

              {data?.title}
            </div>
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
