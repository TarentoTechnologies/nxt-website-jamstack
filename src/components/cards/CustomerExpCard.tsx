import React from "react";

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
      <a
        href={link != null ? link : ""}
        target="_blank"
        rel="noreferrer"
        id={id}
        data-testid="customer-exp-card"
      >
        <div className="col-lg-3 col-md-6 col-sm-12 marginBtm1">
          <div className="" data-aos="fade-up">
            <div className={cxCard}>
              <img
                className="centerImg"
                src={logo}
                alt={title}
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="">
            <h4 className={`${h4400} mt-4`} data-aos="fade-up">
              {title}
            </h4>
          </div>
          <div className="mt-4 mb-4">
            <p data-aos="fade-up">{description}</p>
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <div
        className="col-lg-3 col-md-6 col-sm-12 marginBtm1"
        id={id}
        data-testid="customer-exp-card"
      >
        <div className="" data-aos="fade-up">
          <div className={cxCard}>
            <img
              className="centerImg"
              src={logo}
              alt={title}
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="">
          <h4 className={`${h4400} mt-4`} data-aos="fade-up">
            {title}
          </h4>
        </div>
        <div className="mt-4 mb-4">
          <p data-aos="fade-up">{description}</p>
        </div>
      </div>
    );
  }
};
