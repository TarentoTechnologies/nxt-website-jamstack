import { cxHeading } from "../../../styles/style-guide/Typography.module.css";
import { listStyles, videoHeading, videoSize } from "../Aurora.module.css";

interface VideoSectionProps {
  heading: string;
  listData: string[];
  videoSrc: any;
}

export const VideoSection = ({
  heading,
  listData,
  videoSrc,
}: VideoSectionProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center layoutBg paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15`}>
        <div className={`row`}>
          <div
            className={`col-lg-6 d-flex justify-content-center align-items-center`}
          >
            <video
              className={`${videoSize}`}
              disablePictureInPicture
              preload="true"
              controls
              controlsList="nodownload"
            >
              <source
                className={`${videoSize}`}
                src={videoSrc}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={`col-lg-6`}>
            <div className={`pb-5`}>
              <h2 className={`${cxHeading} ${videoHeading} mb-3`}>{heading}</h2>
              <div className={`${listStyles}`}>
                <ul>
                  {listData.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
