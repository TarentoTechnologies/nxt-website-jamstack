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
  data: {
    title?: string;
    subTitleOne?: string;
    subTitleTwo?: string;
    subTitleThree?: string;
    imgSrc?: string;
    imgCaption?: string;
  };
}
const UserEnagagementData = {
  title: "Thor - AI Bot for user engagement",
  imgSrc: "https://nxt.tarento.com/img/thor_story.svg",
  list: [
    "Engage your customer 24x7 with AI powered chat bots that are specially trained over the domain",
    "Reduce load on the customer support team, so that they can focus on complex problems, where a personal intervention is needed.",
    "Help your customers get the answers to the common queries directly. Reduce unnecessary requests.",
    "Move from unstructured channels to structured channels so that the performance can be measured and improved.",
    "Self learning. AI Bots can learn from the customer interaction and improve over time and create a very good cutomer experience.",
    "Personalised alternative to the FAQ.",
    "Human in the Loop - Seamlessly hand over to human operator when necessary or demanded by the user.",
    "Multi lingual - Bot can understand and respond in multiple languages.",
  ],
  ctaText: "Read More",
  ctaLink: "",
};
export const UserEngagement = ({ data }: UserEngagementProps) => {
  return (
    <div className={`${layout} layoutBg d-flex justify-content-center`}>
      <div className="containerService paddingLeftRight15">
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <div className="mb-3">
              <center>
                <img
                  className="w-100"
                  src={UserEnagagementData.imgSrc}
                  alt={UserEnagagementData.title}
                />
              </center>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className="">
              <div className={`${cxHeading} ${moveLeftOne} mb-4`}>
                {UserEnagagementData.title}
              </div>
              <div id="cxList">
                <ul className={`${listMoveLeft} ${liStyle} ps-3`}>
                  {UserEnagagementData.list.map((item, index) => (
                    <li className={liStyle}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={`${btnStyles} ${listMoveLeft}`}>
                <PrimaryCTA
                  label={UserEnagagementData.ctaText}
                  btnLink={UserEnagagementData.ctaLink}
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
