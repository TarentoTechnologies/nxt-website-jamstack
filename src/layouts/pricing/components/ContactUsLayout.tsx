import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { subText1 } from "../../../styles/style-guide/Typography.module.css";
import {
  btnStyles,
  contactUsLayout,
  levelTwoPadding,
  titleStyles,
} from "../Pricing.module.css";

interface ContactUsLayoutProps {
  heading1: string;
  desc1: string;
  CTAlabel1?: string;
  CTAlink1?: any;
  heading2: string;
  desc2: string;
  CTAlabel2?: string;
  CTAlink2?: any;
}

export const ContactUsLayout = ({
  heading1,
  desc1,
  CTAlabel1,
  CTAlink1,
  heading2,
  desc2,
  CTAlabel2,
  CTAlink2,
}: ContactUsLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${contactUsLayout}`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-lg-6 px-0`}>
          <div className={`${titleStyles}`}>
            <PrimaryTitle title={heading1} variant="infoSectionH2" />
          </div>
          <p className={`${subText1} me-5 pe-5`}>{desc1}</p>
          <div className={`${btnStyles}`}>
            <PrimaryCTA label={CTAlabel1} btnLink={CTAlink1} size="small" />
          </div>
        </div>
        <div className={`col-lg-6 px-0 ${levelTwoPadding}`}>
          <div className={`${titleStyles}`}>
            <PrimaryTitle title={heading2} variant="infoSectionH2" />
          </div>
          <p className={`${subText1} me-5 pe-5`}>{desc2}</p>
          <div className={`${btnStyles}`}>
            <PrimaryCTA label={CTAlabel2} btnLink={CTAlink2} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};
