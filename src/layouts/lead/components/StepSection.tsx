import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { cardHeader } from "../../../styles/style-guide/Typography.module.css";
import { cardList, stepCard } from "../Lead.module.css";

interface StepSectionProps {
  title: string;
  description: string;
  imgSrc: any;
  cardHeading: string;
  keyPoints: string[];
  bgGrey?: boolean;
}

export const StepSection = ({
  title,
  description,
  imgSrc,
  cardHeading,
  keyPoints,
  bgGrey,
}: StepSectionProps) => {
  const bgColor = bgGrey ? "layoutBg" : "";
  const cardBg = bgGrey ? "whiteBg" : "layoutBg";

  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 ${bgColor}`}
      data-aos="fade-up"
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`col-lg-6 pt-3 pb-2`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
          <p className={`pt-4`} data-aos="fade-up">
            {description}
          </p>
        </div>
        <div className={`row`}>
          <div className={`col-lg-6`}>
            <img
              src={imgSrc}
              alt={title}
              title={title}
              className={`img-fluid`}
              data-aos="fade-up"
            />
          </div>
          <div className={`col-lg-6`}>
            <div className={`${cardBg} ${stepCard}`}>
              <h4 className={`${cardHeader}`} data-aos="fade-up">
                {cardHeading}
              </h4>
              <div className={`${cardList}`} data-aos="fade-up">
                <ul>
                  {keyPoints.map((item: any, index) => (
                    <li key={index} data-aos="fade-up">
                      {item?.ListItem}
                    </li>
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
