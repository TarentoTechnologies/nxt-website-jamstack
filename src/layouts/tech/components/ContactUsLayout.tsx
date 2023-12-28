import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { subText1 } from "../../../styles/style-guide/Typography.module.css";
import { btnStyles, contactUsLayout, titleStyles } from "../Tech.module.css";

interface ContactUsLayoutProps {
  heading: string;
  desc: string;
  CTAlabel?: string;
  CTAlink?: any;
  isCTAMail?: boolean;
}

export const ContactUsLayout = ({
  heading,
  desc,
  CTAlabel,
  CTAlink,
  isCTAMail,
}: ContactUsLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${contactUsLayout}`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-lg-6 px-0`}>
          <div className={`${titleStyles}`}>
            <PrimaryTitle title={heading} variant="h1700V3" />
          </div>
          <p className={`${subText1}`} data-aos="fade-up">{desc}</p>
          <div className={`${btnStyles}`}>
            <PrimaryCTA
              label={CTAlabel}
              btnLink={CTAlink}
              isMail={isCTAMail}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
