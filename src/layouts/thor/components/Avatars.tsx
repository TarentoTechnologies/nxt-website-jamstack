import { bgNeutralGray } from "../../../styles/style-guide/ColorGuide.module.css";
import {
  h3Title,
  revolutionHeading,
} from "../../../styles/style-guide/Typography.module.css";
import {
  avatarContainer,
  topBottomPadding,
  videoContainer,
  videoPosition,
} from "../Thor.module.css";

interface AvatarProps {
  data?: {
    title?: string;
    list?: {
      imgSrc: string;
      title: string;
      description: string;
      videoSrc: string;
    }[];
    subText?: any;
  };
}

export const Avatars = ({ data }: AvatarProps) => {
  return (
    <div className={`layout ${bgNeutralGray} ${topBottomPadding}`}>
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <h1 className={`${h3Title}`}>{data?.title}</h1>
          <p className="mb-5 mt-3">{data?.subText}</p>
          <div className={`row ms-lg-5`}>
            {data?.list?.map((item, index) => (
              <div
                className="col-md-12 col-lg-6 col-sm-12 col-xs-12"
                key={index}
              >
                <div className={`${avatarContainer} position-relative`}>
                  <p className={revolutionHeading}>
                    <span>
                      <img
                        className="me-5"
                        src={item.imgSrc}
                        alt={item.title}
                        title={item.title}
                      />
                    </span>{" "}
                    {item.title}
                  </p>
                  <p>{item.description}</p>

                  <div className={videoPosition}>
                    <video
                      className={videoContainer}
                      controls
                      src={item.videoSrc}
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
