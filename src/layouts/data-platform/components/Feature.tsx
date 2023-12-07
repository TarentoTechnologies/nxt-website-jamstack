import { AcceleratorFeatureCard } from "../../../components/cards/AcceleratorFeatureCard";
import { carbon } from "../../../styles/style-guide/ColorGuide.module.css";
import { h3600 } from "../../../styles/style-guide/Typography.module.css";
import { bannerStyles, flexDirection } from "../DataPlatform.module.css";

interface FeaturesProps {
  sectionTitle: string;
  featureCardData: any;
}

export const Feature = ({ sectionTitle, featureCardData }: FeaturesProps) => {
  return (
    <div className={`${bannerStyles} ${flexDirection} layoutBg`}>
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3600} wow animated fadeInUp mt-4 mb-5 ${carbon}`}>
          {sectionTitle}
        </h1>
        <div className={`row containerRow`}>
          {featureCardData.map((item: any, index: number) => {
            return (
              <>
                <div className={`col-md-4 col-sm-6 col3`}>
                  <AcceleratorFeatureCard
                    title={item?.Caption}
                    logo={item?.Image?.localFile}
                    bgColor={"white"}
                    isImage
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
