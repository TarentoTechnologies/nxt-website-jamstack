import ReactHtmlParser from "react-html-parser";

import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { black75 } from "../../../styles/style-guide/ColorGuide.module.css";
import { descriptionOne } from "../../../styles/style-guide/Typography.module.css";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";

interface ResultLayoutProps {
  sectionTitle: string;
  description: any;
}
export const ResultLayout = ({
  sectionTitle,
  description,
}: ResultLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles} px-3 px-sm-3 px-md-0 px-lg-0`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
          <div className="">
            <p
              className={`pt-3 ${black75} ${descriptionOne}`}
              data-aos="fade-up"
            >
              {ReactHtmlParser(description?.data?.childMarkdownRemark?.html)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
