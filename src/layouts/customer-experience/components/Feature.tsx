import { CustomerExpCard } from "../../../components/cards/CustomerExpCard";
import { h3600 } from "../../../styles/style-guide/Typography.module.css";
import { layout } from "../CustomerExperience.module.css";

interface FeaturesProps {
  title?: string;
  list: any;
}

export const Feature = ({ title, list }: FeaturesProps) => {
  return (
    <div className={`${layout} d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <h3 className={`${h3600} mt-4 mb-5 col-sm-12 col-md-7 col-lg-7`}>{title}</h3>
        <div className={`row`}>
          {list.map((item: any, index: number) => {
            return (
              <CustomerExpCard
                id={item?.id}
                title={item?.Heading}
                description={item?.SubText}
                logo={item?.Img?.localFile?.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
