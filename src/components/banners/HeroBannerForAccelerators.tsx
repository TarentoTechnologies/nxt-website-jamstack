import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { black50, blue, black } from "../../styles/style-guide/ColorGuide.module.css";
import {
  acceleratorDescription,
  acceleratorSubTitle,
  acceleratorTitle,
  acceleratorTitleV2,
  h3500Lato
} from "../../styles/style-guide/Typography.module.css";
import { bannerStyles } from "./HeroBannerForAccelerators.module.css";

interface HeroBannerForAcceleratorsProps {
  title: string;
  img?: any;
  subText?: string;
  description?: string;
  logosrc?: any;
}

export const HeroBannerForAccelerators = ({
  title,
  img,
  subText,
  description,
  logosrc,
}: HeroBannerForAcceleratorsProps) => {
  
  return (
    <div className={`${bannerStyles} d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <div className="row microHeading justify-content-between align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="header-info">
              <div className="wow fadeIn animated">
                <img
                  src={logosrc?.localFile?.url}
                  width="217"
                  height="71"
                  alt={logosrc?.alternativeText}
                  title={logosrc?.alternativeText}
                />
              </div>
              <h1
                className={`${acceleratorTitleV2} wow animated fadeInUp mt-4 mb-3 ${black}`}
              >
                {title}
              </h1>
              <div
                className={`wow animated fadeInUp titleSubHeading ${blue} ${h3500Lato} mb-4`}
              >
                {subText}
              </div>

              <p
                className={`wow animated fadeInUp ${black50} ${acceleratorDescription}`}
              >
                {description}
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-lg-push-1 col-md-12">
            <div className="retail-img">
              <GatsbyImage
                image={
                  getImage(img?.localFile)
                    ? getImage(img?.localFile)
                    : img?.localFile
                }
                alt={""}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
