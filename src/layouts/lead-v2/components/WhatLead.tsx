import ReactHtmlParser from "react-html-parser";

import { WhatLEADCard } from "../../../components/index";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { leadCardSection } from "../LeadV2.module.css";

interface WhatLeadProps {
  title: string;
  description: any;
  cardList: any[];
}

export const WhatLead = ({ title, description, cardList }: WhatLeadProps) => {

  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <div className={`col-lg-10`}>
            <div className={`mt-3`}>
              <PrimaryTitle title={title} variant="infoSectionH2" />
            </div>
            <p className={`mt-4`} data-aos="fade-up">
              {ReactHtmlParser(description?.data?.childMarkdownRemark?.html)}
            </p>
          </div>
        </div>
        <div className={`${leadCardSection} pt-2`}>
          {cardList?.map((item: any, index: number) => (
            <WhatLEADCard
              key={item?.id}
              img={item?.Image?.localFile}
              title={item?.Title}
              subText={item?.SubText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
