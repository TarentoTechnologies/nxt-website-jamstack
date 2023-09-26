import { KeyFeatureCard } from "../../../components/cards/KeyFeatureCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  techPrinciples,
  titleStyles,
  descStyles,
  subHeadingStyles,
} from "../Tech.module.css";

interface TechPrinciplesLayoutProps {
  data: {
    heading: string;
    desc: string;
    subHeading: string;
    cardData: any[];
  };
}

export const TechPrinciplesLayout = ({ data }: TechPrinciplesLayoutProps) => {
  return (
    <div
      className={`d-flex justify-content-center ${techPrinciples}`}
    >
      <div className={`containerService paddingLeftRight15 mt-5`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
        <p className={`${descStyles}`}>{data?.desc}</p>
        <div className={`${subHeadingStyles}`}>{data?.subHeading}</div>
        <div className={`row m-0`}>
          {data?.cardData.map((item, index) => (
            <KeyFeatureCard
              key={index}
              title={item.title}
              logo={item.logo}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
