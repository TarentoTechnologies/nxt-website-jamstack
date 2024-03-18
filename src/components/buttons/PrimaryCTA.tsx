import { Link } from "gatsby";
import React from "react";

import {
  labelStyles,
  large,
  primaryBtn,
  secondaryBtn,
} from "./PrimaryCTA.module.css";

interface PrimaryCTAProps {
  label: any;
  primary?: boolean;
  size?: string;
  clickHandler?: (event: any) => void;
  customClasses?: any;
  btnLink?: string;
  isMail?: boolean;
}

export const PrimaryCTA = ({
  label,
  primary = false,
  size,
  clickHandler,
  customClasses,
  btnLink,
  isMail,
}: PrimaryCTAProps) => {
  const mode = primary ? `${primaryBtn}` : `${secondaryBtn}`;

  return (
    <>
      {isMail ? (
        <a
          href={
            btnLink != null ? `${isMail ? `mailto:${btnLink};` : btnLink}` : ""
          }
          data-testid="primary-cta"
        >
          <div
            className={`text-center d-flex align-items-center justify-content-center 
      ${mode} ${size === "large" ? large : ""} ${customClasses}`}
            onClick={clickHandler}
            data-aos="fade-up"
          >
            <label className={`${labelStyles}`}>{label}</label>
          </div>
        </a>
      ) : (
        <Link to={btnLink != null ? btnLink : ""} data-testid="primary-cta">
          <div
            className={`text-center d-flex align-items-center justify-content-center 
      ${mode} ${size === "large" ? large : ""} ${customClasses}`}
            onClick={clickHandler}
            data-aos="fade-up"
          >
            <label className={`${labelStyles}`}>{label}</label>
          </div>
        </Link>
      )}
    </>
  );
};
