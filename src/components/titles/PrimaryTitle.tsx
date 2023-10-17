import {
  h1One,
  infoSectionH2,
  infoSectionH3,
  cardHeader,
  heroTitle,
  acceleratorTitle,
} from "../../styles/style-guide/Typography.module.css";

import { white, black87 } from "../../styles/style-guide/ColorGuide.module.css";

interface PrimaryTitleProps {
  title: string;
  variant?: string;
  color?: string;
}

export const PrimaryTitle = ({ title, variant, color }: PrimaryTitleProps) => {
  return (
    <div
      className={`
        ${variant === "banner" ? h1One : ""}
        ${variant === "heroTitle" ? heroTitle : ""}
        ${variant === "infoSectionH2" ? infoSectionH2 : ""}
        ${variant === "infoSectionH3" ? infoSectionH3 : ""}
        ${variant === "card" ? cardHeader : ""}
        ${variant === "accelerator" ? acceleratorTitle : ""}
        ${color === "white" ? white : black87}`}
    >
      {title}
    </div>
  );
};
