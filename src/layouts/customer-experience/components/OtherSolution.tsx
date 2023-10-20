import { ProductCard } from "../../../components/cards/ProductCard";
import {
  bgHaysBlue,
  white,
} from "../../../styles/style-guide/ColorGuide.module.css";
import { h3Title } from "../../../styles/style-guide/Typography.module.css";
import { layout, w40 } from "../CustomerExperience.module.css";

interface OtherSolutionProps {
  data: any;
}
export const OtherSolution = ({ data }: OtherSolutionProps) => {
  return (
    <div className={`${layout} d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <h1 className={`${h3Title} mt-4 mb-4`}>{data.title}</h1>
        <p className={w40}>{data.description}</p>
        <div className={`row containerRow mt-5`}>
          {data.list?.map((item: any, index: any) => {
            return (
              <>
                <div className={`col-md-4 col-sm-6 col3`}>
                  <ProductCard
                    title={item.title}
                    bgImg={item.bgImg}
                    logo={item.logo}
                    link={item.link}
                    isLink={item.isLink}
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
