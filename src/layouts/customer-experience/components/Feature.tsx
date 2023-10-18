import { AcceleratorFeatureCard } from "../../../components/cards/AcceleratorFeatureCard";
import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { bannerStyles, flexDirection } from "../CustomerExperience.module.css";
interface FeaturesProps {
  data: {
    title?: string;
    list: { title?: string; logo?: any; bgColor?: string }[];
  };
}

export const Feature = ({ data }: FeaturesProps) => {
  return (
    <div className={`${bannerStyles} ${flexDirection} layoutBg`}>
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3Title} wow animated fadeInUp mt-4 mb-5`}>
          {data.title}
        </h1>
        <div className={`row containerRow`}>
          {data.list.map((item, index) => {
            return (
              <>
                <div className={`col-md-4 col-sm-6 col3`}>
                  <AcceleratorFeatureCard
                    title={item.title}
                    logo={item.logo}
                    bgColor={item.bgColor}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
