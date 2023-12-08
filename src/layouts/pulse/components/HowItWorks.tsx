import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";

interface HowItWorksProps {
  heading: string;
  imgSrc: any;
  levelOneText: string;
  levelTwoText: string;
  levelThreeText: string;
}

export const HowItWorks = ({
  heading,
  imgSrc,
  levelOneText,
  levelTwoText,
  levelThreeText,
}: HowItWorksProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center layoutBg paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <PrimaryTitle title={heading} variant="infoSectionH2" />
          <div className={`col-12`}>
            <img
              src={imgSrc}
              alt={heading}
              title={heading}
              className="img-fluid"
            />
          </div>
          <div className={`col-lg-4`}>
            <p>{levelOneText}</p>
          </div>
          <div className={`col-lg-4`}>
            <p>{levelTwoText}</p>
          </div>
          <div className={`col-lg-4`}>
            <p>{levelThreeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
