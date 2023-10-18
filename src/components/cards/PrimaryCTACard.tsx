import { Link } from "gatsby";

import { black75 } from "../../styles/style-guide/ColorGuide.module.css";
import {
  h1One,
  ctaDescription,
} from "../../styles/style-guide/Typography.module.css";
import { PrimaryCTA } from "../buttons/PrimaryCTA";

interface PrimaryCTACardProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
}

export const PrimaryCTACard = ({
  title,
  description,
  ctaText,
  ctaLink,
}: PrimaryCTACardProps) => {
  return (
    <div className={`container-fluid`}>
      <div className="">
        <h1
          className={`${h1One}`}
          data-sal="slide-up"
          data-sal-duration="900"
          data-sal-easing="ease-in-back"
        >
          {title}
        </h1>
        <p className={`col-sm-10 col-md-10 col-lg-10 col-xl-6 mt-4 mb-5 ${black75} ${ctaDescription}`}>
          {description}
        </p>
        <Link to={ctaLink}>
          <PrimaryCTA label={ctaText} />
        </Link>
      </div>
    </div>
  );
};
