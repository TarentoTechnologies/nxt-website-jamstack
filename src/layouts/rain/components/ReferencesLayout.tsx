import ReactHtmlParser from "react-html-parser";

import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { carbon } from "../../../styles/style-guide/ColorGuide.module.css";
import { h4400 } from "../../../styles/style-guide/Typography.module.css";
import {
  parserCustomStyles,
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
          <PrimaryTitle
            title={title}
            variant="h3600"
            customClasses={`${carbon}`}
          />
        </div>
        <div className={`${referenceCardSection}`}>
          {cardsData?.map((item: any, index: number) => (
            <div
              key={index}
              className={`${referenceCard} layoutBg mb-5`}
              data-aos="fade-up"
            >
              <h4 className={`${h4400} ${carbon}`} data-aos="fade-up">
                {item.Heading}
              </h4>
              <div
                className={`${parserCustomStyles} ${carbon}`}
                data-aos="fade-up"
              >
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
