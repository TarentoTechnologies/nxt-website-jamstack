import backwardArrow from "../../../../static/icons/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg";
import forwardArrow from "../../../../static/icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg";
import { PortfolioCarousel } from "../../../components";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { white75 } from "../../../styles/style-guide/ColorGuide.module.css";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";
import { gradientBackground } from "../DesignPortfolioDetail.module.css";

interface HighlightProps {
  highlightTitle: string;
  highlightDescription: string;
  carouselData: any;
}

export const Highlight = ({
  highlightTitle,
  highlightDescription,
  carouselData,
}: HighlightProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout} ${gradientBackground}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className="row">
          <div
            className={`${titleStyles} col-sm-12 col-md-12 col-lg-12 col-xl-7`}
          >
            <PrimaryTitle
              title={highlightTitle}
              variant="infoSectionH2"
              color="white"
            />
            <p className={`pt-3 pb-4 ${white75}`}>{highlightDescription}</p>
          </div>

          {/* Navigations for carousel */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 position-relative">
            <div className="clearfix">
              <div className="float-end position-absolute bottom-0 end-0 me-4">
                <div className="d-flex mb-0 pb-0 mb-sm-0 mb-md-3 mb-lg-3 mb-xl-5 pb-sm-0 pb-md-1 pb-lg-1 pb-xl-3">
                  <img
                    src={backwardArrow}
                    alt="Previous slide"
                    role="button"
                    className="arrow-left-custom"
                  />
                  <img
                    src={forwardArrow}
                    alt="Next slide"
                    role="button"
                    className="arrow-right-custom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <PortfolioCarousel sliderData={carouselData} />
        </div>
      </div>
    </div>
  );
};
