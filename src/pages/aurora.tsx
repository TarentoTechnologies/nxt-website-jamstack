import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import featureImg1 from "../../static/images/aurora_feature_1.png";
import featureImg2 from "../../static/images/aurora_feature_2.png";
import featureImg3 from "../../static/images/aurora_feature_3.png";
import featureImg4 from "../../static/images/aurora_feature_4.png";
import featureImg5 from "../../static/images/aurora_feature_5.png";
import featureImg6 from "../../static/images/aurora_feature_6.png";
import heroImg from "../../static/images/aurora_header.svg";
import auroraWorking from "../../static/images/aurora_how_it_works.png";
import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import storyImg2 from "../../static/images/photo3.jpg";
import storyImg1 from "../../static/images/story_1.png";
import auroraVideo from "../../static/videos/aurora_video_v5.mp4";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import { HowItWorks, Stories, VideoSection } from "../layouts/aurora";
import { FeaturesLayout } from "../layouts/rain";

const AuroraPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    title: "Aurora - Customer Experience Platform",
    img: heroImg,
    subtext: "Empowering customer experience with data & Insights",
    description:
      "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
  };

  const featureCards = [
    {
      heading: "Connect to any source, manage from one place",
      subText:
        "Aurora can be configured to accept tickets from multiple sources including email, mobile applications, QR codes, web portals etc.",
      img: featureImg1,
    },
    {
      heading: "Reply directly regardless of the type of source",
      subText:
        "From Aurora desk, the user can reply to any ticket, using an intuitive chat interface, regardless of the source platform from which the ticket was raised.",
      img: featureImg2,
    },
    {
      heading: "Be more informed with full history",
      subText:
        "User can access the full history of activities to make an informed decision with short and effective back and forth communication.",
      img: featureImg3,
    },
    {
      heading: "Manage access, visibility and much more with admin",
      subText:
        "The administration module lets the admin user control almost everything easily without any help.",
      img: featureImg4,
    },
    {
      heading: "Better organisation with tags, pins, progress indicators etc.",
      subText:
        "Have a huge number of feedback/tickets? Aurora has the right tools that let you make it a habit to better organize items.",
      img: featureImg5,
    },
    {
      heading: "Learn from feedback - get real-time insights",
      subText:
        "Just solving concerns does not always help. One needs to identify patterns and take proactive decisions inorder to be effective. The analytics capability built into Aurora generates visualizations and insights to help you with that.",
      img: featureImg6,
    },
  ];

  const footerData = {
    nxtLogoImg: NXTlogo,
    nxtLogoImgTitle: "NXT-logo",
    companyLogoImg: TarentoLogo,
    companyLogoImgTitle: "Tarento-logo",
    description:
      "NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento. We take pride in being unconventional with our approaches while retaining the passion with which we work.",
    mailId: "hello@tarento.com",
    levelOneHeading: "Direct Links",
    levelOneList: [
      { title: "Home", href: "nxt.html" },
      { title: "Technology", href: "technology.html" },
      { title: "Design", href: "design-process.html" },
      { title: "Innovation", href: "nxt-innovation.html" },
      { title: "Pricing", href: "pricing.html" },
    ],
    levelTwoHeading: "Tech & Innovations",
    levelTwoList: [
      { title: "Bolt - Data Platform", href: "data-platform.html" },
      { title: "Rain - Analytics", href: "rain.html" },
      { title: "Thor - Chatbot", href: "thor.html" },
      { title: "GovTech", href: "govtech.html" },
      { title: "Customer Experience", href: "customer-experience.html" },
    ],
    levelThreeHeading: "Direct Links",
    levelThreeList: [
      { title: "Home", href: "https://www.tarento.com/" },
      { title: "About us", href: "https://www.tarento.com/about/" },
      { title: "Services", href: "https://www.tarento.com/services/" },
      { title: "Careers", href: "https://www.tarento.com/careers/" },
    ],
    levelFourHeading: "Programmes",
    levelFourList: [
      { title: "Lead", href: "https://www.tarento.com/lead/" },
      { title: "Blixt", href: "https://www.tarento.com/blixt/" },
    ],
    rightsText: "All rights reserved © 2023 Tarento Technologies.",
  };

  return (
    <main className="">
      <HeroBannerForTDI
        title={heroBannerData.title}
        subText={heroBannerData.subtext}
        subTextBold
        description={heroBannerData.description}
        img={heroBannerData.img}
      />
      <HowItWorks heading="How does Aurora work?" imgSrc={auroraWorking} />
      <VideoSection
        heading="Aurora - One Desk for all customer needs"
        listData={[
          "Intuitive interface for efficient interactions.",
          "Empower support personnel to make descisions and arrive at resolution with contextual data.",
          "Meta data from the source system along with customer information.",
          "Analytics around the task and customer for setting the relevance and priority.",
          "Auto response - AI powered response recommendations.",
          "Potential solutions - Solution reference from the past resolution for similar issues.",
        ]}
        videoSrc={auroraVideo}
      />
      <FeaturesLayout title="Features" cardsData={featureCards} />
      <Stories
        title="Stories"
        cardsData={[
          {
            imgSrc: storyImg1,
            heading: "Tasks - Feedback module for a 100k+ userbase",
            description:
              "Objective of this program was to reduce the unstructured support requests and feedback (such as over calls and emails) which are hard to track and ensure the quality of the responses. In this context it was decided to build an AI powered bot platform that will provide a quicker turnaround to customer grievances and significantly enhanced customer experience.",
          },
          {
            imgSrc: storyImg2,
            heading: "Aurora seemlessly integrated in customer projects",
            description:
              "DIKSHA - Digital Infrastructure for Knowledge Sharing is an initiative from Ministry of Human Resource Development (MHRD), Government of India. The platform provides augmented learning contents and tools to enhance learning opportunity for students and teachers. “Diksha Vani” is an initiative from MHRD to enable a channel for users to interact with platform and get answers. Platform also provides content search and learning recommendations.",
          },
        ]}
      />
      <Footer data={footerData} />
    </main>
  );
};

export default AuroraPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Technology design and Innovation::</title>
    <link rel="canonical" href="https://nxt.tarento.com/" />
    <meta name="title" content="NXT Tarento" />
    <meta
      name="description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nxt.tarento.com/" />
    <meta property="og:title" content="NXT Tarento" />
    <meta
      property="og:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="" />
    <meta property="twitter:url" content="https://nxt.tarento.com/" />
    <meta property="twitter:title" content="NXT Tarento" />
    <meta
      property="twitter:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta property="twitter:image" content="" />
  </>
);
