import {
  secondaryBtn,
  large,
  labelStyles,
} from "./SecondaryCTA.module.css";
import { Link } from "gatsby";

interface SecondaryCTAProps {
  label: any;
  size?: string;
  clickHandler?: (event: any) => void;
  customClasses?: any;
  btnLink?: string;
}

export const SecondaryCTA = ({
  label,
  size,
  clickHandler,
  customClasses,
  btnLink,
}: SecondaryCTAProps) => {
  return (
    <Link to={btnLink != null ? btnLink : ""}>
      <div
        className={`text-center d-flex align-items-center justify-content-center 
        ${size === "large" ? large : ""} ${customClasses} ${secondaryBtn}`}
        onClick={clickHandler}
        data-aos="fade-up"
      >
        <label className={`${labelStyles}`}>{label}</label>
      </div>
    </Link>
  );
};
