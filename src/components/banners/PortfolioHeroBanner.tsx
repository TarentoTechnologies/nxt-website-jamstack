import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import { About } from "../../layouts/design-portfolio-detail";
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
import { BreadCrumb } from "../breadcrumbs/BreadCrumb";
import {
  agencyImg,
  bannerStyles,
  boldSubtext,
  border,
  breadCrumb,
  designPortfolioDetail,
  designPortfolioImg,
  headerInfo,
  imgStyles,
  logoStyles,
  subtextStyles,
  titleStyles,
} from "./PortfolioHeroBanner.module.css";

interface PortfolioHeroBannerProps {
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
  subTextBold?: boolean;
  isAgencyDetail?: boolean;
  withBreadcrumbs?: boolean;
  isListingPage?: boolean;
  AboutSectionData?: any;
  breadCrumbLabel?: string;
  breadCrumbLink?: string;
}

export const PortfolioHeroBanner = ({
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
  subTextBold,
  isAgencyDetail,
  withBreadcrumbs,
  isListingPage,
  AboutSectionData,
  breadCrumbLabel,
  breadCrumbLink,
}: PortfolioHeroBannerProps) => {
  return (
    <>
      {(isAgencyDetail || isListingPage) == true ? (
        <div
          className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
          id={id}
        >
          <div className={`row containerService paddingLeftRight15`}>
            {withBreadcrumbs && (
              <div className={`${breadCrumb}`}>
                <BreadCrumb
                  items={[
                    { label: breadCrumbLabel, url: breadCrumbLink },
                    { label: title },
                  ]}
                />
              </div>
            )}
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
                      data-aos="fade-up"
                    />
                  </div>
                )}
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
                  <p className={`${white87} ${subTextBold ? subTextV1 : ""}`}>
                    {subText}
                  </p>
                  <p className={`${white70} pe-lg-5`}>
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
                <div
                  className={`col-sm-12 col-md-10 d-flex align-items-center justify-content-center ${
                    isAgencyDetail ? agencyImg : ""
                  }`}
                >
                  <GatsbyImage
                    image={
                      getImage(img?.localFile)
                        ? getImage(img?.localFile)
                        : img?.localFile
                    }
                    alt={imgAltText ? imgAltText : ""}
                    className={`img-fluid`}
                    data-aos="fade-up"
                  />
                </div>
              ) : (
                <img
                  className={`${imgStyles} img-fluid`}
                  src={img?.localFile?.url}
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
          className={`container-fluid ${designPortfolioDetail} d-flex justify-content-center`}
          id={id}
        >
          <div className={`row containerService paddingLeftRight15`}>
            {withBreadcrumbs && (
              <div className={`${breadCrumb} ps-0 pb-4`}>
                <BreadCrumb
                  items={[
                    { label: breadCrumbLabel, url: breadCrumbLink },
                    { label: title },
                  ]}
                />
              </div>
            )}
            <div
              className={`col-12 d-flex align-items-center justify-content-center px-0`}
            >
              {isImage ? (
                <GatsbyImage
                  image={
                    getImage(img?.localFile)
                      ? getImage(img?.localFile)
                      : img?.localFile
                  }
                  alt={imgAltText ? imgAltText : ""}
                  className={`img-fluid ${designPortfolioImg}`}
                  data-aos="fade-up"
                />
              ) : (
                <img
                  className={`img-fluid ${designPortfolioImg}`}
                  src={img?.localFile?.url}
                  alt={imgAltText}
                  data-aos="fade-up"
                />
              )}
            </div>
            <About data={AboutSectionData} />
          </div>
        </div>
      )}
    </>
  );
};
