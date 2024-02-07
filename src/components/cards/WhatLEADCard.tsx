import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  bgNeutralGray2,
  black60,
  black87,
} from "../../styles/style-guide/ColorGuide.module.css";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  leadCard,
  leadCardImg,
  leadCardSubText,
  leadCardTitle,
} from "./WhatLEADCard.module.css";

interface WhatLEADCardProps {
  title: string;
  img: any;
  subText: string;
}

export const WhatLEADCard = ({ img, title, subText }: WhatLEADCardProps) => {
  const image: any = getImage(img);

  return (
    <div className={`${leadCard} ${bgNeutralGray2}`} data-aos="fade-up">
      <div className={`${leadCardImg} pt-3`}>
        <GatsbyImage
          image={image}
          alt={img ? img?.alternativeText : ""}
          className={`img-fluid`}
          data-aos="fade-up"
        />
      </div>
      <h4
        className={`${black87} ${leadCardTitle} ${cardHeader}`}
        data-aos="fade-up"
      >
        {title}
      </h4>
      <p className={`${black60} ${leadCardSubText}`} data-aos="fade-up">
        {subText}
      </p>
    </div>
  );
};
