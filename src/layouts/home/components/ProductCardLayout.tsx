import { ProductCard } from "../../../components/cards/ProductCard";
import { productCardLayoutStyles, productCardStyles } from "../Home.module.css";

interface ProductCardLayoutProps {
  data: any[];
}

export const ProductCardLayout = ({ data }: ProductCardLayoutProps) => {
  return (
    <div className={`container-fluid ${productCardLayoutStyles}`}>
      <div className={`row`}>
        {data.map((item: any, index: number) => (
          <div
            key={item.id}
            className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${productCardStyles}`}
            data-aos="fade-up"
          >
            <ProductCard
              title={item?.Title}
              bgImg={item?.BackgroundImage?.localFile?.url}
              logo={item?.Logo?.localFile?.url}
              link={item?.Link}
              isLink={item?.Link}
              customBgPosition={item?.customBgPosition}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
