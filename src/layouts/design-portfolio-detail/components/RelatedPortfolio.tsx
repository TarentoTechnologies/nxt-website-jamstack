import { PortfolioCard } from "../../../components";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { contactUsLayout, titleStyles } from "../../tech/Tech.module.css";

interface RelatedPortfolioProps {
  data: any;
  sectionTitle: string;
  portfolioPath: string
}

export const RelatedPortfolio = ({
  data,
  sectionTitle,
  portfolioPath
}: RelatedPortfolioProps) => {

  return (
    <div
      className={`container-fluid d-flex justify-content-center ${contactUsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div
          className={`${titleStyles} col-sm-12 col-md-12 col-lg-12 col-xl-7`}
        >
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
        </div>
        <div className="row">
          {data?.map((listData: any, index: number) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 m-0 mb-4"
                key={listData.id}
                data-aos="fade-up"
              >
                <PortfolioCard
                  title={listData?.Title}
                  ctaLink={`${portfolioPath}${listData?.CTALink}`}
                  ctaText={listData?.CTAText}
                  description={listData?.Description}
                  tag={listData?.Tag}
                  imgSrc={listData?.Image?.localFile}
                  imgAlt={listData?.CTALink}
                  tagVariant={"orange"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
