import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import { customPosLeft, customPosRight } from "./ImageOverlapCard.module.css";

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
    <div className="">
      <div className="row position-relative">
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
          className={`col-lg-6 ${textPos === "right" ? "order-1" : "order-2"} mb-5 mb-sm-5 mb-md-5 mb-lg-0`}
        >
          <div
            className={`${
              textPos === "right" ? customPosRight : customPosLeft
            } card layoutBg border border-0 p-4`}
          >
            <h4 className="pb-2">{subTitle}</h4>
            {ReactHtmlParser(content?.data?.childMarkdownRemark?.html)}
          </div>
        </div>
      </div>
    </div>
  );
};
