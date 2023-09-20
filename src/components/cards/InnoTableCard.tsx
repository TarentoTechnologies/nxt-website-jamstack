import {
  bgSpectrumBlue,
  bgVividGreen,
  bgRhodaminePurple,
} from "../../styles/style-guide/ColorGuide.module.css";
import { cardStyles, titleStyles } from "./InnoTableCard.module.css";

interface InnoTableCardProps {
  title: string;
  desc: string;
  bgColor: any;
  clickHandler?: (event: any) => void;
}

export const InnoTableCard = ({
  title,
  desc,
  bgColor,
  clickHandler,
}: InnoTableCardProps) => {
  const getBgColor = () => {
    switch (bgColor) {
      case "blue":
        return bgSpectrumBlue;
      case "green":
        return bgVividGreen;
      case "pink":
        return bgRhodaminePurple;
      default:
        return "";
    }
  };
  const bgColour = getBgColor();
  return (
    <div
      className={`col-lg-4 col-md-4 col-sm-12 ${bgColour} ${cardStyles}`}
      onClick={clickHandler}
    >
      <h2 className={`${titleStyles}`}>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
