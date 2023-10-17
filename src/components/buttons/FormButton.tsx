import { bgHaysBlue } from "../../styles/style-guide/ColorGuide.module.css";
import { buttonClass } from "./FormButton.module.css";
interface FormButtonProps {
  label: any;
  primary?: boolean;
  clickHandler?: (event: any) => void;
  btnLink?: string;
}

export const FormButton = ({
  label,
  primary = false,
  clickHandler,
  btnLink,
}: FormButtonProps) => {
  return (
    <a href={btnLink != null ? btnLink : ""}>
      <div
        className={`text-center d-flex align-items-center justify-content-center 
      ${buttonClass} ${bgHaysBlue}`}
        onClick={clickHandler}
      >
        <label>{label}</label>
      </div>
    </a>
  );
};
