import { black50 } from "../../../styles/style-guide/ColorGuide.module.css";
import {
  acceleratorDescription,
  acceleratorTitleV2,
} from "../../../styles/style-guide/Typography.module.css";
import { pulseHeroBanner } from "../Pulse.module.css";

interface PulseHeroBannerProps {
  title: string;
  description: string;
  img: any;
  imgAltText?: string;
}

export const PulseHeroBanner = ({
  title,
  description,
  img,
  imgAltText,
}: PulseHeroBannerProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${pulseHeroBanner}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <div className={`col-lg-6 d-flex flex-column justify-content-center`}>
            <h1
              className={`${acceleratorTitleV2} text-black wow animated fadeInUp my-4 pt-5`}
            >
              {title}
            </h1>
            <div className={`me-5 pe-5`}>
              <p
                className={`wow animated fadeInUp ${black50} ${acceleratorDescription} pe-5 me-5`}
              >
                {description}
              </p>
            </div>
          </div>
          <div className={`col-lg-6`}>
            <img
              src={img}
              alt={imgAltText}
              title={imgAltText}
              className={`img-fluid`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
