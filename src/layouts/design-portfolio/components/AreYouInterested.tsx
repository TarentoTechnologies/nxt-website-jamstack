import { PrimaryCTACard } from "../../../components";
import { bgNeutralGray2 } from "../../../styles/style-guide/ColorGuide.module.css";
import { paddingTopDown100, productCardLayoutStyles } from "../../home/Home.module.css";

interface AreYouInterestedProps {
  data: any;
}

export const AreYouInterested = ({ data }: AreYouInterestedProps) => {
  return (
    <div
      className={`container-fluid ${productCardLayoutStyles} ${bgNeutralGray2} ${paddingTopDown100} mb-0 mt-0`}
    >
      <PrimaryCTACard
        title={data?.Title}
        description={data?.Description}
        ctaLink={data?.CTALink}
        ctaText={data?.CTAText}
      />
    </div>
  );
};
