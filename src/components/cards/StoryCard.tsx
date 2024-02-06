import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  bgWhite,
  black60,
  black87,
} from "../../styles/style-guide/ColorGuide.module.css";
import { cardTitleV1 } from "../../styles/style-guide/Typography.module.css";
import { customBorderRadius } from "./StoryCard.module.css";

interface StoryCardProps {
  image: any;
  title: string;
  description?: string;
  id?: any;
}

export const StoryCard = ({
  id,
  image,
  title,
  description,
}: StoryCardProps) => {
  const resImage: any = getImage(image);

  return (
    <div
      className={`${bgWhite} card p-4 border border-0 h-100 ${customBorderRadius}`}
      key={id}
    >
      <div className="">
        <center className="pt-1 pb-2">
          <GatsbyImage
            image={resImage}
            alt={image ? image?.alternativeText : ""}
            className={`img-fluid`}
            data-aos="fade-up"
          />
        </center>

        <div className="pt-3">
          <h5 className={`text-center ${cardTitleV1} ${black87} pb-2`}>
            {title}
          </h5>
          <p className={`${black60}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};
