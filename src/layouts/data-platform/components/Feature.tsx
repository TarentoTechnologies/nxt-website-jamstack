import { acceleratorTitle } from "../../../styles/style-guide/Typography.module.css";
import { bannerStyles } from "../DataPlatform.module.css";

interface FeaturesProps {
  data: {
    title?: string;
    img?: any;
    imgAltText?: string;
    subtext?: string;
    description?: string;
    logosrc?: string;
  };
}

export const Feature = ({ data }: FeaturesProps) => {
  return (
    <div className={`${bannerStyles} d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <h1 className={`${acceleratorTitle} wow animated fadeInUp mt-4 mb-3`}>
          {data.title}
        </h1>
        <div className={`row containerRow`}>
          <div className={`col-md-4  col-sm-6 col3`}>
            <img
              src="https://nxt.tarento.com/img/data-img01.jpg"
              className="w-100"
            />
          </div>
          <div className={`col-md-4 col3`}>
            <img
              src="https://nxt.tarento.com/img/data-img01.jpg"
              className="w-100"
            />
          </div>{" "}
          <div className={`col-md-4 col3`}>
            <img
              src="https://nxt.tarento.com/img/data-img01.jpg"
              className="w-100"
            />
          </div>{" "}
          <div className={`col-md-4 col3`}>
            <img
              src="https://nxt.tarento.com/img/data-img01.jpg"
              className="w-100"
            />
          </div>{" "}
          <div className={`col-md-4 col3`}>
            <img
              src="https://nxt.tarento.com/img/data-img01.jpg"
              className="w-100"
            />
          </div>{" "}
          <div className={`col-md-4 col3`}>
            <img
              src="https://nxt.tarento.com/img/data-img01.jpg"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
