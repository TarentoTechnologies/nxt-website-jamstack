import { useCasesSubTitle } from "../Thor.module.css";

interface CaseStudiesProps {
  data: {
    title?: string;
    list?: { imgSrc: string; imgText: string }[];
    subText?: string;
  };
}

export const UseCases = ({ data }: CaseStudiesProps) => {
  return (
    <div className="layout layoutBg">
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <h1 className="pb-5">{data.title}</h1>
          <div className="row layoutDetails d-feature useCases">
            {data.list?.map((item, index) => (
              <div
                className={`col-lg-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
                key={index}
              >
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src={item.imgSrc}
                    alt={item.imgText}
                    title={item.imgText}
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <div className={useCasesSubTitle}>{item.imgText}</div>
                </div>
              </div>
            ))}
            <div className={`${useCasesSubTitle} mt-3 ms-0`}>
              {data.subText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
