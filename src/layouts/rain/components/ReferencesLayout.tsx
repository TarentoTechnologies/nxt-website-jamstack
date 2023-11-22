import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { cardHeader } from "../../../styles/style-guide/Typography.module.css";
import {
  referenceCard,
  referenceCardSection,
  titleStyles,
} from "../Rain.module.css";

interface ReferencesLayoutProps {
  title: string;
  cardsData: any[];
}

export const ReferencesLayout = ({
  title,
  cardsData,
}: ReferencesLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 pt-0`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles} paddingTopBottom60`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
        </div>
        <div className={`${referenceCardSection}`}>
          {cardsData.map((item, index) => (
            <div key={index} className={`${referenceCard} layoutBg mb-5`}>
              <div className={`pb-3 ${cardHeader}`}>{item.heading}</div>
              <p className={`pb-3`}>{item.p1}</p>
              <p className={`pb-3`}>{item.p2}</p>
              <p className={`pb-3`}>{item.p3}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
