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
}

export const BannerWithTag = ({ title, tagsList }: BannerWithTagProps) => {
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
                >
                  <label className={`${tagLabel2} ${white87}`}>
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
                >
                  <label className={`${tagLabel2} ${white87}`}>
                    {data.Label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 overflow-hidden p-0 m-0">
          <img
            src={transparentPNG}
            alt="Test Image"
            className={`img-fluid ${bannerImg} float-end mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4`}
          />
        </div>
      </div>
    </div>
  );
};
