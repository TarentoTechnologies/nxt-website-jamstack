import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

interface HowItWorksProps {
  heading: string;
  imgSrc: any;
  levelOneText: string;
  levelTwoText: string;
  levelThreeText: string;
}

export const HowItWorks = ({
  heading,
  imgSrc,
  levelOneText,
  levelTwoText,
  levelThreeText,
}: HowItWorksProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center layoutBg paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <div className={`mt-3 mb-2 pt-1`}>
            <PrimaryTitle title={heading} variant="infoSectionH2" />
          </div>
          <div className={`col-12`}>
            <GatsbyImage
              image={getImage(imgSrc) ? getImage(imgSrc) : imgSrc}
              alt={heading}
              title={heading}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className={`col-lg-4`}>
            <p data-aos="fade-up">{levelOneText}</p>
          </div>
          <div className={`col-lg-4`}>
            <p data-aos="fade-up">{levelTwoText}</p>
          </div>
          <div className={`col-lg-4`}>
            <p data-aos="fade-up">{levelThreeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
