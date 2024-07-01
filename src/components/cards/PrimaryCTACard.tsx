import { Link } from "gatsby";
import React from "react";

import { black75 } from "../../styles/style-guide/ColorGuide.module.css";
import {
  ctaDescription,
  h1One,
} from "../../styles/style-guide/Typography.module.css";
import { PrimaryCTA } from "../buttons/PrimaryCTA";

interface PrimaryCTACardProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  isCTAMail?: boolean;
  isCTAExternal?: boolean;
}

export const PrimaryCTACard = ({
  title,
  description,
  ctaText,
  ctaLink,
  isCTAMail,
  isCTAExternal,
}: PrimaryCTACardProps) => {
  return (
    <div className={`container-fluid`} data-testid="primary-cta-card">
      <div className="">
        <h1 className={`${h1One}`} data-aos="fade-up">
          {title}
        </h1>
        <p
          className={`col-sm-10 col-md-10 col-lg-10 col-xl-6 mt-4 mb-5 ${black75} ${ctaDescription}`}
          data-aos="fade-up"
        >
          {description}
        </p>
        <span data-aos="fade-up">
          <PrimaryCTA
            label={ctaText}
            btnLink={ctaLink}
            isMail={isCTAMail}
            isExternal={isCTAExternal}
          />
        </span>
      </div>
    </div>
  );
};
