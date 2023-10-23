import { ShowcaseCard } from "../../../components";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { techStack, titleStyles } from "../../tech/Tech.module.css";

interface ShowcaseProps {
  sectionTitle: string;
  data: any;
}

export const Showcase = ({ sectionTitle, data }: ShowcaseProps) => {

  return (
    <div className={`d-flex justify-content-center ${techStack}`}>
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
        </div>
        <div className="">
          {data?.map((listData: any, index: number) => {
            return (
              <div className="my-4" key={listData?.id}>
                <ShowcaseCard
                  title={listData?.HeroSection?.Title}
                  description={listData?.HeroSection?.Description}
                  imgSrc={listData?.HeroSection?.Image?.localFile}
                  imgAlt={""}
                  ctaText={listData?.CTATextForDisplay}
                  ctaLink={listData?.Slug}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
