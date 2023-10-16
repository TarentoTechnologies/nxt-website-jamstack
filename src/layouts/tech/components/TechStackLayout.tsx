import {
  techStack,
  titleStyles,
  gridLayout,
  logoStyles,
} from "../Tech.module.css";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

interface TechStackLayoutProps {
  data: {
    heading: string;
    logoList: any[];
  };
}

export const TechStackLayout = ({ data }: TechStackLayoutProps) => {
  return (
    <div className={`d-flex justify-content-center ${techStack}`}>
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
        <div className={`${gridLayout}`}>
          {data?.logoList.map((item, index) => (
            <div
              key={index}
              className={`${logoStyles} d-flex justify-content-center align-items-center`}
            >
              <img
                src={item.logo}
                alt={item.name}
                title={item.name}
                className={`img-fluid`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
