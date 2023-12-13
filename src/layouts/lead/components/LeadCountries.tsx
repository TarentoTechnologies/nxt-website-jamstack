import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { cardHeader } from "../../../styles/style-guide/Typography.module.css";
import { cardList, countryCard } from "../Lead.module.css";

interface LeadCountriesProps {
  title: string;
  description: string;
  imgSrc: any;
  cardData: {
    heading: string;
    keyPoints: string[];
  };
}

export const LeadCountries = ({
  title,
  description,
  imgSrc,
  cardData,
}: LeadCountriesProps) => {
  const len = cardData.keyPoints.length;
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 layoutBg`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`col-lg-6 pt-3 pb-1`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
          <p className={`pt-4`}>{description}</p>
        </div>
        <div className={`row`}>
          <div className={`col-lg-6`}>
            <div className={`whiteBg ${countryCard}`}>
              <h4 className={`${cardHeader}`}>{cardData.heading}</h4>
              <div className={`${cardList} row`}>
                <div className={`col-lg-6 ps-4`}>
                  <ul>
                    {cardData.keyPoints.slice(0, len / 2).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={`col-lg-6 ps-4`}>
                  <ul>
                    {cardData.keyPoints
                      .slice(len / 2, len)
                      .map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    <label>And many more….</label>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6`}>
            <img
              src={imgSrc}
              alt={title}
              title={title}
              className={`img-fluid`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};