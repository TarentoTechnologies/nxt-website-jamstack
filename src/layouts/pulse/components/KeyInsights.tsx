import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { keyFeature, keyImg, purpleBg } from "../Pulse.module.css";

interface KeyInsightsProps {
  heading: string;
  cardList: any[];
}

export const KeyInsights = ({ heading, cardList }: KeyInsightsProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 ${purpleBg}`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={``}>
          <PrimaryTitle title={heading} variant="infoSectionH2" color="white" />
        </div>
        <div className={`${keyFeature}`}>
          {cardList.map((item, index) => (
            <div key={index} className={`${keyImg}`}>
              <img
                src={item.imgSrc}
                alt={item.imgAltText}
                title={item.imgAltText}
                className={`img-fluid`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
