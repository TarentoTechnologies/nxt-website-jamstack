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
              <div className="">
                <img
                  src={logosrc?.localFile?.url}
                  width="217"
                  height="71"
                  alt={logosrc?.alternativeText}
                  title={logosrc?.alternativeText}
                  data-aos="fade-up"
                />
              </div>
              <h1
                className={`${acceleratorTitleV2} mt-4 mb-3 ${black}`}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {title}
              </h1>
              <div
                className={`titleSubHeading ${blue} ${h3500Lato} mb-4`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {subText}
              </div>

              <p
                className={`${black50} ${acceleratorDescription}`}
                data-aos="fade-up"
                data-aos-delay="300"
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
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
