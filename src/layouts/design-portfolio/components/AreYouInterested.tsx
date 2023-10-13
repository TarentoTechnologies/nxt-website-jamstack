import {
  btnStyles,
  contactUsLayout,
  titleStyles,
} from "../../tech/Tech.module.css";
import { subText1 } from "../../../styles/style-guide/Typography.module.css";
import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

interface AreYouInterestedProps {
  data: any;
}

export const AreYouInterested = ({ data }: AreYouInterestedProps) => {
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
