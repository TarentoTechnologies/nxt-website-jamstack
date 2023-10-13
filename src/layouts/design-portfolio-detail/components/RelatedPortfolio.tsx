import { PortfolioCard } from "../../../components";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { contactUsLayout, titleStyles } from "../../tech/Tech.module.css";

interface RelatedPortfolioProps {
  data: any;
}

export const RelatedPortfolio = ({ data }: RelatedPortfolioProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${contactUsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div
          className={`${titleStyles} col-sm-12 col-md-12 col-lg-12 col-xl-7`}
        >
          <PrimaryTitle title={data?.title} variant="infoSectionH2" />
        </div>
        <div className="row">
          {data?.list.map((listData: any, index: number) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 m-0 mb-4"
                key={listData.id}
              >
                <PortfolioCard
                  ctaLink={listData.ctaLink}
                  ctaText={listData.ctaText}
                  description={listData.description}
                  tag={listData.tag}
                  title={listData.title}
                  imgAlt={listData.imgAlt}
                  imgSrc={listData.imgSrc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
