import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { white75 } from "../../../styles/style-guide/ColorGuide.module.css";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";
import { gradientBackground } from "../DesignPortfolioDetail.module.css";

export const Highlight = () => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout} ${gradientBackground}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles} col-sm-12 col-md-12 col-lg-12 col-xl-7`}>
          <PrimaryTitle
            title={`Retail Innovations - Empowered with Information, Insights & Intelligence.`}
            variant="infoSectionH2"
            color="white"
          />
          <p
            className={`pt-3 pb-4 ${white75}`}
          >{`Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand.`}</p>
        </div>
      </div>
    </div>
  );
};
