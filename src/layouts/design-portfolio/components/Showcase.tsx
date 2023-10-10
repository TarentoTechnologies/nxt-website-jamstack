import { techStack, titleStyles } from "../../tech/Tech.module.css";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

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
      </div>
    </div>
  );
};
