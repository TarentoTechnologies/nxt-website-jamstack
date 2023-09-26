import { ProductCard } from "../../../components/cards/ProductCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  titleStyles,
  acceleratorsLayout,
  cardStyles,
} from "../Tech.module.css";

interface AcceleratorsLayoutProps {
  data: {
    heading: string;
    cardData: any[];
  };
}

export const AcceleratorsLayout = ({ data }: AcceleratorsLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
        <div className={`row ${cardStyles}`}>
          {data?.cardData.map((item, index) => (
            <div key={index} className={`col-sm-6 col-lg-3 mb-3`}>
              <ProductCard
                title={item.title}
                bgImg={item.bgImg}
                secLogo={item.logo}
                isSecondary={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
