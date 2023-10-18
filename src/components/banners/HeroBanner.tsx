import {
  heroBannerStyles,
  logoHeadStyles,
  logoMainStyles,
  logoSection,
} from "./HeroBanner.module.css";

interface HeroBannerProps {
  data: {
    logoMain: any;
    logoHead: any;
    logoMainTitle?: string;
    logoHeadTitle?: string;
  };
}

export const HeroBanner = ({ data }: HeroBannerProps) => {
  return (
    <div className={`container-fluid ${heroBannerStyles}`}>
      <div className={`${logoSection}`}>
        <div className={`${logoMainStyles}`}>
          <img
            src={data.logoMain}
            alt={data.logoMainTitle}
            title={data.logoMainTitle}
            className="img-fluid"
          />
        </div>
        <div className={`${logoHeadStyles}`}>
          <img
            src={data.logoHead}
            alt={data.logoHeadTitle}
            title={data.logoHeadTitle}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};
