import {
  bannerStyles,
  retailInfo,
  retailBtn,
  fadeInUp,
  spaceTwo,
  imgSize,
  marginBtm0,
  customH1,
} from "./PyramidBanner.module.css";

interface PyramidBannerProps {
  title: string;
  description: string;
  btnDescr?: string;
  pyramidImg: any;
}

export const PyramidBanner = ({
  title,
  description,
  btnDescr,
  pyramidImg,
}: PyramidBannerProps) => {
  return (
    <div className={`container-fluid ${bannerStyles}`}>
      <div className={`row`}>
        <div className={`col-md-5`}>
          <div className={`wow animated ${fadeInUp}`}>
            <img
              className={`${spaceTwo} ${imgSize}`}
              src={pyramidImg}
              alt="Data pyramid"
              title="Data pyramid"
            />
          </div>
        </div>
        <div className={`col-md-5 order-md-1`}>
          <div className={`wow animated ${fadeInUp} ${retailInfo}`}>
            <h1 className={`${marginBtm0} ${customH1}`}>{title}</h1>
            <p>{description}</p>
            <a
              href="data-platform.html"
              rel="canonical"
              className={`btn btn-primary ${retailBtn}`}
            >
              {btnDescr}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
