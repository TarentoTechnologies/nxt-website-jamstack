import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { SplitSlider } from "./SplitSlider";

interface GallerySectionProps {
  imageList: any;
  sliderLeftImg: any;
  sliderRightImg: any;
}

export const GallerySection = ({
  imageList,
  sliderLeftImg,
  sliderRightImg,
}: GallerySectionProps) => {
  //   const image: any = getImage(imageList);

  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom80 pb-0`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          {imageList?.slice(0, 2)?.map((listData: any, index: number) => {
            return (
              <div key={index} className={`col-sm-12 col-lg-6 pb-4`}>
                {/* <GatsbyImage
                  image={listData?.Image?.localFile?.url}
                  alt={listData?.alternativeText}
                  className={`img-fluid`}
                  data-aos="fade-up"
                /> */}
                <img
                  src={listData?.Image?.localFile?.url}
                  alt={listData?.alternativeText}
                  className={`img-fluid`}
                />
              </div>
            );
          })}
          <div className="col-12 mt-4 mb-5">
            <SplitSlider leftImg={sliderLeftImg} rightImg={sliderRightImg} />
          </div>
          {imageList?.slice(2, 4)?.map((listData: any, index: number) => {
            return (
              <div key={index} className={`col-sm-12 col-lg-6 pb-4`}>
                {/* <GatsbyImage
                  image={listData?.Image?.localFile?.url}
                  alt={listData?.alternativeText}
                  className={`img-fluid`}
                  data-aos="fade-up"
                /> */}
                <img
                  src={listData?.Image?.localFile?.url}
                  alt={listData?.alternativeText}
                  className={`img-fluid`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
