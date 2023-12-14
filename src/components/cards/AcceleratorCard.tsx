import { useState } from "react";

import { lightNeutralGray, black } from "../../styles/style-guide/ColorGuide.module.css";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  cardHover,
  cardLogo,
  cardOneImg,
  cardSize,
} from "./AcceleratorCard.module.css";

interface AcceleratorCardProps {
  title: string;
  description: any;
  logoLightSrc: string;
  logoDarkSrc: string;
  bgImg: string;
  id?: any
}

export const AcceleratorCard = ({
  title,
  description,
  logoDarkSrc,
  logoLightSrc,
  bgImg,
  id
}: AcceleratorCardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id={id}
    >
      {hovered ? (
        <div className={`${cardSize} ${cardHover}`}>
          <div>
            <p className={`${cardHeader} ${black}`}>{title}</p>
            <p className={lightNeutralGray}>{description}</p>
            <img
              className={cardLogo}
              src={logoLightSrc}
              alt={title}
              title={title}
            />
          </div>
        </div>
      ) : (
        <div
          className={`${cardSize} ${cardOneImg}`}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <p className={cardHeader}>{title}</p>
          <img
            className={cardLogo}
            src={logoDarkSrc}
            alt={title}
            title={title}
          />
        </div>
      )}
    </div>
  );
};
