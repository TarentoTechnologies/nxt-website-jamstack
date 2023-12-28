import { useState } from "react";

import {
  black,
  lightNeutralGray,
} from "../../styles/style-guide/ColorGuide.module.css";
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
  id?: any;
}

export const AcceleratorCard = ({
  title,
  description,
  logoDarkSrc,
  logoLightSrc,
  bgImg,
  id,
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
        <div className={`${cardSize} ${cardHover}`} data-aos="fade-up">
          <div>
            <p className={`${cardHeader} ${black}`} data-aos="fade-up">
              {title}
            </p>
            <p className={lightNeutralGray} data-aos="fade-up">
              {description}
            </p>
            <img
              className={cardLogo}
              src={logoLightSrc}
              alt={title}
              title={title}
              data-aos="fade-up"
            />
          </div>
        </div>
      ) : (
        <div
          className={`${cardSize} ${cardOneImg}`}
          style={{ backgroundImage: `url(${bgImg})` }}
          data-aos="fade-up"
        >
          <p className={cardHeader} data-aos="fade-up">
            {title}
          </p>
          <img
            className={cardLogo}
            src={logoDarkSrc}
            alt={title}
            title={title}
            data-aos="fade-up"
          />
        </div>
      )}
    </div>
  );
};
