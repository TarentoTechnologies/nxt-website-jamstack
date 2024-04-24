import { useState } from "react";
import React from "react";

import {
  bgDarkViridianGreen,
  bgLeitchsBlue,
  bgOxideBlue,
  bgRoslynBlue,
  bgSpectrumViolet,
  bgViridianGreen,
} from "../../styles/style-guide/ColorGuide.module.css";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import { imgStyles, titleStyles, triCardStyles } from "./TriCard.module.css";

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
      data-testid="tri-card"
    >
      <div className={`${imgStyles}`}>
        <img
          src={logo}
          alt={title}
          title={title}
          data-aos="fade-up"
          data-aos-delay="500"
        />
      </div>
      <div className={`${titleStyles}`} data-aos="fade-up">
        <PrimaryTitle title={title} variant="card" color="white" />
      </div>
    </div>
  );
};
