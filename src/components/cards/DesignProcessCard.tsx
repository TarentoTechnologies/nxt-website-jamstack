import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  cardStyles,
  imgStyles,
  titleStyles,
} from "./DesignProcessCard.module.css";

interface DesignProcessCardProps {
  title: string;
  icon: any;
}

export const DesignProcessCard = ({ title, icon }: DesignProcessCardProps) => {
  return (
    <div className={`${cardStyles}`}>
      <div className={`col-xs-6 col-sm-3 col-md-3`}>
        <div className={`${imgStyles}`}>
          <img src={icon} alt={title} title={title} className={`img-fluid`} />
        </div>
        <h4 className={`${titleStyles} ${cardHeader}`}>{title}</h4>
      </div>
    </div>
  );
};