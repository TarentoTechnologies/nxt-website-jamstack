import { PortfolioCard, SecondaryCTA } from "../../../components";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";

interface AllOtherClientsProps {
  sectionTitle: string;
  data: any;
  ctaBtnText?: any;
  portfolioPath: string;
}

export const AllOtherClients = ({
  sectionTitle,
  data,
  ctaBtnText,
  portfolioPath
}: AllOtherClientsProps) => {

  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
        </div>
        <div className="my-5">
          <div className="row">
            {data?.map((listData: any, index: number) => {
              return (
                <div
                  className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 p-0 m-0 mb-5`}
                  key={listData?.id}
                >
                  <PortfolioCard
                    title={listData?.HeroSection?.Title}
                    ctaLink={`${portfolioPath}${listData?.Slug}`}
                    ctaText={listData?.CTATextForDisplay}
                    description={listData?.HeroSection?.Description}
                    tag={listData?.PortfolioTag}
                    imgSrc={listData?.HeroSection?.Image?.localFile}
                    imgAlt={listData?.Slug}
                    tagVariant={"blue"}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {data?.length > 6 && (
          <div className="my-5">
            <div className="d-flex justify-content-center">
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <SecondaryCTA label={ctaBtnText} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
