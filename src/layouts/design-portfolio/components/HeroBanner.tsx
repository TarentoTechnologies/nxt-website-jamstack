import { HeroBannerForTDI } from "../../../components/banners/HeroBannerForTDI";

interface HeroBannerProps {
  heroBannerData: any;
}

export const HeroBanner = ({ heroBannerData }: HeroBannerProps) => {
  return (
    <HeroBannerForTDI
      title={heroBannerData?.Title}
      description={heroBannerData?.Description}
      img={heroBannerData?.Image?.localFile?.url}
    />
  );
};
