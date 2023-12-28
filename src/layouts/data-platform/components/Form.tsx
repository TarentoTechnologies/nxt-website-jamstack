import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

import { FormButton } from "../../../components/buttons/FormButton";
import {
  black60,
  carbon,
} from "../../../styles/style-guide/ColorGuide.module.css";
import {
  acceleratorSubTitle,
  ctaDescriptionV2,
  h3600,
} from "../../../styles/style-guide/Typography.module.css";
import {
  bannerStyles,
  flexDirection,
  formSubText,
} from "../DataPlatform.module.css";

interface FormsProps {
  id?: any;
  sectionTitle: string;
  description: any;
  ctaLink: string;
  ctaLabel: string;
  scannerImage: any;
  isCTAEmail: boolean;
}

export const Form = ({
  id,
  sectionTitle,
  description,
  ctaLink,
  ctaLabel,
  scannerImage,
  isCTAEmail,
}: FormsProps) => {
  const image: any = getImage(scannerImage?.localFile);

  return (
    <div className={`${bannerStyles} ${flexDirection}`} id={id}>
      <div className="containerService paddingLeftRight15">
        <div className="mt-5 mb-5">
          <div className="row justify-content-between">
            <div className="col-md-7 order-lg-1 order-md-1 order-2">
              <div className="layoutDetails pulseView">
                <div className={`${h3600} ${carbon}`} data-aos="fade-up">
                  {sectionTitle}
                </div>
                <div
                  className={`${formSubText} ${ctaDescriptionV2} ${black60} mt-4 mb-5`}
                  data-aos="fade-up"
                >
                  {ReactHtmlParser(description?.data.childMarkdownRemark.html)}
                </div>
                <FormButton
                  label={ctaLabel}
                  btnLink={ctaLink}
                  isEmail={isCTAEmail}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 order-md-2 order-1 mb-2">
              <div className="scanner">
                <GatsbyImage
                  image={image}
                  alt={scannerImage?.alternativeText}
                  title={scannerImage?.caption}
                  className="w-100"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
