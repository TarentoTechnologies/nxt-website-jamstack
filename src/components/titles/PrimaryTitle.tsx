import { carbon, white } from "../../styles/style-guide/ColorGuide.module.css";
import {
  acceleratorTitle,
  cardHeader,
  h1One,
  h1700,
  h3600,
  heroTitle,
  infoSectionH2,
  infoSectionH3,
} from "../../styles/style-guide/Typography.module.css";

interface PrimaryTitleProps {
  title: string;
  variant?: string;
  color?: string;
  customClasses?: any;
}

export const PrimaryTitle = ({
  title,
  variant,
  color,
  customClasses,
}: PrimaryTitleProps) => {
  return (
    <div
      className={`
      ${customClasses}
        ${variant === "banner" ? h1One : ""}
        ${variant === "heroTitle" ? heroTitle : ""}
        ${variant === "infoSectionH2" ? infoSectionH2 : ""}
        ${variant === "infoSectionH3" ? infoSectionH3 : ""}
        ${variant === "card" ? cardHeader : ""}
        ${variant === "accelerator" ? acceleratorTitle : ""}
        ${variant === "h3600" ? h3600 : ""}
        ${variant === "h1700" ? h1700 : ""}
        ${color === "white" ? white : ""}`}
    >
      {title}
    </div>
  );
};
