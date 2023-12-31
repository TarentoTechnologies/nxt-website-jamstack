import {
  bgNeutralGray,
  black,
} from "../../../styles/style-guide/ColorGuide.module.css";
import {
  sectionTitleV1,
  subTitleV1,
} from "../../../styles/style-guide/Typography.module.css";
import {
  avatarContainer,
  topBottomPadding,
  videoContainer,
  videoPosition,
} from "../Thor.module.css";

interface AvatarProps {
  title?: string;
  list?: any;
  subText?: any;
}

export const Avatars = ({ title, list, subText }: AvatarProps) => {
  return (
    <div className={`layout ${bgNeutralGray} ${topBottomPadding}`}>
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <h1 className={`${sectionTitleV1} ${black}`} data-aos="fade-up">
            {title}
          </h1>
          <p className="mb-5 mt-3" data-aos="fade-up">
            {subText}
          </p>
          <div className={`row gx-5`}>
            {list?.map((item: any, index: number) => (
              <div
                className="col-md-12 col-lg-6 col-sm-12 col-xs-12"
                key={item?.id}
                data-aos="fade-up"
              >
                <div className={`${avatarContainer} position-relative`}>
                  <p className={`${black} ${subTitleV1}`}>
                    <span>
                      <img
                        className="me-3"
                        src={item?.Logo?.localFile?.url}
                        alt={item?.Logo?.alternativeText}
                        title={item?.Logo?.caption}
                        data-aos="fade-up"
                      />
                    </span>
                    {item?.Title}
                  </p>
                  <p data-aos="fade-up">{item?.Description}</p>

                  <div className={videoPosition}>
                    <video
                      className={videoContainer}
                      controls
                      src={item?.Video?.localFile?.url}
                      data-aos="fade-up"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
