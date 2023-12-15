import { DesignProcessBanner } from "../../../components/banners/DesignProcessBanner";

interface DesignProcessBannerLayoutProps {
  data: any[];
}

export const DesignProcessBannerLayout = ({
  data,
}: DesignProcessBannerLayoutProps) => {

  return (
    <>
      {data?.map((item:any, index:number) => (
        <DesignProcessBanner
          key={item?.id}
          heading={item?.Title}
          description={item?.Description}
          descriptionAlignment={item?.DescriptionAlignment}
          image={item?.Image}
          bgGray={index % 2 ? true : false}
        />
      ))}
    </>
  );
};
