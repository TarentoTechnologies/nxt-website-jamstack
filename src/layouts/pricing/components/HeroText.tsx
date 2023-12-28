import { pricingHeroTitle } from "../../../styles/style-guide/Typography.module.css";
import { border, descStyles, heroTextSection } from "../Pricing.module.css";

interface HeroTextProps {
  title: string;
  desc: string;
}

export const HeroText = ({ title, desc }: HeroTextProps) => {
  return (
    <div
      className={`layoutBg container-fluid d-flex justify-content-center ${heroTextSection}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <h1 className={`${pricingHeroTitle}`} data-aos="fade-up">{title}</h1>
        <span className={`${border}`}></span>
        <p className={`${descStyles} col-lg-10`} data-aos="fade-up">{desc}</p>
      </div>
    </div>
  );
};
