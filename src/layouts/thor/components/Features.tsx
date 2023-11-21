import { topBottomPadding } from "../Thor.module.css";

interface FeaturesProps {
  imgSrc?: string;
  imgCaption?: string;
}

export const Features = ({ imgSrc, imgCaption }: FeaturesProps) => {
  return (
    <div className="layout">
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`row containerService paddingLeftRight15`}>
          <div className={`col-lg-12 ${topBottomPadding}`}>
            <img
              src={imgSrc}
              className="w-100"
              alt={imgCaption}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
