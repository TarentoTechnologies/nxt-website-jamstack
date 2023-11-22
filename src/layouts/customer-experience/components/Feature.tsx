import { CustomerExpCard } from "../../../components/cards/CustomerExpCard";
import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { layout } from "../CustomerExperience.module.css";

interface FeaturesProps {
  title?: string;
  list: { title?: string; logo?: any; description?: string }[];
}

export const Feature = ({ title, list }: FeaturesProps) => {
  return (
    <div className={`${layout} d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3Title} mt-4 mb-5`}>{title}</h1>
        <div className={`row`}>
          {list.map((item, index) => {
            return (
              <>
                <CustomerExpCard
                  title={item.title}
                  description={item?.description}
                  logo={item.logo}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
