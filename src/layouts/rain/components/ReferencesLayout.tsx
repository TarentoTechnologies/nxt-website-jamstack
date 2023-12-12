import ReactHtmlParser from "react-html-parser";

import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { cardHeader } from "../../../styles/style-guide/Typography.module.css";
import {
  referenceCard,
  referenceCardSection,
  titleStyles,
  parserCustomStyles
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
          {cardsData?.map((item: any, index: number) => (
            <div key={index} className={`${referenceCard} layoutBg mb-5`}>
              <div className={`${cardHeader}`}>{item.Heading}</div>
              <div className={`${parserCustomStyles}`}>
                {ReactHtmlParser(
                  item.Description.data.childMarkdownRemark.html
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
