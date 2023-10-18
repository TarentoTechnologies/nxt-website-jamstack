import {
  bgHaysBlue,
  white,
} from "../../../styles/style-guide/ColorGuide.module.css";
import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { bannerStyles, keyFeatureText } from "../DataPlatform.module.css";

interface KeyInsightsProps {
  data: {
    title?: string;
    list: { imgSrc: string; imgCaption: string }[];
  };
}
export const KeyInsights = ({ data }: KeyInsightsProps) => {
  return (
    <div
      className={`${bannerStyles} ${bgHaysBlue} d-flex justify-content-center`}
    >
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3Title} ${white} wow animated fadeInUp mt-4 mb-5`}>
          {data.title}
        </h1>
        <div className={`row containerRow`}>
          {data.list.map((item, index) => {
            return (
              <>
                <div className={`col-md-4 col-sm-6 col3`}>
                  <img
                    src={item.imgSrc}
                    className="w-100"
                    alt={item.imgCaption}
                  />
                  <div className={`${white} ${keyFeatureText}`}>
                    {item.imgCaption}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
