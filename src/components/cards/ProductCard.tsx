import { cardHeader } from "../../styles/style-guide/Typography.module.css";

import {
  proCard,
  proCardSecondary,
  titleStyles,
  logoStyles,
  secondaryFontsize,
} from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  bgImg?: any;
  logo?: any;
  isSecondary?: boolean;
  secLogo?: any;
}

export const ProductCard = ({
  title,
  bgImg,
  logo,
  secLogo,
  isSecondary,
}: ProductCardProps) => {
  return (
    <div
      className={`container-fluid ${isSecondary ? proCardSecondary : proCard}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className={`${titleStyles} ${cardHeader} ${
          isSecondary ? secondaryFontsize : ""
        }`}
      >
        <span>{title}</span>
      </div>
      <div className={`${logoStyles}`}>
        <img src={isSecondary ? secLogo : logo} alt="product-card-logo" />
      </div>
    </div>
  );
};
