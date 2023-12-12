import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { bgWhite, carbon } from "../../styles/style-guide/ColorGuide.module.css";
import {
  featureCard,
  featureCardImg,
} from "./AcceleratorFeatureCard.module.css";

interface AcceleratorFeatureCardProps {
  title?: string;
  logo?: any;
  bgColor?: any;
  isImage: boolean;
  clickHandler?: (event: any) => void;
}

export const AcceleratorFeatureCard = ({
  title,
  logo,
  bgColor,
  isImage,
  clickHandler,
}: AcceleratorFeatureCardProps) => {
  const image: any = getImage(logo);

  const getBgColor = () => {
    switch (bgColor) {
      case "white":
        return bgWhite;
      default:
        return "";
    }
  };
  const bgColour = getBgColor();
  
  return (
    <div className={`${featureCard} ${bgColor}`}>
      {isImage ? (
        <GatsbyImage
          image={image}
          alt={logo?.alternativeText}
          title={logo?.caption}
          className={`mb-3 ${featureCardImg}`}
        />
      ) : (
        <img
          src={logo?.url}
          alt={logo?.alternativeText}
          title={logo?.caption}
          className={`mb-3 ${featureCardImg}`}
        />
      )}

      <p className={`${carbon}`}>{title}</p>
    </div>
  );
};
