import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import { cxCard } from "./CustomerExpCard.module.css";

interface CustomerExpCardProps {
  title?: string;
  logo?: any;
  isSecondary?: boolean;
  description?: string;
  link?: string;
  isLink?: boolean;
}

export const CustomerExpCard = ({
  title,
  description,
  logo,
  isSecondary,
  link,
  isLink,
}: CustomerExpCardProps) => {
  if (isLink) {
    return (
      <a href={link != null ? link : ""} target="_blank" rel="noreferrer">
        <div className="col-lg-3 col-md-6 col-sm-12 marginBtm1">
        <div className="wow fadeInUp  animated">
          <div className={cxCard}>
            <img className="centerImg" src={logo} alt={title} />
          </div>
        </div>
        <div className="spaceTwo wow fadeInUp  animated">
          <div className={`${cardHeader} mt-4`}>{title}</div>
        </div>
        <div className="mt-4 mb-4">
          <p>{description}</p>
        </div>
        </div>
      </a>
    );
  } else {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 marginBtm1">
        <div className="wow fadeInUp  animated">
          <div className={cxCard}>
            <img className="centerImg" src={logo} alt={title} />
          </div>
        </div>
        <div className="">
          <div className={`${cardHeader} mt-4`}>{title}</div>
        </div>
        <div className="mt-4 mb-4">
          <p>{description}</p>
        </div>
      </div>
    );
  }
};
