import {
  bgOxideBlue,
  bgViridianGreen,
  bgSpectrumViolet,
  bgLeitchsBlue,
  bgDarkViridianGreen,
  bgRoslynBlue,
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
  const getHoverBgColor = () => {
    switch (bgColor) {
      case "green":
        return bgDarkViridianGreen;
      case "blue":
        return bgLeitchsBlue;
      case "violet":
        return bgRoslynBlue;
      default:
        return "";
    }
  };
  const bgColour = getHoverBgColor();
  return (
    <div
      className={`container-fluid d-flex col-md-4 col-sm-4 col-xs-12 ${cardStyles} ${bgColour}`}
      onClick={clickHandler}
    >
      <div className={`${imgStyles}`}>
        <img src={logo} alt={title} title={title} className={`img-fluid`} />
      </div>
      <p>{title}</p>
    </div>
  );
};
