import { FormButton } from "../../../components/buttons/FormButton";
import { black60 } from "../../../styles/style-guide/ColorGuide.module.css";
import {
  acceleratorSubTitle,
  h3Title,
} from "../../../styles/style-guide/Typography.module.css";
import {
  bannerStyles,
  flexDirection,
  formSubText,
} from "../DataPlatform.module.css";
interface FormsProps {
  data: {
    title?: string;
    subTitle: any;
    buttonText: string;
    buttonLink: string;
    imgSrc: string;
    imgCaption: string;
  };
}

export const Form = ({ data }: FormsProps) => {
  return (
    <div className={`${bannerStyles} ${flexDirection}`}>
      <div className="containerService paddingLeftRight15">
        <div className="mt-5 mb-5">
          <div className="row justify-content-between">
            <div className="col-md-7 order-lg-1 order-md-1 order-2">
              <div className="layoutDetails pulseView">
                <div className={h3Title}>{data.title}</div>
                <div
                  className={`${formSubText} ${acceleratorSubTitle} ${black60} mt-4 mb-5`}
                  dangerouslySetInnerHTML={{ __html: data.subTitle }}
                />
                <FormButton label={data.buttonText} btnLink={data.buttonLink} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 order-md-2 order-1 mb-2">
              <div className="scanner">
                <img
                  src={data.imgSrc}
                  alt={data.imgCaption}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
