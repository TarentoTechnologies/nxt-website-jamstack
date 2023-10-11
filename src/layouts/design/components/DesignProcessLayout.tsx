import { DesignProcessCard } from "../../../components/cards/DesignProcessCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  designProcess,
  titleStyles,
  descStyles,
  cardStyles,
} from "../Design.module.css";

interface DesignProcessLayoutProps {
  data: {
    heading: string;
    desc: string;
    cardData: any[];
  };
}

export const DesignProcessLayout = ({ data }: DesignProcessLayoutProps) => {
  return (
    <div className={`d-flex justify-content-center ${designProcess}`}>
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
        <p className={`${descStyles} col-lg-6`}>{data?.desc}</p>
        <div className={`row ${cardStyles}`}>
          {data?.cardData.map((item, index) => (
            <DesignProcessCard
              key={index}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
