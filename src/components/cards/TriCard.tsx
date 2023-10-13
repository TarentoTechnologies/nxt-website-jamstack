import {
  bgOxideBlue,
  bgViridianGreen,
  bgSpectrumViolet,
  bgLeitchsBlue,
  bgDarkViridianGreen,
  bgRoslynBlue,
} from "../../styles/style-guide/ColorGuide.module.css";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import { triCardStyles, imgStyles, titleStyles } from "./TriCard.module.css";
import { useState } from "react";

interface TriCardProps {
  title: string;
  logo: any;
  bgColor: any;
  clickHandler?: (event: any) => void;
}

export const TriCard = ({
  title,
  logo,
  bgColor,
  clickHandler,
}: TriCardProps) => {
  const bgBlue = bgColor === "blue" ? bgOxideBlue : "";
  const bgGreen = bgColor === "green" ? bgViridianGreen : "";
  const bgViolet = bgColor === "violet" ? bgSpectrumViolet : "";

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getHoverBgColor = () => {
    switch (bgColor) {
      case "blue":
        return bgLeitchsBlue;
      case "green":
        return bgDarkViridianGreen;
      case "violet":
        return bgRoslynBlue;
      default:
        return "";
    }
  };

  const hoverBgColor = hovered ? getHoverBgColor() : "";

  return (
    <div
      className={`container-fluid ${triCardStyles} ${bgBlue} ${bgGreen} ${bgViolet} ${hoverBgColor}`}
      onClick={clickHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${imgStyles}`}
        data-sal="slide-up"
        data-sal-duration="900"
        data-sal-easing="ease-in-back"
      >
        <img src={logo} alt={title} title={title} />
      </div>
      <div
        className={`${titleStyles}`}
        data-sal="slide-up"
        data-sal-duration="900"
        data-sal-easing="ease-in-back"
      >
        <PrimaryTitle title={title} variant="card" color="white" />
      </div>
    </div>
  );
};
