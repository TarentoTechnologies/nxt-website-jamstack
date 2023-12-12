import { RainFeatureCard } from "../../../components/cards/RainFeatureCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { featureGrid, titleStyles } from "../Rain.module.css";

interface FeaturesLayoutProps {
  title: string;
  cardsData: any[];
  bgGrey?: boolean;
}

export const FeaturesLayout = ({
  title,
  cardsData,
  bgGrey,
}: FeaturesLayoutProps) => {
  const bgcolor = bgGrey ? "layoutBg" : "";

  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 ${bgcolor}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
        </div>
        <div className={`${featureGrid}`}>
          {cardsData.map((item, index) => (
            <RainFeatureCard
              key={index}
              heading={item.heading}
              subText={item.subText}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
