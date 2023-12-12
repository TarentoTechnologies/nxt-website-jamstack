import { RainFeatureCard } from "../../../components/cards/RainFeatureCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { carbon } from "../../../styles/style-guide/ColorGuide.module.css";
import { featureGrid, titleStyles } from "../Rain.module.css";

interface FeaturesLayoutProps {
  title: string;
  cardsData: any;
  bgGrey?: boolean;
  isImage: boolean;
}

export const FeaturesLayout = ({
  title,
  cardsData,
  bgGrey,
  isImage
}: FeaturesLayoutProps) => {
  const bgcolor = bgGrey ? "layoutBg" : "";

  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 ${bgcolor}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle
            title={title}
            variant="h3600"
            customClasses={`${carbon}`}
          />
        </div>
        <div className={`${featureGrid}`}>
          {cardsData.map((item: any, index: number) => (
            <RainFeatureCard
              key={item.id}
              heading={item.Heading}
              subText={item.SubText}
              img={item.Img}
              isImage={isImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
