import { h3600 } from "../../../styles/style-guide/Typography.module.css";
import { layout } from "../CustomerExperience.module.css";

interface AIsProps {
  title?: string;
  imgSrc?: string;
  imgCaption?: string;
}

export const AI = ({ title, imgCaption, imgSrc }: AIsProps) => {
  return (
    <div className={`${layout} layoutBg d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <div className="row">
          <div className="col-md-12">
            <h1 className={`${h3600} mb-5`} data-aos="fade-up">
              {title}
            </h1>
            <div className="">
              <img
                src={imgSrc}
                alt={imgCaption}
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
