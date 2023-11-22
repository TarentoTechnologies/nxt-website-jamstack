import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  cardHeader,
  h1One,
} from "../../styles/style-guide/Typography.module.css";
import {
  bannerStyles,
  boldSubtext,
  border,
  headerInfo,
  imgStyles,
  logoStyles,
  subtextStyles,
  titleStyles,
} from "./HeroBannerForTDI.module.css";

interface HeroBannerForTDIProps {
  title: string;
  img: any;
  imgAltText?: string;
  subText?: string;
  description: string;
  withLogo?: boolean;
  logo?: any;
  isImage?: boolean;
  mainTitle?: string;
  govTech?: boolean;
  subTextBold?: boolean;
}

export const HeroBannerForTDI = ({
  title,
  img,
  imgAltText,
  subText,
  description,
  isImage,
  withLogo,
  logo,
  mainTitle,
  govTech,
  subTextBold,
}: HeroBannerForTDIProps) => {
  const image: any = getImage(img);

  return (
    <>
      {govTech == true ? (
        <div
          className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
        >
          <div
            className={`row d-flex containerService paddingLeftRight15 justify-content-between`}
          >
            <div
              className={`col-sm-12 col-md-5 d-flex flex-column justify-content-center px-md-0`}
            >
              <div className={`${headerInfo}`}>
                <div className={`${h1One} ${titleStyles}`}>{title}</div>
                <div className={`${subtextStyles}`}>
                  <span className={`${border}`}></span>
                  <p>{subText}</p>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className={`col-sm-12 col-md-6 d-flex align-items-center`}>
              {isImage ? (
                <GatsbyImage
                  image={image}
                  alt={imgAltText ? imgAltText : ""}
                  className={`${imgStyles} img-fluid`}
                />
              ) : (
                <img
                  className={`${imgStyles} img-fluid`}
                  src={img}
                  alt={imgAltText}
                  title={imgAltText}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
        >
          <div className={`row containerService paddingLeftRight15`}>
            <div
              className={`col-sm-12 col-md-6 d-flex flex-column justify-content-center px-md-0`}
            >
              <div className={`${headerInfo}`}>
                {withLogo && (
                  <div className={`${logoStyles}`}>
                    <img
                      src={logo}
                      alt={imgAltText}
                      title={imgAltText}
                      width="217"
                      height="71"
                      className={`img-fluid`}
                    />
                  </div>
                )}
                <div className={`${cardHeader} ${titleStyles}`}>
                  {mainTitle && (
                    <b>
                      {mainTitle}
                      <br />
                    </b>
                  )}
                  {title}
                </div>
                <div className={`${subtextStyles}`}>
                  <span className={`${border}`}></span>
                  <p className={`${subTextBold ? boldSubtext : ""}`}>
                    {subText}
                  </p>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className={`col-sm-12 col-md-6 d-flex align-items-center`}>
              {isImage ? (
                <GatsbyImage
                  image={image}
                  alt={imgAltText ? imgAltText : ""}
                  className={`${imgStyles} img-fluid`}
                />
              ) : (
                <img
                  className={`${imgStyles} img-fluid`}
                  src={img}
                  alt={imgAltText}
                  title={imgAltText}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
