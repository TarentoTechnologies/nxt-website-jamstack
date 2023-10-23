import { HeroBannerForTDI } from "../../../components/banners/HeroBannerForTDI";

interface HeroBannerProps {
  heroBannerData: any;
  isImage?: boolean;
}

export const HeroBanner = ({ heroBannerData, isImage }: HeroBannerProps) => {
  return (
    <HeroBannerForTDI
      title={heroBannerData?.Title}
      description={heroBannerData?.Description}
      img={
        isImage
          ? heroBannerData?.Image?.localFile
          : heroBannerData?.Image?.localFile?.url
      }
      isImage={isImage}
    />
  );
};
