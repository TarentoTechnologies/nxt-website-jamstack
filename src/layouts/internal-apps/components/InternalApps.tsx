import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { PrimaryTitle } from "../../../components/index";
import { carbon } from "../../../styles/style-guide/ColorGuide.module.css";
import {
  h4400,
  subText1,
} from "../../../styles/style-guide/Typography.module.css";
import { titleStyles } from "../../rain/Rain.module.css";
import { cxButton } from "../InternalApps.module.css";

interface InternalAppsProps {
  title: string;
  appData: any;
}

export const InternalApps = ({ title, appData }: InternalAppsProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`${titleStyles}`}>
          <PrimaryTitle
            title={title}
            variant="h3600"
            customClasses={`${carbon}`}
          />
        </div>
        <div className="mt-5">
          <div className="row mt-2 gx-5">
            {appData?.map((data: any, index: number) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={data?.id}>
                  <div className="">
                    <GatsbyImage
                      image={
                        getImage(data?.Logo?.localFile)
                          ? getImage(data?.Logo?.localFile)
                          : data?.Logo?.localFile
                      }
                      alt={data?.Logo?.alternativeText}
                      title={data?.Logo?.caption}
                      className={`img-fluid`}
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className={`${h4400}`}>{data?.AppTitle}</h4>
                  </div>
                  <div className="pt-3">
                    <p className={`${subText1}`}>{data?.AppDescription}</p>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <div className="mb-3">
                      <a
                        href={data?.iOSAppLInk}
                        className={`${cxButton} btn btn-primary`}
                      >
                        Install iOS App
                      </a>
                    </div>
                    <div className="">
                      <a
                        href={data?.AndoridAppLink?.localFile?.url}
                        className={`${cxButton} btn btn-primary`}
                        download
                      >
                        Install Android App
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
