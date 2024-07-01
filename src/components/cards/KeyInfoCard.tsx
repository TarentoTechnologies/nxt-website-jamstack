import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ReactHtmlParser from "react-html-parser";

import { black75 } from "../../styles/style-guide/ColorGuide.module.css";
import { PrimaryTitle } from "../titles/PrimaryTitle";

interface KeyInfoCardProps {
  data: any;
}

export const KeyInfoCard = ({ data }: KeyInfoCardProps) => {
  return (
    <div className="container-fluid" data-testid="key-info-card">
      {data.map((listData: any, index: number) => {
        return (
          <div className="px-3 px-sm-3 px-md-0 px-lg-0" key={listData.id}>
            {listData.DescriptionAlignment === "left" ? (
              <div className={`row ${index === 0 ? "" : "my-5"} gx-5`}>
                <div
                  className={`col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ${
                    index === 0 ? "" : "mt-4"
                  }`}
                >
                  <PrimaryTitle
                    title={listData.Title}
                    variant="infoSectionH2"
                  />
                  <div className={`py-2 ${black75}`} data-aos="fade-up">
                    {ReactHtmlParser(
                      listData.Description.data.childMarkdownRemark.html
                    )}
                  </div>
                </div>
                <div
                  className={`col-sm-12 col-md-6 col-lg-6 ${
                    index === 0 ? "" : "mt-4"
                  }`}
                >
                  <GatsbyImage
                    image={
                      getImage(listData.Image.localFile)
                        ? getImage(listData.Image.localFile)
                        : listData.Image.localFile
                    }
                    alt={""}
                    data-aos="fade-up"
                  />
                </div>
              </div>
            ) : (
              <div className={`row ${index === 0 ? "" : "my-5"} gx-5`}>
                <div
                  className={`col-sm-12 col-md-6 col-lg-6 d-none d-md-block ${
                    index === 0 ? "" : "mt-4"
                  }`}
                >
                  <GatsbyImage
                    image={
                      getImage(listData.Image.localFile)
                        ? getImage(listData.Image.localFile)
                        : listData.Image.localFile
                    }
                    alt={""}
                    data-aos="fade-up"
                  />
                </div>
                <div
                  className={`col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ${
                    index === 0 ? "" : "mt-4"
                  }`}
                >
                  <PrimaryTitle
                    title={listData.Title}
                    variant="infoSectionH2"
                  />
                  <div className={`py-2 ${black75}`} data-aos="fade-up">
                    {ReactHtmlParser(
                      listData.Description.data.childMarkdownRemark.html
                    )}
                  </div>
                </div>
                <div
                  className={`col-sm-12 col-md-6 col-lg-6 d-block d-md-none ${
                    index === 0 ? "" : "mt-4"
                  }`}
                >
                  <GatsbyImage
                    image={
                      getImage(listData.Image.localFile)
                        ? getImage(listData.Image.localFile)
                        : listData.Image.localFile
                    }
                    alt={""}
                    data-aos="fade-up"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
