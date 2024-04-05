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
              <div className="my-4" key={listData?.id} data-aos="fade-up">
                <ShowcaseCard
                  title={listData?.HeroBanner?.Title}
                  description={listData?.HeroBanner?.Desc}
                  imgSrc={listData?.HeroBanner?.Image?.localFile}
                  imgAlt={listData?.HeroBanner?.Image?.alternativeText}
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
