import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  cardStyles,
  headingStyles,
  imgStyles,
  subTextStyles,
} from "./RainFeatureCard.module.css";

interface RainFeatureCardProps {
  heading: string;
  subText: string;
  img: any;
}

export const RainFeatureCard = ({
  heading,
  subText,
  img,
}: RainFeatureCardProps) => {
  return (
    <div className={`${cardStyles}`}>
      <div className={`${imgStyles}`}>
        <img src={img} alt={heading} title={heading} className={`img-fluid`} />
      </div>
      <div className={`${headingStyles} ${cardHeader}`}>{heading}</div>
      <p className={`${subTextStyles}`}>{subText}</p>
    </div>
  );
};
