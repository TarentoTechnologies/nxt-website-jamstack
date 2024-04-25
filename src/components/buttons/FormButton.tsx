import {
  bgDuskyViolet,
  bgHaysBlue,
} from "../../styles/style-guide/ColorGuide.module.css";
import { buttonClass, pulseBg } from "./FormButton.module.css";

interface FormButtonProps {
  label: any;
  primary?: boolean;
  clickHandler?: (event: any) => void;
  btnLink?: string;
  isEmail: boolean;
  isPulse?: boolean;
}

export const FormButton = ({
  label,
  primary = false,
  clickHandler,
  btnLink,
  isEmail,
  isPulse = false,
}: FormButtonProps) => {
  const bgColor = isPulse ? bgDuskyViolet : bgHaysBlue;

  let link;
  if (btnLink != null) {
    if (isEmail) {
      link = `mailto:${btnLink}`;
    } else {
      link = btnLink;
    }
  } else {
    link = "";
  }

  return (
    <a href={link}>
      <div
        className={`text-center d-flex align-items-center justify-content-center 
      ${buttonClass} ${bgColor} ${isPulse ? pulseBg : ""}`}
        onClick={clickHandler}
        data-aos="fade-up"
      >
        <label data-aos="fade-up">{label}</label>
      </div>
    </a>
  );
};
