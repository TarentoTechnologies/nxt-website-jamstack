import { bgHaysBlue } from "../../styles/style-guide/ColorGuide.module.css";
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
  const bgColor = isPulse ? pulseBg : bgHaysBlue;

  return (
    <a href={btnLink != null ? (isEmail ? `mailto:${btnLink}` : btnLink) : ""}>
      <div
        className={`text-center d-flex align-items-center justify-content-center 
      ${buttonClass} ${bgColor}`}
        onClick={clickHandler}
      >
        <label>{label}</label>
      </div>
    </a>
  );
};
