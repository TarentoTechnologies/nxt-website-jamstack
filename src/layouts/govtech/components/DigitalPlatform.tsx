import { AcceleratorCard } from "../../../components/cards/AcceleratorCard";
import {
  revolutionHeading
} from "../../../styles/style-guide/Typography.module.css";
import { layout } from "../../customer-experience/CustomerExperience.module.css";

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
      className={`${layout} d-flex justify-content-center`}
    >
      <div className={`row containerService paddingLeftRight15 p-0 m-0`}>
        <div className={`col-lg-12`}>
          <h1 className={revolutionHeading}><b>{heading}</b></h1>
          <p className="mt-4 mb-4">{desc}</p>
        </div>
        {list?.map((item, index) => (
          <>
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
