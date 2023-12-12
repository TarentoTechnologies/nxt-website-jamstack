import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import {
  white70,
  white,
  white87,
} from "../../styles/style-guide/ColorGuide.module.css";
import {
  cardHeader,
  h1One,
  h1CardTitle,
  subTextV1
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
  id?: any;
  title: string;
  img: any;
  imgAltText?: string;
  subText?: string;
  description: any;
  withLogo?: boolean;
  logo?: any;
  isImage?: boolean;
  mainTitle?: string;
  govTech?: boolean;
  subTextBold?: boolean;
}

export const HeroBannerForTDI = ({
  id,
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
          id={id}
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
                  <p className={`${white87}`}>{subText}</p>
                  <p className={`${white70}`}>
                    {ReactHtmlParser(
                      description.data?.childMarkdownRemark?.html
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-6 d-flex align-items-center justify-content-center`}
            >
              {isImage ? (
                <div className="col-sm-12 col-md-10">
                  <GatsbyImage
                    image={image}
                    alt={imgAltText ? imgAltText : ""}
                    className={`img-fluid`}
                  />
                </div>
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
          id={id}
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
                <h1 className={`${h1CardTitle} ${white}`}>
                  {mainTitle && (
                    <b>
                      {mainTitle}
                      <br />
                    </b>
                  )}
                  {title}
                </h1>
                <div className={`${subtextStyles}`}>
                  <span className={`${border}`}></span>
                  <p className={`${white87} ${subTextBold ? subTextV1 : ""}`}>
                    {subText}
                  </p>
                  <p className={`${white70}`}>
                    {ReactHtmlParser(
                      description.data?.childMarkdownRemark?.html
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-6 d-flex align-items-center justify-content-center`}
            >
              {isImage ? (
                <div className="col-sm-12 col-md-10">
                  <GatsbyImage
                    image={image}
                    alt={imgAltText ? imgAltText : ""}
                    className={`img-fluid`}
                  />
                </div>
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
