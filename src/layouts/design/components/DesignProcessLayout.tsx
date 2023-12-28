import { DesignProcessCard } from "../../../components/cards/DesignProcessCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { carbon } from "../../../styles/style-guide/ColorGuide.module.css";
import {
  cardStyles,
  descStyles,
  designProcess,
  titleStyles,
} from "../Design.module.css";

interface DesignProcessLayoutProps {
  heading: string;
  desc: string;
  cardData: any;
}

export const DesignProcessLayout = ({
  heading,
  desc,
  cardData,
}: DesignProcessLayoutProps) => {
  return (
    <div className={`d-flex justify-content-center ${designProcess}`}>
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle
            title={heading}
            variant="h3600"
            customClasses={`${carbon}`}
          />
        </div>
        <p className={`${descStyles} col-lg-6 ${carbon}`} data-aos="fade-up">
          {desc}
        </p>
        <div className={`row ${cardStyles}`} data-aos="fade-up">
          {cardData.map((item: any, index: number) => (
            <DesignProcessCard
              key={item.id}
              title={item.Title}
              icon={item.Image?.localFile?.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
