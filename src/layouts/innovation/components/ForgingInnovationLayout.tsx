import { InnoTableCard } from "../../../components/cards/InnoTableCard";
import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { carbon } from "../../../styles/style-guide/ColorGuide.module.css";
import {
  cardStyles,
  descStyles,
  forgingInnovation,
  imgStyles,
  titleStyles,
} from "../Innovation.module.css";

interface ForgingInnovationLayoutProps {
  heading: string;
  desc: string;
  img: any;
  cardData: any;
}

export const ForgingInnovationLayout = ({
  heading,
  desc,
  img,
  cardData,
}: ForgingInnovationLayoutProps) => {
  return (
    <div className={`d-flex justify-content-center ${forgingInnovation}`}>
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-12 ${titleStyles} px-md-0`}>
          <PrimaryTitle
            title={heading}
            variant="h3600"
            customClasses={carbon}
          />
        </div>
        <div className={`col-sm-12 col-md-12 col-lg-7 ${descStyles} px-md-0`}>
          <p className={`${carbon}`}>{desc}</p>
        </div>
        <div
          className={`col-sm-12 col-md-12 col-lg-5 ${imgStyles} d-flex justify-content-center align-items-center`}
        >
          <img
            src={img?.localFile.url}
            alt={img?.alternativeText}
            title={img?.caption}
            className={`img-fluid`}
          />
        </div>
        <div className={`row p-0 m-0 ${cardStyles}`}>
          {cardData.map((item: any, index: number) => (
            <InnoTableCard
              key={item.id}
              title={item.Title}
              desc={item.Description}
              bgColor={item.BackgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
