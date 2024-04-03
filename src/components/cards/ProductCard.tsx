import { Link } from "gatsby";

import { bgUraniaBlue } from "../../styles/style-guide/ColorGuide.module.css";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  customBgStyle,
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
  customBgPosition?: boolean;
}

export const ProductCard = ({
  title,
  bgImg,
  logo,
  secLogo,
  isSecondary,
  link,
  isLink,
  customBgPosition,
}: ProductCardProps) => {

  if (isLink) {
    return (
      <Link to={link != null ? link : ""}>
        <div
          className={`container-fluid ${
            isSecondary ? proCardSecondary : proCard
          } ${customBgPosition ? `${bgUraniaBlue} ${customBgStyle}` : ""}`}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div
            className={`${titleStyles} ${cardHeader} ${
              isSecondary ? secondaryFontsize : ""
            }`}
          >
            <span data-aos="fade-up">{title}</span>
          </div>
          {(secLogo || logo) && (
            <div className={`${logoStyles}`}>
              <img
                src={isSecondary ? secLogo : logo}
                alt={title}
                title={title}
                width={120}
                data-aos="fade-up"
              />
            </div>
          )}
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={`container-fluid ${
          isSecondary ? proCardSecondary : proCard
        } ${customBgPosition ? `${bgUraniaBlue} ${customBgStyle}` : ""}`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          className={`${titleStyles} ${cardHeader} ${
            isSecondary ? secondaryFontsize : ""
          }`}
        >
          <span data-aos="fade-up">{title}</span>
        </div>
        {(secLogo || logo) && (
          <div className={`${logoStyles}`}>
            <img
              src={isSecondary ? secLogo : logo}
              alt={title}
              title={title}
              width={80}
              data-aos="fade-up"
            />
          </div>
        )}
      </div>
    );
  }
};
