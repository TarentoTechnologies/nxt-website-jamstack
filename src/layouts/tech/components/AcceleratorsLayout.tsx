import { ProductCard } from "../../../components/cards/ProductCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  acceleratorsLayout,
  cardStyles,
  titleStyles,
} from "../Tech.module.css";

interface AcceleratorsLayoutProps {
  sectionTitle: string;
  cardData: any;
}

export const AcceleratorsLayout = ({
  sectionTitle,
  cardData,
}: AcceleratorsLayoutProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
        </div>
        <div className={`row ${cardStyles}`}>
          {cardData?.map((item: any, index: number) => (
            <div
              key={index}
              className={`col-sm-6 col-lg-3 mb-3`}
              data-aos="fade-up"
            >
              <ProductCard
                title={item?.Title}
                bgImg={item?.BackgroundImage?.localFile?.url}
                secLogo={item?.Logo?.localFile?.url}
                isSecondary={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
