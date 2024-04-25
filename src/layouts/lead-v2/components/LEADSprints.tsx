import { ImageOverlapCard, PrimaryTitle } from "../../../components";

interface LEADSprintsProps {
  sectionTitle: any;
  sectionList: any;
}

export const LEADSprints = ({
  sectionTitle,
  sectionList,
}: LEADSprintsProps) => {
  return (
    <div className="container-fluid d-flex justify-content-center paddingTopBottom60">
      <div className={`containerService paddingLeftRight15`}>
        <div className={`mt-3`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
        </div>

        <div className="my-3">
          {sectionList?.map((data: any) => {
            return (
              <ImageOverlapCard
                key={data?.id}
                img={data?.Image}
                content={data?.Description}
                textPos={data?.DescriptionAlignment}
                subTitle={data?.Title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
