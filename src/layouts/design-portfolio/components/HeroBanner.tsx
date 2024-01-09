import { HeroBannerForTDI } from "../../../components/banners/HeroBannerForTDI";
import { PortfolioHeroBanner } from "../../../components/banners/PortfolioHeroBanner";

interface HeroBannerProps {
  heroBannerData: any;
  isImage?: boolean;
}

export const HeroBanner = ({ heroBannerData, isImage }: HeroBannerProps) => {
  return (
    // <HeroBannerForTDI
    //   title={heroBannerData?.Title}
    //   description={heroBannerData?.Description}
    //   img={
    //     isImage
    //       ? heroBannerData?.Image?.localFile
    //       : heroBannerData?.Image?.localFile?.url
    //   }
    //   isImage={isImage}
    // />
    <PortfolioHeroBanner
      title={heroBannerData?.Title}
      description={heroBannerData?.Desc}
      img={
        isImage
          ? heroBannerData?.Image?.localFile
          : heroBannerData?.Image?.localFile?.url
      }
      isImage={heroBannerData?.isImage}
      isAgencyDetail={heroBannerData?.isAgencyDetail}
      withBreadcrumbs={heroBannerData?.withBreadCrumbs}
      isListingPage={heroBannerData?.isListingPage}
    />
  );
};
