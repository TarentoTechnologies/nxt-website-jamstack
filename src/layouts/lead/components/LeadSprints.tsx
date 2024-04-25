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
          {cardData.map((item) => (
            <div className={`col-lg-6`} key={item?.id} data-aos="fade-up">
              <div className={`layoutBg ${sprintCard}`}>
                <h4 className={`${cardHeader}`} data-aos="fade-up">
                  {item?.Heading}
                </h4>
                <p className={`my-4`} data-aos="fade-up">
                  {item?.Description?.data?.Description}
                </p>
                <div className={`d-flex justify-content-center`}>
                  <img
                    src={item?.ImgSrc?.localFile?.url}
                    alt={item?.Heading}
                    title={item?.Heading}
                    className={`img-fluid`}
                    data-aos="fade-up"
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
