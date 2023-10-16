import { bgWhite } from "../../styles/style-guide/ColorGuide.module.css";
import {
  featureCard,
  featureCardImg,
} from "./AcceleratorFeatureCard.module.css";

interface AcceleratorFeatureCardProps {
  title?: string;
  logo?: any;
  bgColor?: any;
  clickHandler?: (event: any) => void;
}

export const AcceleratorFeatureCard = ({
  title,
  logo,
  bgColor,
  clickHandler,
}: AcceleratorFeatureCardProps) => {
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
      <img src={logo} alt={title} className={`mb-3 ${featureCardImg}`} />
      <p>{title}</p>
    </div>
  );
};
