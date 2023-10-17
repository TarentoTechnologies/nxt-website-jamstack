import { h4SubTitle } from "../../../styles/style-guide/Typography.module.css";
import { multiChannelPadding, multiPadding } from "../Thor.module.css";

interface MultiChannelProps {
  data?: {
    title?: string;
    list?: { title: string; description: string }[];
    subText?: string;
    imgSrc?: string;
  };
}

export const MultiChannel = ({ data }: MultiChannelProps) => {
  return (
    <div className={`layout layoutBg`}>
      <div className={multiPadding}>
        <div className="row d-flex">
          <div className="col-lg-6 col-md-12">
            <img
              className=""
              src={data?.imgSrc}
              alt={data?.title}
              title={data?.title}
              width="100%"
            />
          </div>
          <div className={`col-lg-6 col-md-12 ${multiChannelPadding}`}>
            <div className="">
              <h1>{data?.title}</h1>
              <p className="">{data?.subText}</p>
              {data?.list?.map((item, index) => (
                <div className="mt-5" key={index}>
                  <div className={h4SubTitle}>{item.title}</div>
                  <p className="w-50 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
