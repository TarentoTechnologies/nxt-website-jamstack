import { HeroBannerForTDI } from "../../../components/banners/HeroBannerForTDI";

interface HeroBannerProps {
  heroBannerData: any;
}

export const HeroBanner = ({ heroBannerData }: HeroBannerProps) => {
  return <HeroBannerForTDI data={heroBannerData} />;
};
