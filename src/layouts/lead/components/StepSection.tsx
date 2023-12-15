import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { cardHeader } from "../../../styles/style-guide/Typography.module.css";
import { cardList, stepCard } from "../Lead.module.css";

interface StepSectionProps {
  title: string;
  description: string;
  imgSrc: any;
  cardData: {
    heading: string;
    keyPoints: string[];
  };
  bgGrey?: boolean;
}

export const StepSection = ({
  title,
  description,
  imgSrc,
  cardData,
  bgGrey,
}: StepSectionProps) => {
  const bgColor = bgGrey ? "layoutBg" : "";
  const cardBg = bgGrey ? "whiteBg" : "layoutBg";

  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 ${bgColor}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`col-lg-6 pt-3 pb-2`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
          <p className={`pt-4`}>{description}</p>
        </div>
        <div className={`row`}>
          <div className={`col-lg-6`}>
            <img
              src={imgSrc}
              alt={title}
              title={title}
              className={`img-fluid`}
            />
          </div>
          <div className={`col-lg-6`}>
            <div className={`${cardBg} ${stepCard}`}>
              <h4 className={`${cardHeader}`}>{cardData.heading}</h4>
              <div className={`${cardList}`}>
                <ul>
                  {cardData.keyPoints.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
