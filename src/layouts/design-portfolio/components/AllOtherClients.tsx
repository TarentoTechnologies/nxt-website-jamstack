import { PortfolioCard, SecondaryCTA } from "../../../components";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";

interface AllOtherClientsProps {
  data: any;
}

export const AllOtherClients = ({ data }: AllOtherClientsProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
        <div className="my-5">
          <div className="row">
            {data?.list.map((listData: any, index: number) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-6 col-xl-4 p-0 m-0 mb-4 mb-sm-4 mb-md-4 mb-lg-4 mb-xl-4"
                  key={listData?.id}
                >
                  <PortfolioCard
                    title={listData?.title}
                    ctaLink={listData?.ctaLink}
                    ctaText={listData?.ctaText}
                    description={listData?.description}
                    tag={listData?.tag}
                    imgSrc={listData?.imgSrc}
                    imgAlt={listData?.imgAlt}
                    tagVariant={listData?.tagVariant}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {data?.list.length > 6 && (
          <div className="my-5">
            <div className="d-flex justify-content-center">
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <SecondaryCTA label={data?.ctaText} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
