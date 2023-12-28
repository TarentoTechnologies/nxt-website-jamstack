import { KeyFeatureCard } from "../../../components/cards/KeyFeatureCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  descStyles,
  subHeadingStyles,
  techPrinciples,
  titleStyles,
} from "../Tech.module.css";

interface TechPrinciplesLayoutProps {
  primaryTitle: string;
  description?: string;
  subTitle?: string;
  principleData: any;
}

export const TechPrinciplesLayout = ({
  primaryTitle,
  description,
  subTitle,
  principleData,
}: TechPrinciplesLayoutProps) => {
  return (
    <div className={`d-flex justify-content-center ${techPrinciples}`}>
      <div className={`containerService paddingLeftRight15 mt-5`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={primaryTitle} variant="infoSectionH2" />
        </div>
        <p className={`${descStyles}`} data-aos="fade-up">
          {description}
        </p>
        <div className={`${subHeadingStyles}`} data-aos="fade-up">
          {subTitle}
        </div>
        <div className={`row m-0`}>
          {principleData?.map((item: any, index: number) => (
            <KeyFeatureCard
              key={item.id}
              title={item.Title}
              logo={item.Image}
              bgColor={item.BackgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
