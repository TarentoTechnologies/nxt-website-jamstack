import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import { carbon } from "../../styles/style-guide/ColorGuide.module.css";
import { PrimaryCTA } from "../buttons/PrimaryCTA";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import {
  bannerStyles,
  buttonStyles,
  customH3,
  imgStyles,
  innovationStory,
  subFont,
  subTitleStyles,
  techSolution,
  titleStyles,
  whiteBox,
} from "./StoryBanner.module.css";

interface StoryBannerProps {
  primaryTitle: string;
  cardData: any;
  subTitle?: string;
  bgImg?: any;
  // image?: any;
  // // subText: {
  // //   LevelOneHeading?: string;
  // //   LevelTwoHeading?: string;
  // //   LevelOneDesc?: string;
  // //   LevelTwoDesc?: string;
  // //   LevelThreeDesc?: string;
  // // };
  variant?: string;
  withCTA?: boolean;
  isImage?: boolean;
  spaceAboveCTA?: boolean;
  // CTAlabel?: string;
  // CTAlink?: any;
}

export const StoryBanner = ({
  primaryTitle,
  cardData,
  variant,
  bgImg,
  subTitle,
  withCTA,
  isImage,
  spaceAboveCTA
}: StoryBannerProps) => {
  const col1 = variant === "tech" ? "col-lg-6" : "col-lg-6";
  const col2 = variant === "tech" ? "col-lg-6" : "col-lg-6";
  const image: any = getImage(cardData?.Image?.localFile);

  return (
    <div
      className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
      style={
        variant === "lead"
          ? {
              backgroundImage: `url(${bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {}
      }
      id={cardData?.id}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-12 ${titleStyles} px-lg-0`}>
          <PrimaryTitle title={primaryTitle} variant="h1700" color="white" />
          <h3 className={`${subTitleStyles}`}>{subTitle}</h3>
        </div>
        <div
          className={`${col1} ${imgStyles} d-flex justify-content-center align-items-center`}
        >
          {!isImage ? (
            <img
              src={cardData?.Image?.localFile?.url}
              alt={
                cardData?.Image?.alternativeText
                  ? cardData?.Image?.alternativeText
                  : ""
              }
              title={cardData?.Image?.caption ? cardData?.Image?.caption : ""}
              className={`img-fluid`}
            />
          ) : (
            <GatsbyImage
              image={image}
              alt={
                cardData?.Image?.alternativeText
                  ? cardData?.Image?.alternativeText
                  : ""
              }
              className={`img-fluid`}
            />
          )}
        </div>
        <div
          className={`${col2} d-flex justify-content-center align-items-center`}
        >
          <div
            className={`${whiteBox} ${carbon} p-5
            ${variant === "tech" ? techSolution : ""}
            ${variant === "innovation" ? innovationStory : ""}`}
          >
            {cardData?.PrimaryTitle && (
              <h3 className={`${customH3} customMaringBtm1 pt-4 pb-3`}>
                {cardData?.PrimaryTitle}
              </h3>
            )}

            {/* <div className={`${subFont}`}>{cardData?.PrimaryTitle}</div> */}
            <div className={`${spaceAboveCTA ? "pb-4" : ""}`}>
              {ReactHtmlParser(
                cardData?.Description.data.childMarkdownRemark.html
              )}
            </div>
            {/* <h3>{data?.subText?.LevelOneHeading}</h3>
            <div className={`${subFont}`}>{data?.subText?.LevelTwoHeading}</div>
            <p>{data?.subText?.LevelOneDesc}</p>
            <p>{data?.subText?.LevelTwoDesc}</p>
            <p>{data?.subText?.LevelThreeDesc}</p> */}
            {withCTA && (
              <div className={`${variant === "lead" ? buttonStyles : ""}`}>
                <PrimaryCTA
                  label={cardData?.CTAText}
                  btnLink={cardData?.CTALink}
                  isMail={cardData?.isCTAEmail}
                  size="large"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
