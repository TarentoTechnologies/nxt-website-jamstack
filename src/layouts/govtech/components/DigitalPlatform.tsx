import { AcceleratorCard } from "../../../components/cards/AcceleratorCard";
import {
  revolutionHeading
} from "../../../styles/style-guide/Typography.module.css";
import { contactUsLayout } from "../Govtech.module.css";

interface DigitalPlatformProps {
  heading: string;
  desc: string;
  list?: {
    title: string;
    description: any;
    logoDarkSrc: string;
    logoLightSrc: string;
    bgImg: string;
  }[];
}

export const DigitalPlatform = ({
  heading,
  desc,
  list,
}: DigitalPlatformProps) => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center layoutBg ${contactUsLayout}`}
    >
      <div className={`row containerService paddingLeftRight15`}>
        <div className={`col-lg-12`}>
          <div className={revolutionHeading}>{heading}</div>
          <p className="mt-4 mb-4">{desc}</p>
        </div>
        {list?.map((item, index) => (
          <>
            {" "}
            <AcceleratorCard
              bgImg={item.bgImg}
              title={item.title}
              logoDarkSrc={item.logoDarkSrc}
              logoLightSrc={item.logoLightSrc}
              description={item.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};
