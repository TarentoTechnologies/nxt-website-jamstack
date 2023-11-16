import { PricingCard } from "../../../components/cards/PricingCard";
import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { infoStyles, pricingCardSection } from "../Pricing.module.css";

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
          className={`${h3Title} wow animated fadeInUp paddingTopBottom60 pt-0`}
        >
          {heading}
        </div>
        <div className={`row`}>
          {pricingData?.map((item: any, index: any) => (
            <PricingCard
              title={item.title}
              logo={item.logo}
              description={item.description}
              baseList={item.baseList}
              basePrice={item.basePrice}
              supportList={item.supportList}
              supportPrice={item.supportPrice}
              supportSubText={item.supportSubText}
              supportText={item.supportText}
              withBtn={item.withBtn}
              CTAlabel={item.CTAlabel}
              CTAlink={item.CTAlink}
              spTitle={item.spTitle}
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
