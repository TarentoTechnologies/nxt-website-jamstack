import { PrimaryCTACard } from "../../../components";
import { bgNeutralGray2 } from "../../../styles/style-guide/ColorGuide.module.css";
import { paddingTopDown100, productCardLayoutStyles } from "../Home.module.css";

interface CTALayoutProps {
  data: any;
}

export const CTALayout = ({ data }: CTALayoutProps) => {
  return (
    <div
      className={`container-fluid ${productCardLayoutStyles} ${bgNeutralGray2} ${paddingTopDown100} mb-0`}
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
