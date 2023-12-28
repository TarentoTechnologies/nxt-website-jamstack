import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { topBottomPadding } from "../Thor.module.css";

interface FeaturesProps {
  imgSrc: any;
}

export const Features = ({ imgSrc }: FeaturesProps) => {
  const image: any = getImage(imgSrc?.localFile);
  
  return (
    <div className="layout">
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`row containerService paddingLeftRight15`}>
          <div className={`col-lg-12 ${topBottomPadding}`}>
            <GatsbyImage
              image={image}
              alt={imgSrc?.alternativeText}
              title={imgSrc?.caption}
              className="w-100"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
