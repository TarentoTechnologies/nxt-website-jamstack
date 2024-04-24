import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ReactHtmlParser from "react-html-parser";

import {
  black60,
  black87,
} from "../../styles/style-guide/ColorGuide.module.css";
import { infoSectionH3 } from "../../styles/style-guide/Typography.module.css";
import {
  customBorderRadius,
  customPosLeft,
  customPosRight,
} from "./ImageOverlapCard.module.css";

interface ImageOverlapCardProps {
  img: any;
  content: any;
  subTitle: string;
  textPos?: string;
}

export const ImageOverlapCard = ({
  img,
  textPos,
  content,
  subTitle,
}: ImageOverlapCardProps) => {
  const image: any = getImage(img?.localFile);

  return (
    <div className="" data-testid="image-overlap-card">
      <div className="row position-relative my-5">
        <div
          className={`col-lg-6 ${textPos === "right" ? "order-2" : "order-1"}`}
        >
          <GatsbyImage
            image={image}
            alt={img ? img?.alternativeText : ""}
            className={`img-fluid`}
            data-aos="fade-up"
          />
        </div>
        <div
          className={`col-lg-6 ${customBorderRadius} ${
            textPos === "right" ? "order-1" : "order-2"
          } mb-5 mb-sm-5 mb-md-5 mb-lg-0`}
        >
          <div
            className={`${
              textPos === "right" ? customPosRight : customPosLeft
            } card layoutBg border border-0 p-4`}
          >
            <h4 className={`${black87} pb-2 ${infoSectionH3}`}>{subTitle}</h4>
            <p className={`${black60}`}>
              {" "}
              {ReactHtmlParser(content?.data?.childMarkdownRemark?.html)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
