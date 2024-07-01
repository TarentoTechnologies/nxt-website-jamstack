import React from "react";

import { carbon } from "../../styles/style-guide/ColorGuide.module.css";
import { h4500 } from "../../styles/style-guide/Typography.module.css";
import {
  cardStyles,
  imgStyles,
  titleStyles,
} from "./DesignProcessCard.module.css";

interface DesignProcessCardProps {
  title: string;
  icon: any;
}

export const DesignProcessCard = ({ title, icon }: DesignProcessCardProps) => {
  return (
    <div
      className={`col-6 col-md-3 ${cardStyles}`}
      data-testid="design-process-card"
    >
      <div className={`${imgStyles}`}>
        <img
          src={icon}
          alt={title}
          title={title}
          className={`img-fluid`}
          data-aos="fade-up"
        />
      </div>
      <h4 className={`${titleStyles} ${h4500} ${carbon}`} data-aos="fade-up">
        {title}
      </h4>
    </div>
  );
};
