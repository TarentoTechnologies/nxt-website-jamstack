import { PrimaryCTA } from "../../../components/buttons/PrimaryCTA";
import { cxHeading } from "../../../styles/style-guide/Typography.module.css";
import {
  btnStyles,
  layout,
  liStyle,
  listMoveLeft,
  moveLeftOne,
} from "../CustomerExperience.module.css";

interface UserEngagementProps {
  id?: any;
  title?: string;
  imgSrc?: string;
  list?: any;
  ctaText?: string;
  ctaLink?: string;
}
export const UserEngagement = ({
  id,
  title,
  imgSrc,
  list,
  ctaText,
  ctaLink,
}: UserEngagementProps) => {
  return (
    <div className={`${layout} d-flex justify-content-center`} id={id}>
      <div className="containerService paddingLeftRight15">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="mb-4">
              <center>
                <img
                  className="w-100"
                  src={imgSrc}
                  alt={title}
                  data-aos="fade-up"
                />
              </center>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="">
              <div
                className={`${cxHeading} ${moveLeftOne} mb-4`}
                data-aos="fade-up"
              >
                {title}
              </div>
              <div id="cxList">
                <ul className={`${listMoveLeft} ${liStyle} ps-3`}>
                  {list?.map((item: any, index: number) => (
                    <li className={liStyle} key={item?.id} data-aos="fade-up">
                      {item?.ListItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${btnStyles} ${listMoveLeft} mb-0`}>
                <PrimaryCTA label={ctaText} btnLink={ctaLink} size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
