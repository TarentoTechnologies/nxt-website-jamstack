import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { planHeading } from "../../../styles/style-guide/Typography.module.css";
import { planDetails, planList } from "../Pulse.module.css";

interface PlansProps {
  heading: string;
  subText: string;
  levelOnePlan: {
    title: string;
    list: string[];
  };
  levelTwoPlan: {
    title: string;
    list: string[];
  };
}

export const Plans = ({
  heading,
  subText,
  levelOnePlan,
  levelTwoPlan,
}: PlansProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={``}>
          <PrimaryTitle title={heading} variant="infoSectionH2" />
          <p>{subText}</p>
        </div>
        <div className={`row`}>
          <div className={`col-lg-6`}>
            <div className={`layoutBg ${planDetails}`}>
              <h4 className={`${planHeading} text-center mb-3`}>
                {levelOnePlan.title}
              </h4>
              <ul className={`${planList}`}>
                {levelOnePlan.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`col-lg-6`}>
            <div className={`layoutBg ${planDetails}`}>
              <h4 className={`${planHeading} text-center mb-3`}>
                {levelTwoPlan.title}
              </h4>
              <ul className={`${planList}`}>
                {levelTwoPlan.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
