import { RainFeatureCard } from "../../../components/cards/RainFeatureCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { featureGrid, titleStyles } from "../Rain.module.css";

interface FeaturesLayoutProps {
  title: string;
  cardsData: any;
}

export const FeaturesLayout = ({ title, cardsData }: FeaturesLayoutProps) => {

  return (
    <div
      className={`container-fluid layoutBg d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
        </div>
        <div className={`${featureGrid}`}>
          {cardsData.map((item:any, index:number) => (
            <RainFeatureCard
              key={item.id}
              heading={item.Heading}    
              subText={item.SubText}
              img={item.Img}
              isImage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
