import React from "react";

import { PrimaryTitle } from "../../../components";
import { DashboardCard } from "../../../components/cards/DashboardCard";
import { bgUraniaBlue } from "../../../styles/style-guide/ColorGuide.module.css";
import { dashboardGrid } from "../Rain.module.css";

interface LiveExpLayoutProps {
  title: string;
  description: string;
  cardList: any;
  isThorPage?: boolean;
}

export const LiveExpLayout = ({
  title,
  description,
  cardList,
  isThorPage = false,
}: LiveExpLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 ${bgUraniaBlue}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <PrimaryTitle title={title} variant="h1700" color="white" />
        <p className="text-white pt-3">{description}</p>
        <div className={`${dashboardGrid} pt-3`}>
          {cardList.map((card: any) => (
            <DashboardCard
              key={card?.id}
              title={card?.Title}
              description={card?.Description}
              imgSrc={card?.Image}
              imgAltText={card?.Image?.alternativeText}
              ctaLabel={card?.CTAText}
              ctaLink={card?.CTALink}
              isCTAExternal={card?.isCTAExternal}
              isThorPage={isThorPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
