import {
  h3Title,
  useCasesSubTitle,
} from "../../../styles/style-guide/Typography.module.css";
import { topBottomPadding } from "../Thor.module.css";

interface CaseStudiesProps {
  title?: string;
  list?: { imgSrc: string; imgText: string }[];
  subText?: string;
}

export const UseCases = ({ title, list, subText }: CaseStudiesProps) => {
  return (
    <div className={`layout layoutBg ${topBottomPadding}`}>
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <h1 className={`pb-5 ${h3Title}`}>{title}</h1>
          <div className="row layoutDetails d-feature useCases">
            {list?.map((item, index) => (
              <div
                className={`col-lg-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
                key={index}
              >
                <img
                  src={item.imgSrc}
                  alt={item.imgText}
                  title={item.imgText}
                />
                <div className={useCasesSubTitle}>{item.imgText}</div>
              </div>
            ))}
            <div className={`${useCasesSubTitle} mt-3 ms-0`}>{subText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
