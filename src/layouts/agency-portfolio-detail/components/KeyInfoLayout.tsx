import { KeyInfoCard } from "../../../components";
import { acceleratorsLayout } from "../../tech/Tech.module.css";

interface KeyInfoLayoutProp {
  data: any;
}

export const KeyInfoLayout = ({ data }: KeyInfoLayoutProp) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService`}>
        <KeyInfoCard data={data} />
      </div>
    </div>
  );
};
