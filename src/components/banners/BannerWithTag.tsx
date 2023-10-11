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
          <div className={`row gy-3 position-absolute ${tagPos}`}>
            {tagsList?.map((data: any, inde: number) => {
              return (
                <div
                  className={`${tag} ${bgBlack} d-flex align-items-center justify-content-center col-sm-12 col-md-3 col-lg-3 col-xl-3 me-3`}
                  key={data.id}
                >
                  <label className={`${tagLabel2} ${white87}`}>
                    {data.value}
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
            className={`img-fluid ${bannerImg} float-end mt-4`}
          />
        </div>
      </div>
    </div>
  );
};
