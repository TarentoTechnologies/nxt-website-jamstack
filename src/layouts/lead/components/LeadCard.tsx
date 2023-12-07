import {
  bgCadiumYellow,
  bgDarkAnthraceneViolet,
  bgHayBlue,
  bgLightViolet,
  bgRoslynsBlue,
  black60,
  black87,
} from "../../../styles/style-guide/ColorGuide.module.css";
import {
  leadCard,
  leadCardImg,
  leadCardSubText,
  leadCardTitle,
} from "../Lead.module.css";

interface LeadCardProps {
  title: string;
  img: any;
  subText: string;
  bgColor: string;
}

export const LeadCard = ({ title, img, subText, bgColor }: LeadCardProps) => {
  const bgYellow = bgColor === "yellow" ? bgCadiumYellow : "";
  const bgBlue = bgColor === "blue" ? bgHayBlue : "";
  const bgGrey = bgColor === "grey" ? bgDarkAnthraceneViolet : "";
  const bgViolet = bgColor === "violet" ? bgRoslynsBlue : "";
  const bglightViolet = bgColor === "light violet" ? bgLightViolet : "";

  return (
    <div
      className={`${leadCard} ${bgYellow} ${bgBlue} ${bgGrey} ${bgViolet} ${bglightViolet}`}
    >
      <div className={`${leadCardImg} pt-3`}>
        <img src={img} alt={title} title={title} className={`img-fluid`} />
      </div>
      <h4 className={`${black87} ${leadCardTitle}`}>{title}</h4>
      <p className={`${black60} ${leadCardSubText}`}>{subText}</p>
    </div>
  );
};
