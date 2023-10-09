import { heroImage, tagOrange, ctaIcon } from "./PortfolioCard.module.css";
import {
  tagLabel,
  heading700,
  subText2,
  cta1,
} from "../../styles/style-guide/Typography.module.css";
import {
  bgCadiumOrange,
  white87,
  bgGlaucousGreen,
  black87,
} from "../../styles/style-guide/ColorGuide.module.css";
import forwardArrow from "../../../static/icons/arrow_forward_black.svg";
import { Link } from "gatsby";

interface PortfolioCardProps {
  imgSrc?: any;
  imgAlt?: string;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: any;
}

export const PortfolioCard = ({
  imgSrc,
  imgAlt,
  tag,
  title,
  description,
  ctaText,
  ctaLink,
}: PortfolioCardProps) => {
  return (
    <div className="container-fluid">
      {/* Image */}
      <img
        className={`${heroImage} ${bgGlaucousGreen} img-fluid ${
          !imgSrc ? "w-100" : ""
        }`}
        src={imgSrc}
        alt={imgAlt}
      />

      {/* Tag */}
      <div className={`${tagOrange} ${bgCadiumOrange} mt-4`}>
        <label className={`${tagLabel} ${white87} px-3`}>{tag}</label>
      </div>

      {/* Heading */}
      <div className="mt-3">
        <h2 className={`${heading700} ${black87}`}>{title}</h2>
      </div>

      {/* Description */}
      <div className={`${subText2} ${black87}`}>{description}</div>

      {/* CTA */}
      <div className="mt-4">
        <Link to={ctaLink}>
          <label className={`${cta1}`} role="button">
            {ctaText}
            <span>
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
  );
};
