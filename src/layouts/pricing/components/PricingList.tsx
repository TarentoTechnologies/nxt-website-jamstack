import { PricingCard } from "../../../components/cards/PricingCard";

interface PricingListProps {
  heading: string;
  pricingData: any[];
}

export const PricingList = ({ heading, pricingData }: PricingListProps) => {
  console.log(pricingData);
  return (
    <div
      className={`layoutBg container-fluid d-flex justify-content-center ${PricingList}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`}`}>accelerators</div>
        <div className="row">
          {pricingData?.map((item: any, index: any) => (
            <>
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
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
