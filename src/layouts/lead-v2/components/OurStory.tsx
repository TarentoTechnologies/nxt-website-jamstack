import { PrimaryTitle, StoryCard } from "../../../components";

interface OurStoryProps {
  sectionTitle: string;
  sectionList: any;
}

export const OurStory = ({ sectionTitle, sectionList }: OurStoryProps) => {
  return (
    <div className="container-fluid d-flex justify-content-center paddingTopBottom60 layoutBg">
      <div className={`containerService paddingLeftRight15`}>
        <div className={`mt-3`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
        </div>

        <div className="row g-4 my-4">
          {sectionList?.map((data: any, index: number) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={data?.id}>
                <StoryCard
                  image={data?.Image?.localFile}
                  title={data?.Title}
                  description={data?.SubText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
