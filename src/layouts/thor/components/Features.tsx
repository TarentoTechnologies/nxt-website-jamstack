import { topBottomPadding } from "../Thor.module.css";
interface FeaturesProps {
  data: {
    imgSrc?: string;
    imgCaption?: string;
  };
}

export const Features = ({ data }: FeaturesProps) => {
  return (
    <div className="layout">
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`row containerService paddingLeftRight15`}>
          <div className={`col-lg-12 ${topBottomPadding}`}>
            <img
              src={data.imgSrc}
              className="w-100"
              alt={data.imgCaption}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
