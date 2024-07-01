import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import {
  bgNeutralGray2,
  black87,
} from "../../styles/style-guide/ColorGuide.module.css";
import { infoSectionH3 } from "../../styles/style-guide/Typography.module.css";
import { customBorderRadius } from "./ArtefactCard.module.css";

interface ArtefactCardProps {
  id?: any;
  image: any;
  title: string;
}

export const ArtefactCard = ({ id, image, title }: ArtefactCardProps) => {
  const resImage: any = getImage(image);

  return (
    <div
      className={`${bgNeutralGray2} card p-4 border border-0 h-100 ${customBorderRadius}`}
      key={id}
      data-testid="artefact-card"
    >
      <div className="">
        <center className="pt-1 pb-2">
          <GatsbyImage
            image={resImage}
            alt={title}
            className={`img-fluid`}
            data-aos="fade-up"
          />
        </center>

        <div className="pt-3">
          <h5 className={`text-center pb-2 ${infoSectionH3} ${black87}`}>
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};
