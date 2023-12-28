import { PortfolioCard } from "../../../components";
import { h1One } from "../../../styles/style-guide/Typography.module.css";
import { productCardLayoutStyles } from "../Home.module.css";

interface OurProgrammeProps {
  sectionTitle: string;
  cards: any;
}

export const OurProgramme = ({ sectionTitle, cards }: OurProgrammeProps) => {
  return (
    <div className={`container-fluid ${productCardLayoutStyles}`}>
      {/* Header */}
      <div className="clearfix">
        <div className="float-start">
          <h1
            className={`${h1One}`}
            data-aos="fade-up"
          >
            {sectionTitle}
          </h1>
        </div>
      </div>

      {/* Programme cards */}
      <div className={`row`}>
        {cards?.map((data: any, index: number) => {
          return (
            <div
              className={`col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 m-0 mb-3 mb-sm-3 mb-md-3 mb-lg-3 mb-xl-0`}
              key={data.id}
            >
              <PortfolioCard
                ctaLink={data.CTALink}
                ctaText={data.CTAText}
                description={data.Description}
                title={data.Title}
                imgSrc={data.Image.localFile}
                imgAlt={data.imgAlt}
                isProgramme
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
