import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { leadCardSection } from "../Lead.module.css";
import { LeadCard } from "./LeadCard";

interface HeroSectionProps {
  title: string;
  description: string;
  cardList: any[];
}

export const HeroSection = ({
  title,
  description,
  cardList,
}: HeroSectionProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <div className={`col-lg-6`}>
            <div className={`mt-3`}>
              <PrimaryTitle title={title} variant="infoSectionH2" />
            </div>
            <p className={`mt-4`}>{description}</p>
          </div>
        </div>
        <div className={`${leadCardSection} pt-2`}>
          {cardList.map((item, index) => (
            <LeadCard
              key={index}
              title={item?.Title}
              img={item?.Img?.localFile?.url}
              subText={item?.SubText}
              bgColor={item?.BgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
