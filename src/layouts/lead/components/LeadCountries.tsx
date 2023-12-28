import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { cardHeader } from "../../../styles/style-guide/Typography.module.css";
import { cardList, countryCard } from "../Lead.module.css";

interface LeadCountriesProps {
  title: string;
  description: string;
  imgSrc: any;
  cardHeading: string;
  keyPoints: string[];
}

export const LeadCountries = ({
  title,
  description,
  imgSrc,
  cardHeading,
  keyPoints,
}: LeadCountriesProps) => {
  const len = keyPoints.length;

  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 layoutBg`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`col-lg-6 pt-3 pb-1`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
          <p className={`pt-4`} data-aos="fade-up">
            {description}
          </p>
        </div>
        <div className={`row`}>
          <div className={`col-lg-6`}>
            <div className={`whiteBg ${countryCard}`}>
              <h4 className={`${cardHeader}`} data-aos="fade-up">
                {cardHeading}
              </h4>
              <div className={`${cardList} row`}>
                <div className={`col-lg-6 ps-4`}>
                  <ul>
                    {keyPoints.slice(0, len / 2).map((item: any, index) => (
                      <li key={index} data-aos="fade-up">
                        {item?.ListItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`col-lg-6 ps-4`}>
                  <ul>
                    {keyPoints.slice(len / 2, len).map((item: any, index) => (
                      <li key={index} data-aos="fade-up">
                        {item?.ListItem}
                      </li>
                    ))}
                    <label data-aos="fade-up">And many more….</label>
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
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
