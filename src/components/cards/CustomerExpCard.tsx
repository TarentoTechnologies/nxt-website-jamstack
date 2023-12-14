import { h4400 } from "../../styles/style-guide/Typography.module.css";
import { cxCard } from "./CustomerExpCard.module.css";

interface CustomerExpCardProps {
  id: any;
  title?: string;
  logo?: any;
  isSecondary?: boolean;
  description?: string;
  link?: string;
  isLink?: boolean;
}

export const CustomerExpCard = ({
  id,
  title,
  description,
  logo,
  isSecondary,
  link,
  isLink,
}: CustomerExpCardProps) => {
  if (isLink) {
    return (
      <a href={link != null ? link : ""} target="_blank" rel="noreferrer" id={id}>
        <div className="col-lg-3 col-md-6 col-sm-12 marginBtm1">
        <div className="">
          <div className={cxCard}>
            <img className="centerImg" src={logo} alt={title} />
          </div>
        </div>
        <div className="">
          <h4 className={`${h4400} mt-4`}>{title}</h4>
        </div>
        <div className="mt-4 mb-4">
          <p>{description}</p>
        </div>
        </div>
      </a>
    );
  } else {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 marginBtm1" id={id}>
        <div className="">
          <div className={cxCard}>
            <img className="centerImg" src={logo} alt={title} />
          </div>
        </div>
        <div className="">
          <h4 className={`${h4400} mt-4`}>{title}</h4>
        </div>
        <div className="mt-4 mb-4">
          <p>{description}</p>
        </div>
      </div>
    );
  }
};
