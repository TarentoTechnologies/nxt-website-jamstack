import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import { FormButton } from "../../../components/buttons/FormButton";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { contactSectionPadding, subTextStyles } from "../Pulse.module.css";

interface GetInTouchProps {
  heading: string;
  subText: any;
  btnLabel: string;
  btnLink: any;
  imgSrc: any;
}

export const GetInTouch = ({
  heading,
  subText,
  btnLabel,
  btnLink,
  imgSrc,
}: GetInTouchProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${contactSectionPadding}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <div className={`col-lg-3 order-lg-2`}>
            <div className={`d-flex justify-content-center`}>
              <GatsbyImage
                image={
                  getImage(imgSrc?.localFile)
                    ? getImage(imgSrc?.localFile)
                    : imgSrc?.localFile
                }
                alt={imgSrc?.alternativeText}
                title={imgSrc?.caption}
                className={`img-fluid`}
              />
            </div>
          </div>
          <div className={`col-lg-9 order-lg-1`}>
            <div className={`pt-3`}>
              <PrimaryTitle title={heading} variant="infoSectionH2" />
            </div>
            <div className={`${subTextStyles}`}>
              {ReactHtmlParser(subText.data?.childMarkdownRemark?.html)}
            </div>
            <FormButton label={btnLabel} btnLink={btnLink} isEmail isPulse />
          </div>
        </div>
      </div>
    </div>
  );
};
