import { PortfolioCarousel } from "../../../components/carousels/PortfolioCarousel";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { white75 } from "../../../styles/style-guide/ColorGuide.module.css";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";
import {
  customContainer,
  gradientBackground,
} from "../DesignPortfolioDetail.module.css";

interface HighlightProps {
  title: string;
  desc: string;
  carouselData: any[];
}

export const Highlight = ({ title, desc, carouselData }: HighlightProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-end ${acceleratorsLayout} ${gradientBackground}`}
    >
      <div
        className={`${customContainer} containerService paddingLeftRight15 pe-0`}
      >
        <div
          className={`${titleStyles} col-sm-12 col-md-12 col-lg-12 col-xl-7`}
        >
          <PrimaryTitle title={title} variant="h1700V4" color="white" />
          <p className={`pt-3 pb-4 ${white75}`}>{desc}</p>
        </div>
        <div className="pt-md-5 pt-xl-0">
          <PortfolioCarousel data={carouselData} />
        </div>
      </div>
    </div>
  );
};
