import { AcceleratorCard } from "../../../components/cards/AcceleratorCard";
import { black } from "../../../styles/style-guide/ColorGuide.module.css";
import { sectionTitleV1 } from "../../../styles/style-guide/Typography.module.css";
import { layout } from "../../customer-experience/CustomerExperience.module.css";

interface DigitalPlatformProps {
  heading: string;
  desc: string;
  list?: any;
}

export const DigitalPlatform = ({
  heading,
  desc,
  list,
}: DigitalPlatformProps) => {
  return (
    <div className={`${layout} d-flex justify-content-center layoutBg`}>
      <div className={`row containerService paddingLeftRight15 p-0 m-0`}>
        <div className={`col-lg-12`}>
          <h1 className={`${sectionTitleV1} ${black}`}>{heading}</h1>
          <p className="mt-4 mb-4">{desc}</p>
        </div>
        {list?.map((item: any, index: number) => (
          <AcceleratorCard
            id={item?.id}
            bgImg={item?.BackgroundImage?.localFile?.url}
            title={item?.Title}
            logoDarkSrc={item?.LogoDark?.localFile?.url}
            logoLightSrc={item?.LogoLight?.localFile?.url}
            description={item?.Description}
          />
        ))}
      </div>
    </div>
  );
};
