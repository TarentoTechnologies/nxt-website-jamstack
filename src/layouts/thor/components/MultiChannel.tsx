import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  h1700V2,
  h4500V2,
} from "../../../styles/style-guide/Typography.module.css";
import { multiChannelPadding, topBottomPadding } from "../Thor.module.css";

interface MultiChannelProps {
  title?: string;
  list?: any;
  subText?: string;
  imgSrc?: any;
}

export const MultiChannel = ({
  title,
  list,
  subText,
  imgSrc,
}: MultiChannelProps) => {
  const image: any = getImage(imgSrc?.localFile);

  return (
    <div className={`layout layoutBg ${topBottomPadding}`}>
      <div className="row d-flex">
        <div className="col-lg-6 col-md-12">
          <GatsbyImage
            image={image}
            alt={imgSrc?.alternativeText}
            title={imgSrc?.caption}
            className="w-100"
            data-aos="fade-up"
          />
        </div>
        <div className={`col-lg-6 col-md-12 ${multiChannelPadding}`}>
          <div className="">
            <h1 className={`${h1700V2}`} data-aos="fade-up">
              {title}
            </h1>
            <p className="" data-aos="fade-up">
              {subText}
            </p>
            {list?.map((item: any, index: number) => (
              <div className="mt-5" key={item?.id} data-aos="fade-up">
                <div className={h4500V2} data-aos="fade-up">
                  {item?.Title}
                </div>
                <p className="w-50 mt-2" data-aos="fade-up">
                  {item?.Description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
