import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { bannerStyles } from "../DataPlatform.module.css";
interface WorkingProcesssProps {
  data: {
    title?: string;
    subTitleOne?: string;
    subTitleTwo?: string;
    subTitleThree?: string;
    imgSrc?: string;
    imgCaption?: string;
  };
}

export const WorkingProcess = ({ data }: WorkingProcesssProps) => {
  return (
    <div className={`${bannerStyles} layoutBg d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <div className="row">
          <div className="col-md-12">
            <h1 className={`${h3Title} wow animated fadeInUp`}>
              {data.title}
            </h1>
            <div className="pusleProcess">
              <img src={data.imgSrc} alt={data.imgCaption} className="w-100" />
            </div>
          </div>
          <div className="col-md-4">
            <p>{data.subTitleOne}</p>
          </div>
          <div className="col-md-4">
            <p>{data.subTitleTwo}</p>
          </div>
          <div className="col-md-4">
            <p>{data.subTitleThree} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
