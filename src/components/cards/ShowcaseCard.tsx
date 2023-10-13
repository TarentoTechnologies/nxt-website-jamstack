import {
  showCaseCard,
  showCaseImg,
  dummyImgArea,
  ctaIconPos,
} from "./ShowcaseCard.module.css";
import {
  heading700,
  subText2,
  cta1,
} from "../../styles/style-guide/Typography.module.css";
import {
  black,
  bgWhite,
  bgGlaucousGreen,
} from "../../styles/style-guide/ColorGuide.module.css";
import { Link } from "gatsby";
import { ctaIcon } from "../cards/PortfolioCard.module.css";
import forwardArrow from "../../../static/icons/arrow_forward_black.svg";

interface ShowcaseCardProps {
  imgSrc: any;
  imgAlt: string;
  title: string;
  description: string;
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
  return (
    <div className={`container-fluid`}>
      <div className={`row ${showCaseCard} ${bgWhite}`}>
        {/* Left side */}
        {imgSrc && imgSrc !== null ? (
          <div
            className={`col-sm-12 col-md-12 col-lg-12 col-xl-6 p-0 m-0 object-fit-cover`}
          >
            <img
              src={imgSrc}
              alt={imgAlt}
              className={`${showCaseImg} img-fluid`}
            />
          </div>
        ) : (
          <div
            className={`col-sm-12 col-md-12 col-lg-12 col-xl-6 p-0 m-0 object-fit-cover ${bgGlaucousGreen} ${dummyImgArea}`}
          ></div>
        )}

        {/* Right side */}
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 d-flex align-items-center">
          <div className="my-4 my-sm-4 my-md-4 my-lg-4 my-xl-0 mx-4">
            <h2 className={`${heading700}`}>{title}</h2>
            <p className={`${subText2} ${black} py-3`}>{description}</p>
            {/* CTA */}
            <div className="mt-3">
              <Link to={ctaLink}>
                <label className={`${cta1}`} role="button">
                  {ctaText}
                  <span className={`${ctaIconPos}`}>
                    <img
                      className={`${ctaIcon} ps-2`}
                      src={forwardArrow}
                      alt={ctaText}
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
