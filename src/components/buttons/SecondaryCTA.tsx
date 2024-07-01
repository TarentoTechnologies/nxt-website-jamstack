import { Link } from "gatsby";
import React from "react";

import { labelStyles, large, secondaryBtn } from "./SecondaryCTA.module.css";

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
    <Link to={btnLink != null ? btnLink : ""} data-testid="secondary-cta">
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
