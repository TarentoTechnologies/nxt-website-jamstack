import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import forwardArrow from "../../../static/icons/arrow_forward_black.svg";
import {
  bgGlaucousGreen,
  bgWhite,
  black,
} from "../../styles/style-guide/ColorGuide.module.css";
import {
  cta1,
  heading700,
  subText2,
} from "../../styles/style-guide/Typography.module.css";
import { ctaIcon } from "../cards/PortfolioCard.module.css";
import {
  ctaIconPos,
  imgContainer,
  showCaseCard,
  showCaseImg,
} from "./ShowcaseCard.module.css";

interface ShowcaseCardProps {
  imgSrc: any;
  imgAlt: string;
  title: string;
  description: any;
  ctaText: string;
  ctaLink: any;
}

export const ShowcaseCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  ctaText,
  ctaLink,
}: ShowcaseCardProps) => {
  const image: any = getImage(imgSrc);

  return (
    <div className={`container-fluid`}>
      <div className={`row ${showCaseCard} ${bgWhite}`}>
        {/* Left side */}
        {imgSrc && imgSrc !== null ? (
          <div
            className={`col-sm-12 col-md-12 col-lg-12 col-xl-6 p-0 m-0 object-fit-cover d-flex justify-content-center align-items-center ${imgContainer}`}
          >
            {/* <img
              src={imgSrc}
              alt={imgAlt}
              className={`${showCaseImg} img-fluid`}
            /> */}
            <GatsbyImage
              image={image}
              alt={imgAlt ? imgAlt : ""}
              className={`${showCaseImg} img-fluid`}
              data-aos="fade-up"
            />
          </div>
        ) : (
          <div
            className={`col-sm-12 col-md-12 col-lg-12 col-xl-6 p-0 m-0 object-fit-cover ${bgGlaucousGreen} ${imgContainer}`}
            data-aos="fade-up"
          >
            <img
              src={imgSrc}
              alt={imgAlt}
              className={`${showCaseImg} img-fluid`}
            />
          </div>
        )}

        {/* Right side */}
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 d-flex align-items-center">
          <div className="my-4 my-sm-4 my-md-4 my-lg-4 my-xl-0 mx-4">
            <h2 className={`${heading700}`} data-aos="fade-up">
              {title}
            </h2>
            <div className={`${subText2} ${black} py-3`} data-aos="fade-up">
              {/* {description} */}
              {ReactHtmlParser(description?.data?.childMarkdownRemark?.html)}
            </div>
            {/* CTA */}
            <div className="mt-3">
              <Link to={ctaLink}>
                <label
                  className={`${cta1} pe-auto cursorPointer`}
                  role="link"
                  data-aos="fade-up"
                >
                  {ctaText}
                  <span className={`${ctaIconPos}`}>
                    <img
                      className={`${ctaIcon} ps-2`}
                      src={forwardArrow}
                      alt={ctaText}
                      data-aos="fade-up"
                    />
                  </span>
                </label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
