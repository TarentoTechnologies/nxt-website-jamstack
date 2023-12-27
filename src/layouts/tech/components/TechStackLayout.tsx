import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  gridLayout,
  logoStyles,
  techStack,
  titleStyles,
} from "../Tech.module.css";

interface TechStackLayoutProps {
  sectionTitle: string;
  data: any;
}

export const TechStackLayout = ({
  sectionTitle,
  data,
}: TechStackLayoutProps) => {

  return (
    <div className={`d-flex justify-content-center ${techStack}`}>
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
        </div>
        <div className={`${gridLayout}`}>
          {data?.map((item: any, index: number) => (
            <div
              key={index}
              className={`${logoStyles} d-flex justify-content-center align-items-center`}
            >
              {item?.isImage ? (
                <GatsbyImage
                  image={
                    item?.Image?.localFile
                      ? getImage(item?.Image?.localFile)
                      : item?.Image?.localFile
                  }
                  alt={item?.Image?.alternativeText}
                  className={`img-fluid`}
                  data-aos="fade-up"
                />
              ) : (
                <img
                  src={item?.Image?.localFile?.url}
                  alt={item?.Image?.alternativeText}
                  title={item?.Image?.caption}
                  className={`img-fluid`}
                  data-aos="fade-up"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
