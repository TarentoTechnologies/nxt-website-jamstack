import { Link } from "gatsby";
import { navigate } from "gatsby";

import { PortfolioCard } from "../../../components";
import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { h1One } from "../../../styles/style-guide/Typography.module.css";
import { productCardLayoutStyles } from "../Home.module.css";

interface DesignPortfolioProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  designPortfolioData: any;
}

export const DesignPortfolio = ({
  title,
  description,
  ctaText,
  ctaLink,
  designPortfolioData,
}: DesignPortfolioProps) => {
  const navigateTo = (e: any) => {
    e.preventDefault();
    navigate(ctaLink);
  };

  return (
    <div className={`container-fluid ${productCardLayoutStyles}`}>
      {/* Header */}
      <div className="clearfix">
        <div className="float-start">
          <h1 className={`${h1One}`} data-aos="fade-up">
            {title}
          </h1>
        </div>
        <div
          className="float-end d-none d-sm-none d-md-block d-lg-block d-xl-block"
          data-aos="fade-up"
        >
          <PrimaryCTA label={ctaText} btnLink={ctaLink} />
        </div>
      </div>

      {/* Description */}
      <p className="col-9" data-aos="fade-up">
        {description}
      </p>

      {/* Portfolio cards */}
      <div className={`row`}>
        {designPortfolioData?.map((data: any, index: number) => {
          return (
            <div
              className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 p-0 m-0 mb-3 mb-sm-3 mb-md-3 mb-lg-3 mb-xl-0`}
              key={data.id}
            >
              <PortfolioCard
                ctaLink={`/design-portfolio/${data.Slug}`}
                ctaText={data.CTATextForDisplay}
                description={data.HeroSection?.Description}
                tag={data.PortfolioTag}
                title={data.HeroSection?.Title}
                imgSrc={data.Logo?.localFile}
                imgAlt={data.imgAlt}
                bgGrey
              />
            </div>
          );
        })}
      </div>

      {/* For smaller screen CTA */}
      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <div className="clearfix mt-3">
          <div className="float-end" data-aos="fade-up">
            <PrimaryCTA label={ctaText} btnLink={ctaLink} />
          </div>
        </div>
      </div>
    </div>
  );
};
