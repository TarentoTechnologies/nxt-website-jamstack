import { acceleratorsLayout, titleStyles } from "../../tech/Tech.module.css";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

interface AllOtherClientsProps {
  data: any;
}

export const AllOtherClients = ({ data }: AllOtherClientsProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center ${acceleratorsLayout}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
      </div>
    </div>
  );
};
