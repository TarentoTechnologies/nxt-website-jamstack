import {
  h3Title,
  h4SubTitle,
} from "../../../styles/style-guide/Typography.module.css";
import {
  multiChannelPadding,
  topBottomPadding
} from "../Thor.module.css";

interface MultiChannelProps {
  title?: string;
  list?: { title: string; description: string }[];
  subText?: string;
  imgSrc?: string;
}

export const MultiChannel = ({
  title,
  list,
  subText,
  imgSrc,
}: MultiChannelProps) => {
  return (
    <div className={`layout layoutBg ${topBottomPadding}`}>
      <div className="row d-flex">
        <div className="col-lg-6 col-md-12">
          <img
            className=""
            src={imgSrc}
            alt={title}
            title={title}
            width="100%"
          />
        </div>
        <div className={`col-lg-6 col-md-12 ${multiChannelPadding}`}>
          <div className="">
            <h1 className={`${h3Title}`}>{title}</h1>
            <p className="">{subText}</p>
            {list?.map((item, index) => (
              <div className="mt-5" key={index}>
                <div className={h4SubTitle}>{item.title}</div>
                <p className="w-50 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
