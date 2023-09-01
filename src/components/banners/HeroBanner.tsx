import {
  heroBannerStyles,
  logoSection,
  logoMainStyles,
  logoHeadStyles,
} from "./HeroBanner.module.css";

interface HeroBannerProps {
  logoMain: any;
  logoHead: any;
}

export const HeroBanner = ({ logoMain, logoHead }: HeroBannerProps) => {
  return (
    <div className={`container-fluid ${heroBannerStyles}`}>
      <div className={`${logoSection}`}>
        <div className={`${logoMainStyles}`}>
          <img src={logoMain} alt="logoMain" className="img-fluid" />
        </div>
        <div className={`${logoHeadStyles}`}>
          <img src={logoHead} alt="logoHead" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
