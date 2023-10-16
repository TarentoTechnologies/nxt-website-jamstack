import { Link } from "gatsby";

import { PortfolioCard } from "../../../components";
import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { bgNeutralGray2 } from "../../../styles/style-guide/ColorGuide.module.css";
import { h1One } from "../../../styles/style-guide/Typography.module.css";
import { productCardLayoutStyles } from "../Home.module.css";
import { paddingTopDown100 } from "../Home.module.css";

interface AgencyPortfolioProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  agencyPortfolioData: any;
}

export const AgencyPortfolio = ({
  title,
  description,
  ctaText,
  ctaLink,
  agencyPortfolioData,
}: AgencyPortfolioProps) => {
  return (
    <div
      className={`container-fluid ${productCardLayoutStyles} ${bgNeutralGray2} ${paddingTopDown100}`}
    >
      {/* Header */}
      <div className="clearfix">
        <div className="float-start">
          <h1
            className={`${h1One}`}
            data-sal="slide-up"
            data-sal-duration="900"
            data-sal-easing="ease-in-back"
          >
            {title}
          </h1>
        </div>
        <div
          className="float-end d-none d-sm-none d-md-block d-lg-block d-xl-block"
          data-sal="slide-up"
          data-sal-duration="900"
          data-sal-easing="ease-in-back"
        >
          <Link to={ctaLink}>
            <PrimaryCTA label={ctaText} />
          </Link>
        </div>
      </div>

      {/* Description */}
      <p
        className="col-9"
        data-sal="slide-up"
        data-sal-duration="900"
        data-sal-easing="ease-in-back"
      >
        {description}
      </p>

      {/* Portfolio cards */}
      <div className={`row`}>
        {agencyPortfolioData?.map((data: any, index: number) => {
          return (
            <div
              className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 p-0 m-0`}
              key={data.id}
              data-sal="slide-up"
              data-sal-duration="900"
              data-sal-easing="ease-in-back"
            >
              <PortfolioCard
                ctaLink={"/" + data.Slug}
                ctaText={data.CTATextForDisplay}
                description={data.HeroSection.Description}
                tag={data.PortfolioTag}
                title={data.HeroSection.Title}
                imgSrc={data.HeroSection.Image.localFile}
                imgAlt={data.imgAlt}
              />
            </div>
          );
        })}
      </div>

      {/* For smaller screen CTA */}
      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <div className="clearfix mt-3">
          <Link
            to={ctaLink}
            className="float-end"
            data-sal="slide-up"
            data-sal-duration="900"
            data-sal-easing="ease-in-back"
          >
            <PrimaryCTA label={ctaText} />
          </Link>
        </div>
      </div>
    </div>
  );
};
