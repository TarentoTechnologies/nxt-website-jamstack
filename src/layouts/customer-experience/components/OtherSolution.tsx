import { ProductCard } from "../../../components/cards/ProductCard";
import { h3600 } from "../../../styles/style-guide/Typography.module.css";
import { layout, w40 } from "../CustomerExperience.module.css";

interface OtherSolutionProps {
  title?: string;
  description: string;
  list?: any;
}
export const OtherSolution = ({
  title,
  description,
  list,
}: OtherSolutionProps) => {
  return (
    <div className={`${layout} layoutBg d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3600} mt-4 mb-4`} data-aos="fade-up">
          {title}
        </h1>
        <p className={w40} data-aos="fade-up">
          {description}
        </p>
        <div className={`row mt-5`}>
          {list?.map((item: any, index: number) => (
            <div
              key={item.id}
              className={`col-sm-6 col-lg-4 mb-3`}
              data-aos="fade-up"
            >
              <ProductCard
                bgImg={item?.BackgroundImage?.localFile?.url}
                logo={item?.Logo?.localFile?.url}
                isSecondary={false}
                title={item?.Title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
