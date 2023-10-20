
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  logoStyles,
  proCard,
  proCardSecondary,
  secondaryFontsize,
  titleStyles,
} from "./CustomerExpCard.module.css";

interface CustomerExpCardProps {
  title: string;
  bgImg?: any;
  logo?: any;
  isSecondary?: boolean;
  secLogo?: any;
  link?: string;
  isLink?: boolean;
}

export const CustomerExpCard = ({
  title,
  bgImg,
  logo,
  secLogo,
  isSecondary,
  link,
  isLink,
}: CustomerExpCardProps) => {
  if (isLink) {
    return (
      <a href={link != null ? link : ""} target="_blank" rel="noreferrer">
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
            <img src={isSecondary ? secLogo : logo} alt={title} title={title} />
          </div>
        </div>
      </a>
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
          <img src={isSecondary ? secLogo : logo} alt={title} title={title} />
        </div>
      </div>
    );
  }
};
