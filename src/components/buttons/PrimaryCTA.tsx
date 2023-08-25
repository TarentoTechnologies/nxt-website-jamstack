import { primaryBtn, secondaryBtn, large } from "./PrimaryCTA.module.css";

interface PrimaryCTAProps {
  label: any;
  primary?: boolean;
  size?: string;
  clickHandler?: (event: any) => void;
  customClasses?: any;
}

export const PrimaryCTA = ({
  label,
  primary = false,
  size,
  clickHandler,
  customClasses,
}: PrimaryCTAProps) => {
  const mode = primary ? `${primaryBtn}` : `${secondaryBtn}`;
  return (
    <div
      className={`text-center d-flex align-items-center justify-content-center 
      ${mode} ${size === "large" ? large : ""} ${customClasses}`}
      onClick={clickHandler}
    >
      <label className={``} style={{ cursor: "pointer" }}>
        {label}
      </label>
    </div>
  );
};
