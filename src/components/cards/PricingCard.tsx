import checkIcon from "../../../static/images/green-check.svg";
import { bgWhite } from "../../styles/style-guide/ColorGuide.module.css";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import { PrimaryCTA } from "../buttons/PrimaryCTA";
import {
  basePriceBox,
  levelOneBox,
  levelTwoBox,
  optional,
  pricingBox,
  supportBar,
  tickStyle,
} from "./PricingCard.module.css";

interface PricingCardProps {
  title: string;
  logo: any;
  description: string;
  basePrice?: string;
  supportPrice?: string;
  supportText?: string;
  supportSubText?: string;
  baseList?: string[];
  supportList?: string[];
  withBtn?: boolean;
  CTAlabel: string;
  CTAlink: any;
  spTitle: string;
}

export const PricingCard = ({
  title,
  logo,
  description,
  baseList,
  basePrice,
  supportList,
  supportPrice,
  supportSubText,
  supportText,
  withBtn,
  CTAlabel,
  CTAlink,
  spTitle,
}: PricingCardProps) => {
  if (withBtn) {
    return (
      <div className={`col-sm-12 col-md-6 col-lg-5 col-xl-4`}>
        <div className={`${pricingBox} ${bgWhite} p-4`}>
          <div className={`d-flex align-items-center ps-3 ${levelTwoBox}`}>
            <img src={logo} alt={title} />
            <div className={`${cardHeader} ms-4`}>
              {title}
              <span style={{ color: "#f96a00" }}>{spTitle}</span>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <PrimaryCTA label={CTAlabel} btnLink={CTAlink} size="large" />
          </div>
          {baseList?.map((item: any, index) => (
            <div className="d-flex mt-3 mb-4 ps-3">
              <div className="me-3">
                <img src={checkIcon} className={tickStyle} />
              </div>
              <span>{item?.ListItem}</span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`col-sm-12 col-md-6 col-lg-5 col-xl-4`}>
        <div className={`${pricingBox} ${bgWhite} p-4`}>
          <div className={`${description ? levelOneBox : ""}`}>
            <div
              className={`d-flex align-items-center ps-3 ${
                description ? "" : levelTwoBox
              }`}
            >
              <img src={logo} alt={title} />
              <div className={`${cardHeader} ms-4`}>{title}</div>
            </div>
            <div className="mt-4 mb-3 ps-3">{description}</div>
          </div>
          <div className={basePriceBox}>{basePrice}</div>
          {baseList?.map((item: any, index) => (
            <div className="d-flex mt-3 mb-4 ps-3">
              <div className="me-3">
                <img src={checkIcon} className={tickStyle} />
              </div>
              <span>{item?.ListItem}</span>
            </div>
          ))}
          <div className={supportBar}>
            <p>{supportPrice} </p>
            <span className="floatRight">
              {" "}
              {supportText}
              <span className={optional}>{supportSubText}</span>
            </span>
          </div>
          {supportList?.map((item: any, index) => (
            <div className="d-flex mt-3 mb-4 ps-3">
              <div className="me-3">
                <img src={checkIcon} className={tickStyle} />
              </div>
              <span>{item?.ListItem}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
