import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  bgHaysBlue,
  white,
} from "../../../styles/style-guide/ColorGuide.module.css";
import { h3600 } from "../../../styles/style-guide/Typography.module.css";
import { bannerStyles, keyFeatureText } from "../DataPlatform.module.css";

interface KeyInsightsProps {
  sectionTitle: string;
  insightsData: any;
}
export const KeyInsights = ({
  sectionTitle,
  insightsData,
}: KeyInsightsProps) => {
  
  return (
    <div
      className={`${bannerStyles} ${bgHaysBlue} d-flex justify-content-center`}
    >
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3600} ${white} wow animated fadeInUp mt-4 mb-5`}>
          {sectionTitle}
        </h1>
        <div className={`row containerRow`}>
          {insightsData.map((item: any, index: number) => {
            return (
              <>
                <div className={`col-md-4 col-sm-6 col3`}>
                  <GatsbyImage
                    image={
                      getImage(item?.Image?.localFile)
                        ? getImage(item?.Image?.localFile)
                        : item?.Image?.localFile
                    }
                    alt={item?.Image?.alternativeText}
                    title={item?.Image?.caption}
                    className="w-100"
                  />
                  <div className={`${white} ${keyFeatureText}`}>
                    {item.Caption}
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
