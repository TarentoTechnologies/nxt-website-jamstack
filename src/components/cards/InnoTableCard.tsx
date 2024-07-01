import React from "react";

import {
  bgRhodaminePurple,
  bgSpectrumBlue,
  bgVividGreen,
} from "../../styles/style-guide/ColorGuide.module.css";
import { innoTitle } from "../../styles/style-guide/Typography.module.css";
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
      className={`col-md-4 ${bgColour} ${cardStyles}`}
      onClick={clickHandler}
      data-aos="fade-up"
      data-testid="inno-table-card"
    >
      <h2 className={`${titleStyles} ${innoTitle}`} data-aos="fade-up">
        {title}
      </h2>
      <p data-aos="fade-up">{desc}</p>
    </div>
  );
};
