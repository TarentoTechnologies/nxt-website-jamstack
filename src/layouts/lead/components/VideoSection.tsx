import { frameStyles } from "../Lead.module.css";

interface VideoSectionProps {
  videoSrc: any;
}

export const VideoSection = ({ videoSrc }: VideoSectionProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center paddingTopBottom60`}
    >
      <div className={`containerService paddingLeftRight15 ${frameStyles}`}>
        <div className={`d-flex justify-content-center`}>
          <iframe
            width="85%"
            height="430"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            // loop="1"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
