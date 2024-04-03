import { GatsbyImage, getImage } from "gatsby-plugin-image";

import transparentPNG from "../../../static/images/pngimg.com - laptop_PNG101775.png";
import {
  bgBlack,
  bgPallidBlueViolet2,
  white87,
} from "../../styles/style-guide/ColorGuide.module.css";
import { tagLabel2 } from "../../styles/style-guide/Typography.module.css";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import {
  bannerImg,
  bannerWithTag,
  tag,
  tagPos,
} from "./BannerWithTag.module.css";

interface BannerWithTagProps {
  title: string;
  tagsList: any;
  img: any;
  imgAlt?: string;
}

export const BannerWithTag = ({
  title,
  tagsList,
  img,
  imgAlt,
}: BannerWithTagProps) => {
  const image: any = getImage(img);

  return (
    <div
      className={`container-fluid ${bgPallidBlueViolet2} ${bannerWithTag} h-100 position-relative`}
    >
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 p-5">
          <PrimaryTitle title={title} variant="infoSectionH2" />
          {/* For larger screens */}
          <div
            className={`row gy-3 position-absolute ${tagPos} d-none d-sm-none d-md-flex`}
          >
            {tagsList?.map((data: any, inde: number) => {
              return (
                <div
                  className={`${tag} ${bgBlack} d-flex align-items-center justify-content-center col-sm-12 col-md-3 col-lg-3 col-xl-3 me-3`}
                  key={data.id}
                  data-aos="fade-up"
                >
                  <label
                    className={`${tagLabel2} ${white87}`}
                    data-aos="fade-up"
                  >
                    {data.Label}
                  </label>
                </div>
              );
            })}
          </div>

          {/* For smaller screens */}
          <div className={`row gy-3 ${tagPos} d-flex d-sm-flex d-md-none mt-5`}>
            {tagsList?.map((data: any, index: number) => {
              return (
                <div
                  className={`${tag} ${bgBlack} d-flex align-items-center justify-content-center  col-sm-3 col-md-3 col-lg-3 col-xl-3 me-3`}
                  key={data.id}
                  data-aos="fade-up"
                >
                  <label
                    className={`${tagLabel2} ${white87}`}
                    data-aos="fade-up"
                  >
                    {data.Label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 overflow-hidden p-0 m-0">
          {/* <img
            src={img}
            alt="Test Image"
            className={`img-fluid ${bannerImg} float-end mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4`}
            data-aos="fade-up"
          /> */}
          <GatsbyImage
            image={image}
            alt={imgAlt ? imgAlt : ""}
            className={`img-fluid ${bannerImg} float-end mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4`}
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};
