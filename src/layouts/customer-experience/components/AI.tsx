import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { layout } from "../CustomerExperience.module.css";

interface AIsProps {
  data: {
    title?: string;
    subTitleOne?: string;
    subTitleTwo?: string;
    subTitleThree?: string;
    imgSrc?: string;
    imgCaption?: string;
  };
}

export const AI = ({ data }: AIsProps) => {
  return (
    <div className={`${layout} layoutBg d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <div className="row">
          <div className="col-md-12">
            <h1 className={`${h3Title} mb-5`}>{data.title}</h1>
            <div className="">
              <img src={data.imgSrc} alt={data.imgCaption} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
