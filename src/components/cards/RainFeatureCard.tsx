import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { carbon } from "../../styles/style-guide/ColorGuide.module.css";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  headingStyles,
  imgStyles,
  subTextStyles,
} from "./RainFeatureCard.module.css";

interface RainFeatureCardProps {
  heading: string;
  subText: string;
  img: any;
  isImage: boolean;
}

export const RainFeatureCard = ({
  heading,
  subText,
  img,
  isImage,
}: RainFeatureCardProps) => {
  return (
    <div>
      <div className={`${imgStyles}`}>
        {!isImage ? (
          <GatsbyImage
            image={
              getImage(img?.localFile)
                ? getImage(img?.localFile)
                : img?.localFile
            }
            alt={""}
            data-aos="fade-up"
          />
        ) : (
          <img
            src={img}
            alt={heading}
            title={heading}
            className={`img-fluid`}
            data-aos="fade-up"
          />
        )}
      </div>
      <div
        className={`${headingStyles} ${cardHeader} ${carbon}`}
        data-aos="fade-up"
      >
        {heading}
      </div>
      <p className={`${subTextStyles} ${carbon}`} data-aos="fade-up">
        {subText}
      </p>
    </div>
  );
};
