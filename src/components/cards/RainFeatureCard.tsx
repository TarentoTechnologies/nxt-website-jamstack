import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  cardStyles,
  headingStyles,
  imgStyles,
  subTextStyles,
} from "./RainFeatureCard.module.css";
import {carbon} from "../../styles/style-guide/ColorGuide.module.css"

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
    <div className={`${cardStyles}`}>
      <div className={`${imgStyles}`}>
        {!isImage ? (
          <GatsbyImage
            image={
              getImage(img?.localFile)
                ? getImage(img?.localFile)
                : img?.localFile
            }
            alt={""}
          />
        ) : (
          <img
            src={img}
            alt={heading}
            title={heading}
            className={`img-fluid`}
          />
        )}
      </div>
      <div className={`${headingStyles} ${cardHeader} ${carbon}`}>{heading}</div>
      <p className={`${subTextStyles} ${carbon}`}>{subText}</p>
    </div>
  );
};
