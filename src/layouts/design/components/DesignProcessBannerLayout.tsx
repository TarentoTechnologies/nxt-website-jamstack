import { DesignProcessBanner } from "../../../components/banners/DesignProcessBanner";

interface DesignProcessBannerLayoutProps {
  data: any[];
}

export const DesignProcessBannerLayout = ({
  data,
}: DesignProcessBannerLayoutProps) => {
  return (
    <>
      {data?.map((item, index) => (
        <DesignProcessBanner
          key={index}
          heading={item?.heading}
          subHeading={item?.subHeading}
          levelOneDesc={item?.levelOneDesc}
          levelTwoDesc={item?.levelTwoDesc}
          levelThreeDesc={item?.levelThreeDesc}
          img={item?.img}
          bgGray={item?.bgGray}
        />
      ))}
    </>
  );
};
