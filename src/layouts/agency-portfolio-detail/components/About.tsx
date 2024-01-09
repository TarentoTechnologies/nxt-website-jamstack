import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  black75,
  black87,
} from "../../../styles/style-guide/ColorGuide.module.css";
import { subHeading1 } from "../../../styles/style-guide/Typography.module.css";
import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";
import { verticalRule } from "../AgencyPortfolioDetail.module.css";

interface AboutProps {
  data: any;
}

export const About = ({ data }: AboutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout} pb-0`}
      key={data.id}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles} px-3 px-sm-3 px-md-0 px-lg-0`}>
          <PrimaryTitle title={data?.Title} variant="infoSectionH2" />
          <p className={`pt-3 pb-4 ${black75}`} data-aos="fade-up">
            {data?.Description?.data?.Description}
          </p>
          <hr />
          <div className="row my-5">
            <div
              className={`col-sm-12 col-md-12 col-lg-12 col-xl-3 ${verticalRule}`}
            >
              <h2 className={`${black87} ${subHeading1}`} data-aos="fade-up">
                {data?.ColumnOneTitle}
              </h2>
              <p className={`${black75}`} data-aos="fade-up">
                {data?.ColumnOneValue}
              </p>
            </div>

            <div
              className={`col-sm-12 col-md-12 col-lg-12 col-xl-3 ${verticalRule} ps-2 ps-sm-1 ps-md-2 ps-lg-2 ps-xl-4 ms-1 ms-sm-1 ms-md-1 ms-lg-1 ms-xl-0`}
            >
              <h2 className={`${black87} ${subHeading1}`} data-aos="fade-up">
                {data?.ColumnTwoTitle}
              </h2>
              <p className={`${black75}`} data-aos="fade-up">
                {data?.ColumnTwoValue}
              </p>
            </div>

            <div
              className={`col-sm-12 col-md-12 col-lg-12 col-xl-3 ${verticalRule} ps-2 ps-sm-1 ps-md-2 ps-lg-2 ps-xl-4 ms-1 ms-sm-1 ms-md-1 ms-lg-1 ms-xl-0`}
            >
              <h2 className={`${black87} ${subHeading1}`} data-aos="fade-up">
                {data?.ColumnThreeTitle}
              </h2>
              <p className={`${black75}`} data-aos="fade-up">
                {data?.ColumnThreeValue}
              </p>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 ps-2 ps-sm-1 ps-md-2 ps-lg-2 ps-xl-4 ms-1 ms-sm-1 ms-md-1 ms-lg-1 ms-xl-0">
              <h2 className={`${black87} ${subHeading1}`} data-aos="fade-up">
                {data?.ColumnFourTitle}
              </h2>
              <p className={`${black75}`} data-aos="fade-up">
                {data?.ColumnFourLink}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
