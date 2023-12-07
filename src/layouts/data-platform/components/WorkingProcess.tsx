import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { h3600 } from "../../../styles/style-guide/Typography.module.css";
import { bannerStyles } from "../DataPlatform.module.css";
import {carbon} from "../../../styles/style-guide/ColorGuide.module.css"

interface WorkingProcesssProps {
  sectionTitle: string;
  processImage: any;
  descriptionOne?: string;
  descriptionTwo?: string;
  descriptionThree?: string;
}

export const WorkingProcess = ({
  sectionTitle,
  processImage,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
}: WorkingProcesssProps) => {
  const image: any = getImage(processImage?.localFile);

  return (
    <div className={`${bannerStyles} layoutBg d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <div className="row">
          <div className="col-md-12">
            <h1 className={`${h3600} wow animated fadeInUp ${carbon}`}>
              {sectionTitle}
            </h1>
            <div className="pusleProcess">
              <GatsbyImage
                image={image}
                alt={processImage?.alternativeText}
                title={processImage?.caption}
                className="w-100"
              />
            </div>
          </div>
          <div className="col-md-4">
            <p className={carbon}>{descriptionOne}</p>
          </div>
          <div className="col-md-4">
            <p className={carbon}>{descriptionTwo}</p>
          </div>
          <div className="col-md-4">
            <p className={carbon}>{descriptionThree} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
