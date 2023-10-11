import { ProductCard } from "../../../components/cards/ProductCard";
import { productCardLayoutStyles, productCardStyles } from "../Home.module.css";

interface ProductCardLayoutProps {
  data: any[];
}

export const ProductCardLayout = ({ data }: ProductCardLayoutProps) => {
  return (
    <div className={`container-fluid ${productCardLayoutStyles}`}>
      <div className={`row`}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${productCardStyles}`}
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="1000"
            data-sal-easing="ease-in-back"
          >
            <ProductCard
              title={item.title}
              bgImg={item.bgImg}
              logo={item.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
