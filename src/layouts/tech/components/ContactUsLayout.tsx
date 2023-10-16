import { contactUsLayout, titleStyles, btnStyles } from "../Tech.module.css";
import { subText1 } from "../../../styles/style-guide/Typography.module.css";
import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

interface ContactUsLayoutProps {
  data: {
    heading: string;
    desc: string;
    CTAlabel?: string;
    CTAlink?: any;
  };
}

export const ContactUsLayout = ({ data }: ContactUsLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${contactUsLayout}`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-lg-6 px-0`}>
          <div className={`${titleStyles}`}>
            <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
          </div>
          <p className={`${subText1}`}>{data?.desc}</p>
          <div className={`${btnStyles}`}>
            <PrimaryCTA
              label={data?.CTAlabel}
              btnLink={data?.CTAlink}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
