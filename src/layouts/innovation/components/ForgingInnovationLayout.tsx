import { InnoTableCard } from "../../../components/cards/InnoTableCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import {
  forgingInnovation,
  titleStyles,
  descStyles,
  imgStyles,
  cardStyles,
} from "../Innovation.module.css";

interface ForgingInnovationLayoutProps {
  data: {
    heading: string;
    desc: string;
    img: string;
    cardData: any[];
  };
}

export const ForgingInnovationLayout = ({
  data,
}: ForgingInnovationLayoutProps) => {
  return (
    <div className={`d-flex justify-content-center ${forgingInnovation}`}>
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-12 ${titleStyles} px-md-0`}>
          <PrimaryTitle title={data?.heading} variant="infoSectionH2" />
        </div>
        <div className={`col-md-7 ${descStyles} px-md-0`}>
          <p>{data?.desc}</p>
        </div>
        <div
          className={`col-md-5 ${imgStyles} d-flex justify-content-center align-items-center`}
        >
          <img
            src={data?.img}
            alt={data?.heading}
            title={data?.heading}
            className={`img-fluid`}
          />
        </div>
        <div className={`row p-0 m-0 ${cardStyles}`}>
          {data?.cardData.map((item, index) => (
            <InnoTableCard
              key={index}
              title={item.title}
              desc={item.desc}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
