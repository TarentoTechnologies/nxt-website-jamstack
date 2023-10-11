import { PortfolioCard } from "../../../components";
import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { h1One } from "../../../styles/style-guide/Typography.module.css";
import { productCardLayoutStyles } from "../Home.module.css";
import { Link } from "gatsby";
import { navigate } from "gatsby";

interface AgencyPortfolioProps {
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
}: AgencyPortfolioProps) => {
  const navigateTo = (e: any) => {
    e.preventDefault();
    navigate(ctaLink);
  };

  return (
    <div className={`container-fluid ${productCardLayoutStyles}`}>
      {/* Header */}
      <div className="clearfix">
        <div className="float-start">
          <h1
            className={`${h1One}`}
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="1000"
            data-sal-easing="ease-in-back"
          >
            {title}
          </h1>
        </div>
        <div
          className="float-end d-none d-sm-none d-md-block d-lg-block d-xl-block"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="1000"
          data-sal-easing="ease-in-back"
        >
          <PrimaryCTA label={ctaText} clickHandler={(e) => navigateTo(e)} />
        </div>
      </div>

      {/* Description */}
      <p
        className="col-9"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        data-sal-easing="ease-in-back"
      >
        {description}
      </p>

      {/* Portfolio cards */}
      <div className={`row`}>
        {designPortfolioData?.map((data: any, index: number) => {
          return (
            <div
              className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 p-0 m-0`}
              key={data.id}
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="1000"
              data-sal-easing="ease-in-back"
            >
              <PortfolioCard
                ctaLink={data.ctaLink}
                ctaText={data.ctaText}
                description={data.description}
                tag={data.tag}
                title={data.title}
                imgSrc={data.imgSrc}
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
            data-sal-delay="200"
            data-sal-duration="1000"
            data-sal-easing="ease-in-back"
          >
            <PrimaryCTA label={ctaText} />
          </Link>
        </div>
      </div>
    </div>
  );
};
