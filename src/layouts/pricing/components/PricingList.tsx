import { PricingCard } from "../../../components/cards/PricingCard";
import { pricingHeading } from "../../../styles/style-guide/Typography.module.css";
import { infoStyles } from "../Pricing.module.css";

interface PricingListProps {
  heading: string;
  pricingData: any[];
  additionalInfo?: string;
}

export const PricingList = ({
  heading,
  pricingData,
  additionalInfo,
}: PricingListProps) => {
  return (
    <div
      className={`layoutBg container-fluid d-flex justify-content-center paddingTopBottom60 pt-0`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div
          className={`${pricingHeading} wow animated fadeInUp paddingTopBottom60 pt-0`}
        >
          {heading}
        </div>
        <div className={`row`}>
          {pricingData?.map((item: any, index: any) => (
            <PricingCard
              title={item?.Title}
              logo={item?.Logo?.localFile?.url}
              description={item?.Description}
              baseList={item?.BaseList}
              basePrice={item?.BasePrice}
              supportList={item?.SupportList}
              supportPrice={item?.SupportPrice}
              supportSubText={item?.SupportSubtext}
              supportText={item?.SupportText}
              withBtn={item?.withBtn}
              CTAlabel={item?.Tag?.Label}
              CTAlink={item?.Tag?.Link}
              spTitle={item?.SpTitle}
            />
          ))}
        </div>
        {additionalInfo !== "" && (
          <div className={`${infoStyles} col-lg-6`}>{additionalInfo}</div>
        )}
      </div>
    </div>
  );
};
