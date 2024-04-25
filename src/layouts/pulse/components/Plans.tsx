import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { planHeading } from "../../../styles/style-guide/Typography.module.css";
import { planDetails, planList } from "../Pulse.module.css";

interface PlansProps {
  heading: string;
  subText: string;
  cardData: any[];
}

export const Plans = ({ heading, subText, cardData }: PlansProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`mb-2`}>
          <PrimaryTitle title={heading} variant="infoSectionH2" />
        </div>
        <p className={`pt-1`} data-aos="fade-up">
          {subText}
        </p>
        <div className={`row`}>
          {cardData.map((item) => (
            <div className={`col-lg-6`} key={item?.id} data-aos="fade-up">
              <div className={`layoutBg ${planDetails}`}>
                <h4
                  className={`${planHeading} text-center mb-3`}
                  data-aos="fade-up"
                >
                  {item?.Title}
                </h4>
                <ul className={`${planList}`}>
                  {item?.KeyPoints?.map((item: any) => (
                    <li key={item?.id} data-aos="fade-up">
                      {item?.ListItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
