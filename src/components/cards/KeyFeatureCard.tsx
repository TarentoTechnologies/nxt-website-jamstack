import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  bgCadiumOrange,
  bgCeruleanBlue,
  bgItalianBlue,
  bgPeacockGreen,
  bgScarletRed,
  bgSpectrumViolet,
} from "../../styles/style-guide/ColorGuide.module.css";
import { cardStyles, iconSize, imgStyles } from "./KeyFeatureCard.module.css";

interface KeyFeatureCardProps {
  title: string;
  logo: any;
  bgColor: any;
  clickHandler?: (event: any) => void;
}

export const KeyFeatureCard = ({
  title,
  logo,
  bgColor,
  clickHandler,
}: KeyFeatureCardProps) => {
  const getBgColor = () => {
    switch (bgColor) {
      case "green":
        return bgPeacockGreen;
      case "red":
        return bgScarletRed;
      case "orange":
        return bgCadiumOrange;
      case "blue":
        return bgCeruleanBlue;
      case "italianBlue":
        return bgItalianBlue;
      case "violet":
        return bgSpectrumViolet;
      default:
        return "";
    }
  };
  const bgColour = getBgColor();
  const image: any = getImage(logo?.localFile);

  return (
    <div
      className={`container-fluid col-sm-12 col-md-6 col-lg-4 ${cardStyles} ${bgColour}`}
      onClick={clickHandler}
    >
      <div className={`${imgStyles}`}>
        <GatsbyImage
          image={image}
          alt={logo?.alternativeText ? logo?.alternativeText : ""}
          className={`img-fluid ${iconSize}`}
          data-aos="fade-up"
        />
      </div>
      <p data-aos="fade-up">{title}</p>
    </div>
  );
};
