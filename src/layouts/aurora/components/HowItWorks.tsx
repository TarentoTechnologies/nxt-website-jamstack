import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

interface HowItWorksProps {
  heading: string;
  imgSrc: any;
}

export const HowItWorks = ({ heading, imgSrc }: HowItWorksProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`mt-3 mb-2 pt-1`}>
          <PrimaryTitle title={heading} variant="infoSectionH2" />
        </div>
        <div className={`pt-5`}>
          <GatsbyImage
            image={
              getImage(imgSrc?.localFile)
                ? getImage(imgSrc?.localFile)
                : imgSrc.localFile
            }
            alt={imgSrc?.alternativeText}
            title={imgSrc?.caption}
            className={`img-fluid`}
          />
        </div>
      </div>
    </div>
  );
};
