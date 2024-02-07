import { ClientCard, PrimaryTitle } from "../../../components";

interface SuccessStoriesProps {
  sectionTitle: string;
  description: string;
  sectionList: any;
}

export const SuccessStories = ({
  sectionTitle,
  description,
  sectionList,
}: SuccessStoriesProps) => {
    
  return (
    <div className="container-fluid d-flex justify-content-center paddingTopBottom60 layoutBg">
      <div className={`containerService paddingLeftRight15`}>
        <div className={`mt-3`}>
          <PrimaryTitle title={sectionTitle} variant="infoSectionH2" />
          <p className={`pt-3 col-6`} data-aos="fade-up">
            {description}
          </p>
        </div>

        <div className="row g-4 my-4">
          {sectionList?.map((data: any, index: number) => {
            return (
              <div className="col-sm-12 col-md-4 col-lg-3" key={data?.id}>
                <ClientCard
                  image={data?.Image?.localFile}
                  imageAlt={data?.Caption}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
