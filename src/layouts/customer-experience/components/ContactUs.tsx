import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { subText1 } from "../../../styles/style-guide/Typography.module.css";
import {
  btnStyles,
  contactUsLayout,
  titleStyles,
} from "../CustomerExperience.module.css";

interface ContactUsLayoutProps {
  heading: string;
  desc: string;
  CTAlabel?: string;
  CTAlink?: any;
}

export const ContactUs = ({
  heading,
  desc,
  CTAlabel,
  CTAlink,
}: ContactUsLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${contactUsLayout}`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-lg-6 px-0`}>
          <div className={`${titleStyles}`}>
            <PrimaryTitle title={heading} variant="infoSectionH2" />
          </div>
          <p className={`${subText1}`}>{desc}</p>
          <div className={`${btnStyles}`}>
            <PrimaryCTA label={CTAlabel} btnLink={CTAlink} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};
