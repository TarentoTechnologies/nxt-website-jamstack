import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import forwardArrow from "../../../static/icons/arrow_forward_black.svg";
import {
  cta1,
  planHeading,
  subText2,
} from "../../styles/style-guide/Typography.module.css";
import { dashboardCard } from "./DashboardCard.module.css";
import { ctaIcon } from "./PortfolioCard.module.css";
import { ctaIconPos } from "./ShowcaseCard.module.css";

interface DashboardCardProps {
  title: string;
  description: string;
  imgSrc: any;
  imgAltText?: string;
  ctaLabel: string;
  ctaLink: string;
  isCTAExternal: boolean;
}

export const DashboardCard = ({
  title,
  description,
  imgSrc,
  imgAltText,
  ctaLabel,
  ctaLink,
  isCTAExternal,
}: DashboardCardProps) => {
  return (
    <div className={`${dashboardCard} whiteBg position-relative`}>
      <div data-aos="fade-up">
        <GatsbyImage
          image={
            getImage(imgSrc?.localFile)
              ? getImage(imgSrc?.localFile)
              : imgSrc?.localFile
          }
          alt={imgAltText ? imgAltText : ""}
        />
      </div>
      <div className={`${planHeading} pt-3`} data-aos="fade-up">
        {title}
      </div>
      <div
        className={`${subText2} py-0 py-sm-0 py-md-0 py-lg-0 py-xl-2`}
        data-aos="fade-up"
      >
        {description}
      </div>
      <div className="position-absolute bottom-0 pb-3" data-aos="fade-up">
        {!isCTAExternal ? (
          <Link to={ctaLink}>
            <label className={`${cta1} pe-auto cursorPointer`} role="link">
              {ctaLabel}
              <span className={`${ctaIconPos}`}>
                <img
                  className={`${ctaIcon} ps-2`}
                  src={forwardArrow}
                  alt={ctaLabel}
                />
              </span>
            </label>
          </Link>
        ) : (
          <a href={ctaLink} rel="external" target="_blank">
            <label className={`${cta1} pe-auto cursorPointer`} role="link">
              {ctaLabel}
              <span className={`${ctaIconPos}`}>
                <img
                  className={`${ctaIcon} ps-2`}
                  src={forwardArrow}
                  alt={ctaLabel}
                />
              </span>
            </label>
          </a>
        )}
      </div>
    </div>
  );
};
