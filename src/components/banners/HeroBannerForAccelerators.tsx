import { black50, blue } from "../../styles/style-guide/ColorGuide.module.css";
import {
  acceleratorDescription,
  acceleratorSubTitle,
  acceleratorTitle,
} from "../../styles/style-guide/Typography.module.css";
import { bannerStyles } from "./HeroBannerForAccelerators.module.css";

interface HeroBannerForAcceleratorsProps {
  data: {
    title?: string;
    img?: any;
    imgAltText?: string;
    subText?: string;
    description?: string;
    logosrc?: string;
    withLogo?: boolean;
  };
}

export const HeroBannerForAccelerators = ({
  data,
}: HeroBannerForAcceleratorsProps) => {
  return (
    <div className={`${bannerStyles} d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <div className="row microHeading justify-content-between align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="header-info">
              {data.withLogo && (
                <div className="wow fadeIn animated">
                  <img
                    src={data.logosrc}
                    width="217"
                    height="71"
                    alt={data.imgAltText}
                    title={data.imgAltText}
                  />
                </div>
              )}
              <h1
                className={`${acceleratorTitle} wow animated fadeInUp mt-4 mb-3`}
              >
                {data.title}
              </h1>
              <div
                className={`wow animated fadeInUp titleSubHeading ${blue} ${acceleratorSubTitle} mb-4`}
              >
                {data.subText}
              </div>

              <p
                className={`wow animated fadeInUp ${black50} ${acceleratorDescription}`}
              >
                {data.description}
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-lg-push-1 col-md-12">
            <div className="retail-img">
              <img
                src={data.img}
                alt={data.imgAltText}
                title={data.imgAltText}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
