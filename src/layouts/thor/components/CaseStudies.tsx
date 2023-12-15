import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import {
  caseStudyTitle,
  h1700V2,
} from "../../../styles/style-guide/Typography.module.css";
import { topBottomPadding } from "../Thor.module.css";

interface CaseStudiesProps {
  title?: string;
  list?: any;
}

export const CaseStudies = ({ title, list }: CaseStudiesProps) => {

  return (
    <div className={topBottomPadding}>
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <div className="">
            <h1 className={`${h1700V2}`}>{title}</h1>
            <div className="row mt-5">
              {list?.map((item: any, index: number) => (
                <div className="col-md-6 mt-2" key={index}>
                  <center>
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
                  </center>
                  <div className={`${caseStudyTitle} mt-4 mb-4`}>
                    {item?.Heading}
                  </div>
                  <p>
                    {ReactHtmlParser(
                      item?.Description.data.childMarkdownRemark.html
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
