import { Link } from "gatsby";

import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  logoStyles,
  proCard,
  proCardSecondary,
  secondaryFontsize,
  titleStyles,
} from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  bgImg?: any;
  logo?: any;
  isSecondary?: boolean;
  secLogo?: any;
  link?: string;
  isLink?: boolean;
}

export const ProductCard = ({
  title,
  bgImg,
  logo,
  secLogo,
  isSecondary,
  link,
  isLink,
}: ProductCardProps) => {
  if (isLink) {
    return (
      <Link to={link != null ? link : ""}>
        <div
          className={`container-fluid ${
            isSecondary ? proCardSecondary : proCard
          }`}
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
            <img
              src={isSecondary ? secLogo : logo}
              alt={title}
              title={title}
              width={80}
            />
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={`container-fluid ${
          isSecondary ? proCardSecondary : proCard
        }`}
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
          <img
            src={isSecondary ? secLogo : logo}
            alt={title}
            title={title}
            width={80}
          />
        </div>
      </div>
    );
  }
};
