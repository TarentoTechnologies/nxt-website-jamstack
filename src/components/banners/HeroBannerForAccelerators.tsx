import { black50, blue } from "../../styles/style-guide/ColorGuide.module.css";
import {
  acceleratorDescription,
  acceleratorTitle,
  acceleratorSubTitle,
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
              <div className="wow fadeIn animated">
                <img
                  src="https://nxt.tarento.com/img/bolt_light.svg"
                  width="217"
                  height="71"
                  alt={data.imgAltText}
                  title={data.imgAltText}
                />
              </div>
              <h1
                className={`${acceleratorTitle} wow animated fadeInUp mt-4 mb-3`}
              >
                {data.title}
              </h1>
              <h3
                className={`wow animated fadeInUp titleSubHeading ${blue} ${acceleratorSubTitle} mb-4`}
              >
                {data.subText}
              </h3>

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
