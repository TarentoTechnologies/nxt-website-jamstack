import { BannerWithTag } from "../../../components";
import { acceleratorsLayout } from "../../tech/Tech.module.css";

interface TagSectionProps {
  data: any;
}

export const TagSection = ({ data }: TagSectionProps) => {

  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <BannerWithTag tagsList={data?.Tags} title={data?.Title}/>
      </div>
    </div>
  );
};
