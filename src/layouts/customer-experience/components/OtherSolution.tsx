import { ProductCard } from "../../../components/cards/ProductCard";
import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { layout, w40 } from "../CustomerExperience.module.css";

interface OtherSolutionProps {
  title?: string;
  description: string;
  list?: {
    title: string;
    logo?: any;
    bgImg?: string;
    link?: string;
    isLink?: string;
  }[];
}
export const OtherSolution = ({
  title,
  description,
  list,
}: OtherSolutionProps) => {
  return (
    <div className={`${layout} layoutBg d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3Title} mt-4 mb-4`}>{title}</h1>
        <p className={w40}>{description}</p>
        <div className={`row mt-5`}>
          {list?.map((item, index) => (
            <div key={index} className={`col-sm-6 col-lg-4 mb-3`}>
              <ProductCard
                bgImg={item.bgImg}
                logo={item.logo}
                isSecondary={false}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
