import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import { bgNeutralGray3 } from "../../styles/style-guide/ColorGuide.module.css";
import { carbon } from "../../styles/style-guide/ColorGuide.module.css";
import {
  cardHeader,
  h3600,
} from "../../styles/style-guide/Typography.module.css";
import {
  bannerStyles,
  customDescription,
  imgStyles,
  textStyles,
} from "./DesignProcessBanner.module.css";

interface DesignProcessBannerProps {
  heading: string;
  description: any;
  image: any;
  descriptionAlignment?: any;
  bgGray?: boolean;
}

export const DesignProcessBanner = ({
  heading,
  image,
  description,
  descriptionAlignment,
  bgGray,
}: DesignProcessBannerProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${bannerStyles} ${
        bgGray ? bgNeutralGray3 : ""
      }`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        {descriptionAlignment === "right" ? (
          <>
            {/* Description aligment: Right */}
            {/* Left */}
            <div className={`col-md-6 ${imgStyles}`}>
              <GatsbyImage
                image={
                  getImage(image?.localFile)
                    ? getImage(image?.localFile)
                    : image?.localFile
                }
                alt={image?.alternativeText}
                id={image?.id}
                data-aos="fade-up"
              />
            </div>

            {/* Right */}
            <div className={`col-md-6 col-lg-5 offset-lg-1 pt-3 ${textStyles}`}>
              <h3 className={`${h3600} pt-3 ${carbon}`} data-aos="fade-up">
                {heading}
              </h3>
              <div className={`py-2 ${customDescription}`} data-aos="fade-up">
                {ReactHtmlParser(description?.data.childMarkdownRemark?.html)}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Description aligment: Left */}
            {/* Left */}
            <div className={`col-md-6 col-lg-5 pt-3 ${textStyles}`}>
              <h3 className={`${h3600} pt-3 ${carbon}`} data-aos="fade-up">
                {heading}
              </h3>
              <div className={`py-2 ${customDescription}`} data-aos="fade-up">
                {ReactHtmlParser(description?.data.childMarkdownRemark?.html)}
              </div>
            </div>

            {/* Right */}
            <div className={`col-md-6 ${imgStyles} offset-lg-1`}>
              <GatsbyImage
                image={
                  getImage(image?.localFile)
                    ? getImage(image?.localFile)
                    : image?.localFile
                }
                alt={image?.alternativeText}
                id={image?.id}
                data-aos="fade-up"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
