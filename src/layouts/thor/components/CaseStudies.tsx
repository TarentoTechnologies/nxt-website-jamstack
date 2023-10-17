import {
  caseStudyTitle,
  h3Title,
} from "../../../styles/style-guide/Typography.module.css";
import { topBottomPadding } from "../Thor.module.css";

interface CaseStudiesProps {
  data: {
    title?: string;
    list?: { title: string; imgSrc: string; description: string }[];
  };
}

export const CaseStudies = ({ data }: CaseStudiesProps) => {
  return (
    <div className={topBottomPadding}>
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <div className="">
            <h1 className={`${h3Title}`}>{data.title}</h1>
            <div className="row mt-5">
              {data.list?.map((item, index) => (
                <div className="col-md-6 mt-2" key={index}>
                  <div className="wow fadeInUp">
                    <center>
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        title={item.title}
                        className="w-100"
                      />
                    </center>
                    <div className={`${caseStudyTitle} mt-4 mb-4`}>
                      {item.title}
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
