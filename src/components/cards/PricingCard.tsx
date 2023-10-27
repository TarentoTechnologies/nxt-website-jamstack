import checkIcon from "../../../static/images/green-check.svg";
import { bgWhite } from "../../styles/style-guide/ColorGuide.module.css";
import { cardHeader } from "../../styles/style-guide/Typography.module.css";
import {
  basePriceBox,
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
}: PricingCardProps) => {
  return (
    <div className={`col-md-4 ${bgWhite} mb-4`}>
      <div className={`${pricingBox} p-4`}>
        <div className={` d-flex align-items-center ps-3`}>
          <img src={logo} alt={title} />
          <div className={`${cardHeader} ms-4`}>{title}</div>
        </div>
        <div className="mt-5 mb-5 ps-3">{description} </div>
        <div className={basePriceBox}>{basePrice}</div>
        {baseList?.map((item, index) => (
          <div className="d-flex mt-3 mb-4 ps-3">
            <div className="me-3">
              <img src={checkIcon} className={tickStyle} />
            </div>
            <span>{item}</span>
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
        {supportList?.map((item, index) => (
          <div className="d-flex mt-3 mb-4 ps-3">
            <div className="me-3">
              <img src={checkIcon} className={tickStyle} />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
