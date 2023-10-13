import { techStack, titleStyles } from "../../tech/Tech.module.css";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { ShowcaseCard } from "../../../components";

interface ShowcaseProps {
  data: any;
}

export const Showcase = ({ data }: ShowcaseProps) => {
  return (
    <div className={`d-flex justify-content-center ${techStack}`}>
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
        <div className="">
          {data?.list.map((listData: any, index: number) => {
            return (
              <div className="my-4" key={listData?.id}>
              <ShowcaseCard
                title={listData?.title}
                description={listData?.description}
                imgSrc={listData?.imgSrc}
                imgAlt={listData?.imgAlt}
                ctaText={listData?.
                  ctaText}
                ctaLink={listData?.ctaLink}
              />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
