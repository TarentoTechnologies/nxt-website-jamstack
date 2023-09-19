import {
  primaryBtn,
  secondaryBtn,
  large,
  labelStyles,
} from "./PrimaryCTA.module.css";
import { Link } from "gatsby";

interface PrimaryCTAProps {
  label: any;
  primary?: boolean;
  size?: string;
  clickHandler?: (event: any) => void;
  customClasses?: any;
  btnLink?: string;
}

export const PrimaryCTA = ({
  label,
  primary = false,
  size,
  clickHandler,
  customClasses,
  btnLink,
}: PrimaryCTAProps) => {
  const mode = primary ? `${primaryBtn}` : `${secondaryBtn}`;
  return (
    <a href={btnLink != null ? btnLink : ""}>
      <div
        className={`text-center d-flex align-items-center justify-content-center 
      ${mode} ${size === "large" ? large : ""} ${customClasses}`}
        onClick={clickHandler}
      >
        <label className={`${labelStyles}`}>{label}</label>
      </div>
    </a>
  );
};
