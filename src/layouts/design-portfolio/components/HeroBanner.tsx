import { HeroBannerForTDI } from "../../../components/banners/HeroBannerForTDI";
import { PortfolioHeroBanner } from "../../../components/banners/PortfolioHeroBanner";

interface HeroBannerProps {
  heroBannerData: any;
  isImg?: boolean;
  aboutSectionData?: any;
}

export const HeroBanner = ({
  heroBannerData,
  isImg,
  aboutSectionData,
}: HeroBannerProps) => {
  return (
    <PortfolioHeroBanner
      title={heroBannerData?.Title}
      description={heroBannerData?.Desc}
      img={heroBannerData?.Image}
      isImage={isImg}
      isAgencyDetail={heroBannerData?.isAgencyDetail}
      isListingPage={heroBannerData?.isListingPage}
      withBreadcrumbs={heroBannerData?.withBreadCrumbs}
      breadCrumbLabel={heroBannerData?.BreadCrumbLabel}
      breadCrumbLink={heroBannerData?.BreadCrumbLink}
      AboutSectionData={aboutSectionData}
    />
  );
};
