import {
  bgCadiumOrange,
  bgPeacockGreen,
  bgSpectrumViolet,
  bgScarletRed,
  bgCeruleanBlue,
  bgItalianBlue,
} from "../../styles/style-guide/ColorGuide.module.css";
import { cardStyles, imgStyles } from "./KeyFeatureCard.module.css";

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
  return (
    <div
      className={`container-fluid col-sm-12 col-md-4 ${cardStyles} ${bgColour}`}
      onClick={clickHandler}
    >
      <div className={`${imgStyles}`}>
        <img src={logo} alt={title} title={title} className={`img-fluid`} />
      </div>
      <p>{title}</p>
    </div>
  );
};
