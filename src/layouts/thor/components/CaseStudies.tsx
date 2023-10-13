import { caseStudyTitle } from "../../../styles/style-guide/Typography.module.css";
interface CaseStudiesProps {
  data: {
    title?: string;
    list?: { title: string; imgSrc: string; description: string }[];
  };
}

export const CaseStudies = ({ data }: CaseStudiesProps) => {
  return (
    <div className="layout">
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <div className="">
            <h1>{data.title}</h1>
            <div className="row mt-5">
              {data.list?.map((item, index) => (
                <div className="col-md-6 mt-2">
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