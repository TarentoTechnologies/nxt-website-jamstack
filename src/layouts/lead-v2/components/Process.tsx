import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import { PrimaryTitle } from "../../../components";
import { processCard, verticalAlignment } from "../LeadV2.module.css";

interface ProcessProps {
  sectionTitle: string;
  sectionContent: any;
  sectionImage: any;
  descriptionPos?: string;
}

export const Process = ({
  sectionTitle,
  sectionContent,
  sectionImage,
  descriptionPos,
}: ProcessProps) => {
  const image: any = getImage(sectionImage?.localFile);

  console.log(descriptionPos);

  return (
    <div className="container-fluid d-flex justify-content-center paddingTopBottom60 layoutBg">
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <div
            className={`col-lg-6 position-relative ${
              descriptionPos === "left" ? "order-1" : "order-2"
            } `}
          >
            <div className={`${verticalAlignment}`}>
              <div className={`mt-3`}>
                <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
              </div>
              <p className={`mt-4 ${processCard}`} data-aos="fade-up">
                {ReactHtmlParser(
                  sectionContent?.data?.childMarkdownRemark?.html
                )}
              </p>
            </div>
          </div>
          <div
            className={`col-lg-6 ${
              descriptionPos === "left" ? "order-2" : "order-1"
            }`}
          >
            <center>
              <GatsbyImage
                image={image}
                alt={sectionImage ? sectionImage?.alternativeText : ""}
                className={`img-fluid mt-4 mt-sm-4 mt-md-4 mt-lg-0`}
                data-aos="fade-up"
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
