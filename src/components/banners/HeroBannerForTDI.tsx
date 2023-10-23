import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  bannerStyles,
  border,
  headerInfo,
  imgStyles,
  subtextStyles,
  logoStyles,
  titleStyles,
} from "./HeroBannerForTDI.module.css";

interface HeroBannerForTDIProps {
  data: {
    title: string;
    img: any;
    imgAltText?: string;
    subText?: string;
    description: string;
    withLogo?: boolean;
    logo?: any;
    isImage?: boolean;
  };
}

export const HeroBannerForTDI = ({ data }: HeroBannerForTDIProps) => {
  const image: any = getImage(data?.img);

  return (
    <div
      className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div
          className={`col-sm-12 col-md-6 d-flex flex-column justify-content-center px-md-0`}
        >
          <div className={`${headerInfo}`}>
            {data.withLogo && (
              <div className={`${logoStyles}`}>
                <img
                  src={data?.logo}
                  alt={data?.imgAltText}
                  title={data.imgAltText}
                  width="217"
                  height="71"
                  className={`img-fluid`}
                />
              </div>
            )}
            <div className={`${cardHeader} ${titleStyles}`}>{data?.title}</div>
            <div className={`${subtextStyles}`}>
              <span className={`${border}`}></span>
              <p>{data?.subText}</p>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-6 d-flex align-items-center`}>
          {data?.isImage ? (
            <GatsbyImage
              image={image}
              alt={data?.imgAltText ? data?.imgAltText : ""}
              className={`${imgStyles} img-fluid`}
            />
          ) : (
            <img
              className={`${imgStyles} img-fluid`}
              src={data?.img}
              alt={data?.imgAltText}
              title={data?.imgAltText}
            />
          )}
        </div>
      </div>
    </div>
  );
};
