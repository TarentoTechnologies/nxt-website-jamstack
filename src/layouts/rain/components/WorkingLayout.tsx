import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { carbon } from "../../../styles/style-guide/ColorGuide.module.css";
import {
  descStyles,
  imgStyles,
  rainWorkingLayout,
  titleStyles,
} from "../Rain.module.css";

interface WorkingLayoutProps {
  title: string;
  desc: string;
  img: any;
}

export const WorkingLayout = ({ title, desc, img }: WorkingLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle
            title={title}
            variant="h3600"
            customClasses={`${carbon}`}
          />
        </div>
        <div className={`${descStyles}`}>
          <p className={`col-md-7 col-lg-5 ${carbon}`} data-aos="fade-up">
            {desc}
          </p>
        </div>
        <div className={`${imgStyles} d-flex justify-content-center`}>
          <img
            src={img}
            alt={title}
            title={title}
            className={`img-fluid`}
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};
