import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import forwardArrow from "../../../static/icons/arrow_forward_black.svg";
import {
  bgCadiumOrange,
  bgGlaucousGreen,
  bgUraniaBlue,
  black87,
  white87,
} from "../../styles/style-guide/ColorGuide.module.css";
import {
  cta1,
  heading700,
  subText2,
  tagLabel,
} from "../../styles/style-guide/Typography.module.css";
import {
  ctaIcon,
  customTag,
  heroImage,
  heroProgrammerImage,
  truncateDescription,
} from "./PortfolioCard.module.css";
import { ctaIconPos } from "./ShowcaseCard.module.css";

interface PortfolioCardProps {
  imgSrc?: any;
  imgAlt?: string;
  tag?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: any;
  tagVariant?: string;
  isProgramme?: boolean;
  isCTAExternal?: boolean;
}

export const PortfolioCard = ({
  imgSrc,
  imgAlt,
  tag,
  title,
  description,
  ctaText,
  ctaLink,
  tagVariant,
  isProgramme,
  isCTAExternal,
}: PortfolioCardProps) => {
  const image: any = getImage(imgSrc);

  return (
    <div className="container-fluid">
      {/* Image */}
      <GatsbyImage
        image={image}
        alt={imgAlt ? imgAlt : ""}
        className={`${
          isProgramme ? heroProgrammerImage : heroImage
        } ${bgGlaucousGreen} img-fluid ${!imgSrc ? "w-100" : ""}`}
        data-aos="fade-up"
      />

      {/* Tag */}
      {tag && tag !== null && (
        <div
          className={`${customTag} ${
            tagVariant === "blue" ? bgUraniaBlue : bgCadiumOrange
          }  mt-4`}
          data-aos="fade-up"
        >
          <label className={`${tagLabel} ${white87} px-3`}>{tag}</label>
        </div>
      )}

      {/* Heading */}
      <div className="mt-3" data-aos="fade-up">
        <h2 className={`${heading700} ${black87}`}>{title}</h2>
      </div>

      {/* Description */}
      <div
        className={`${subText2} ${black87} ${truncateDescription}`}
        data-aos="fade-up"
      >
        {description}
      </div>

      {/* CTA */}
      <div className="mt-4" data-aos="fade-up">
        {!isCTAExternal ? (
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
        ) : (
          <a href={ctaLink} rel="external" target="_blank">
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
          </a>
        )}
      </div>
    </div>
  );
};
