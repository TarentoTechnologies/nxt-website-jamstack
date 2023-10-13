import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  black75,
  black87,
} from "../../../styles/style-guide/ColorGuide.module.css";
import { subHeading1 } from "../../../styles/style-guide/Typography.module.css";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";
import {verticalRule} from "../DesignPortfolioDetail.module.css"

interface AboutProps {
  data: any;
}

export const About = ({ data }: AboutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.title} variant="infoSectionH2" />
          <p className={`pt-3 pb-4 ${black75}`}>{data?.description}</p>
          <hr />
          <div className="row my-5">
            <div className={`col-sm-12 col-md-12 col-lg-12 col-xl-3 ${verticalRule}`}>
              <h2 className={`${black87} ${subHeading1}`}>
                {data?.columnOneTitle}
              </h2>
              <p className={`${black75}`}>{data?.columnOneValue}</p>
            </div>
          
            <div className={`col-sm-12 col-md-12 col-lg-12 col-xl-3 ${verticalRule} ps-2 ps-sm-1 ps-md-2 ps-lg-2 ps-xl-4 ms-1 ms-sm-1 ms-md-1 ms-lg-1 ms-xl-0`}>
              <h2 className={`${black87} ${subHeading1}`}>
                {data?.columnTwoTitle}
              </h2>
              <p className={`${black75}`}>{data?.columnTwoValue}</p>
            </div>

            <div className={`col-sm-12 col-md-12 col-lg-12 col-xl-3 ${verticalRule} ps-2 ps-sm-1 ps-md-2 ps-lg-2 ps-xl-4 ms-1 ms-sm-1 ms-md-1 ms-lg-1 ms-xl-0`}>
              <h2 className={`${black87} ${subHeading1}`}>
                {data?.columnThreeTitle}
              </h2>
              <p className={`${black75}`}>{data?.columnThreeValue}</p>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 ps-2 ps-sm-1 ps-md-2 ps-lg-2 ps-xl-4 ms-1 ms-sm-1 ms-md-1 ms-lg-1 ms-xl-0">
              <h2 className={`${black87} ${subHeading1}`}>
                {data?.columnFourTitle}
              </h2>
              <p className={`${black75}`}>{data?.columnFourValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
