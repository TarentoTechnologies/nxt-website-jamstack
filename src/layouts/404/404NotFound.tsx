import { Link } from "gatsby";

import backArrow from "../../../static/icons/arrow_backward.svg";
import astroImg from "../../../static/images/astro-404.svg";
import {
  notFoundSubtext,
  notFoundTitle,
} from "../../styles/style-guide/Typography.module.css";
import { bgStyles, btnStyles, imgStyles } from "./404NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={`${bgStyles}`}>
      <div className={`text-white text-center`}>
        <div className={`position-relative`}>
          <div>
            <span className={`${notFoundTitle}`}>404</span>
          </div>
          <div className={`${imgStyles}`}>
            <img src={astroImg} alt="404 Not Found" />
          </div>
        </div>
        <span className={`${notFoundSubtext}`}>Oops.... Page not found</span>
        <p className="pt-3">
          This page doesn`t exist or was removed! <br></br>
          We suggest you back to home.
        </p>
      </div>
      <Link to="/">
        <div
          className={`${btnStyles} d-flex justify-content-center align-items-center`}
        >
          <div>
            <img src={backArrow} alt="back-arrow" />
          </div>
          <span className={`ps-2`}>Back to home</span>
        </div>
      </Link>
    </div>
  );
};
