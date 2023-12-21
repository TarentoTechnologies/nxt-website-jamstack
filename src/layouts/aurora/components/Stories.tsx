import { PrimaryTitle } from "../../../components/titles/PrimaryTitle";
import { storyImg } from "../Aurora.module.css";

interface StoriesProps {
  title: string;
  cardsData: any[];
}

export const Stories = ({ title, cardsData }: StoriesProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60 layoutBg`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`pb-2`}>
          <PrimaryTitle title={title} variant="infoSectionH2" />
        </div>
        <div className={`row`}>
          {cardsData.map((item, index) => (
            <div key={index} className={`col-lg-6 mt-5`}>
              <div className={`d-flex justify-content-center`}>
                <img
                  src={item?.Img?.localFile?.url}
                  alt={item?.Img?.alternativeText}
                  title={item?.Img?.alternativeText}
                  className={`img-fluid ${storyImg}`}
                />
              </div>
              <h2 className={`mt-3 pt-3`}>{item?.Title}</h2>
              <p className={`mt-3`}>{item?.Description?.data?.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
