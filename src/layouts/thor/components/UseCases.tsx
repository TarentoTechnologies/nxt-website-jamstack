import {
  h1700V2,
  h2400,
  useCasesSubTitle,
} from "../../../styles/style-guide/Typography.module.css";
import { topBottomPadding } from "../Thor.module.css";

interface CaseStudiesProps {
  title?: string;
  list?: any;
  subText?: string;
}

export const UseCases = ({ title, list, subText }: CaseStudiesProps) => {
  return (
    <div className={`layout layoutBg ${topBottomPadding}`}>
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <h1 className={`pb-5 ${h1700V2}`} data-aos="fade-up">
            {title}
          </h1>
          <div className="row layoutDetails d-feature useCases">
            {list?.map((item: any, index: number) => (
              <div
                className={`col-lg-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
                key={item?.id}
                data-aos="fade-up"
              >
                <img
                  src={item?.Image?.localFile?.url}
                  alt={item?.Image?.alternativeText}
                  title={item?.Image?.caption}
                  data-aos="fade-up"
                />
                <div className={`${h2400} ms-4`} data-aos="fade-up">
                  {item?.Caption}
                </div>
              </div>
            ))}
            <div className={`${useCasesSubTitle} mt-3 ms-0`} data-aos="fade-up">
              {subText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
