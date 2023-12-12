import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { cardHeader } from "../../../styles/style-guide/Typography.module.css";
import { sprintCard } from "../Lead.module.css";

interface LeadSprintsProps {
  title: string;
  cardData: any[];
}

export const LeadSprints = ({ title, cardData }: LeadSprintsProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <PrimaryTitle title={title} variant="infoSectionH2" />
        <div className={`row mt-5`}>
          {cardData.map((item, index) => (
            <div className={`col-lg-6`} key={index}>
              <div className={`layoutBg ${sprintCard}`}>
                <h4 className={`${cardHeader}`}>{item.heading}</h4>
                <p className={`my-4`}>{item.description}</p>
                <div className={`d-flex justify-content-center`}>
                  <img
                    src={item.imgSrc}
                    alt={item.heading}
                    title={item.heading}
                    className={`img-fluid`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
