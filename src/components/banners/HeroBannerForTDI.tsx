import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ReactHtmlParser from "react-html-parser";

import {
  white,
  white70,
  white87,
} from "../../styles/style-guide/ColorGuide.module.css";
import {
  cardHeader,
  h1CardTitle,
  h1One,
  logoTitle,
  subTextV1,
  subTextV3,
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
  isAurora?: boolean;
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
  isAurora,
}: HeroBannerForTDIProps) => {
  const image: any = getImage(img);

  return (
    <>
      {govTech == true ? (
        <div
          className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
          id={id}
          data-testid="hero-banner-for-tdi"
        >
          <div
            className={`row d-flex containerService paddingLeftRight15 justify-content-between`}
          >
            <div
              className={`col-sm-12 col-md-5 d-flex flex-column justify-content-center px-md-0`}
            >
              <div className={`${headerInfo}`}>
                <div
                  className={`${logoTitle} ${titleStyles}`}
                  data-aos="fade-up"
                >
                  {title}
                </div>
                <div className={`${subtextStyles}`}>
                  <span className={`${border}`}></span>
                  <p className={`${white87}`} data-aos="fade-up">
                    {subText}
                  </p>
                  <p className={`${white70}`} data-aos="fade-up">
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
                    data-aos="fade-up"
                  />
                </div>
              ) : (
                <img
                  className={`${imgStyles} img-fluid`}
                  src={img}
                  alt={imgAltText}
                  title={imgAltText}
                  data-aos="fade-up"
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
          id={id}
          data-testid="hero-banner-for-tdi"
        >
          <div className={`row containerService paddingLeftRight15`}>
            <div
              className={`col-sm-12 col-md-6 d-flex flex-column justify-content-center px-md-0`}
            >
              <div className={`${headerInfo}`}>
                {withLogo &&
                  (isImage ? (
                    <div className={`${logoStyles}`}>
                      <GatsbyImage
                        image={  getImage(logo?.localFile)
                          ? getImage(logo?.localFile)
                          : logo?.localFile}
                        alt={logo?.alternativeText}
                        className={`img-fluid`}
                        data-aos="fade-up"
                      />
                    </div>
                  ) : (
                    <div className={`${logoStyles}`}>
                      <img
                        src={logo}
                        alt={imgAltText}
                        title={imgAltText}
                        width="217"
                        height="71"
                        className={`img-fluid`}
                        data-aos="fade-up"
                      />
                    </div>
                  ))}
                <h1 className={`${h1CardTitle} ${white}`} data-aos="fade-up">
                  {mainTitle && (
                    <b className={`${white} ${logoTitle}`}>
                      {mainTitle}
                      <br />
                    </b>
                  )}
                  {title}
                </h1>
                <div
                  className={`${subtextStyles}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className={`${border}`}></span>
                  <p
                    className={`${white87} ${subTextBold ? subTextV1 : ""} ${
                      isAurora ? subTextV3 : ""
                    }`}
                  >
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
                    data-aos="fade-up"
                  />
                </div>
              ) : (
                <img
                  className={`${imgStyles} img-fluid`}
                  src={img}
                  alt={imgAltText}
                  title={imgAltText}
                  data-aos="fade-up"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
