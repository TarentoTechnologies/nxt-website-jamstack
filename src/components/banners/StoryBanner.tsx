import { PrimaryCTA } from "../buttons/PrimaryCTA";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import {
  bannerStyles,
  titleStyles,
  subTitleStyles,
  imgStyles,
  techSolution,
  subFont,
  whiteBox,
  innovationStory,
  buttonStyles,
} from "./StoryBanner.module.css";

interface StoryBannerProps {
  data: {
    title: string;
    subTitle?: string;
    bgImg?: any;
    image?: any;
    subText: {
      LevelOneHeading?: string;
      LevelTwoHeading?: string;
      LevelOneDesc?: string;
      LevelTwoDesc?: string;
      LevelThreeDesc?: string;
    };
    variant?: string;
    withCTA?: boolean;
    CTAlabel?: string;
    CTAlink?: any;
  };
}

export const StoryBanner = ({ data }: StoryBannerProps) => {
  const col1 = data?.variant === "tech" ? "col-lg-6" : "col-lg-5";
  const col2 = data?.variant === "tech" ? "col-lg-6" : "col-lg-7";

  return (
    <div
      className={`container-fluid ${bannerStyles} d-flex justify-content-center`}
      style={
        data?.variant === "lead"
          ? {
              backgroundImage: `url(${data?.bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {}
      }
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-12 ${titleStyles}`}>
          <PrimaryTitle
            title={data?.title}
            variant="infoSectionH2"
            color="white"
          />
          <h3 className={`${subTitleStyles}`}>{data?.subTitle}</h3>
        </div>
        <div
          className={`${col1} ${imgStyles} d-flex justify-content-center align-items-center`}
        >
          <img
            src={data?.image}
            alt={data?.title}
            title={data?.title}
            className={`img-fluid`}
          />
        </div>
        <div
          className={`${col2}  d-flex justify-content-center align-items-center`}
        >
          <div
            className={`${whiteBox} 
            ${data?.variant === "tech" ? techSolution : ""}
            ${data?.variant === "innovation" ? innovationStory : ""}`}
          >
            <h3>{data?.subText?.LevelOneHeading}</h3>
            <div className={`${subFont}`}>{data?.subText?.LevelTwoHeading}</div>
            <p>{data?.subText?.LevelOneDesc}</p>
            <p>{data?.subText?.LevelTwoDesc}</p>
            <p>{data?.subText?.LevelThreeDesc}</p>
            {data?.withCTA && (
              <div
                className={`${data?.variant === "lead" ? buttonStyles : ""}`}
              >
                <PrimaryCTA
                  label={data?.CTAlabel}
                  btnLink={data?.CTAlink}
                  size="large"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
