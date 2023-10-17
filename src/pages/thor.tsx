import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import {
  Avatars,
  CaseStudies,
  Features,
  MultiChannel,
  UseCases,
} from "../layouts/thor";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const ThorPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    mainTitle: "THOR",
    title: "AI Powered Assistant and Chatbot",
    img: "https://nxt.tarento.com/img/Thor_animation.svg",
    description:
      "THOR is highly scalable, extensible and allows deep integration to any domain. Multi channel capabilities of THOR enables businesses to engage their users over a wide range of channels",
  };

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
  const FeaturesData = {
    imgSrc: "https://nxt.tarento.com/img/Capabilties.png",
    imgCaption: "thor capabilities",
  };
  const CaseStudyData = {
    title: "Case Studies",
    list: [
      {
        title: "Worlds most sophisticated ID program",
        imgSrc: "https://nxt.tarento.com/img/photo%202.jpg",
        description:
          "Objective of this program was to reduce the unstructured support requests and feedback (such as over calls and emails) which are hard to track and ensure the quality of the responses. In this context it was decided to build an AI powered bot platform that will provide a quicker turnaround to customer grievances and significantly enhanced customer experience. Data security was of paramount importance to such a program and hence it was decided to build the entire platform in-house and ensure that no data leaving the premises ever. Tarento built the entire AI bot platform and deployed the same ahead of schedule. Several innovations including methods and tools to train the bot and measure the effectiveness and reduce the time to launch. System uses live cases to constantly train and improve the responses.",
      },
      {
        title:
          "Digital learning platform with a few million active users across 28 Indian states",
        imgSrc: "https://nxt.tarento.com/img/photo3.jpg",
        description:
          "DIKSHA - Digital Infrastructure for Knowledge Sharing is an initiative from Ministry of Human Resource Development (MHRD), Government of India. The platform provides augmented learning contents and tools to enhance learning opportunity for students and teachers. “Diksha Vani” is an initiative from MHRD to enable a channel for users to interact with platform and get answers. Platform also provides content search and learning recommendations.",
      },
    ],
  };
  const UseCaseData = {
    title: "Use cases",
    list: [
      { imgSrc: "https://nxt.tarento.com/img/FAQs.svg", imgText: "FAQs" },
      {
        imgSrc: "https://nxt.tarento.com/img/Customer%20Support.svg",
        imgText: "Customer Support",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/recomendations.svg",
        imgText: "Recommendations",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/Marketing.svg",
        imgText: "Marketing",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/Reservations.svg",
        imgText: "Reservations",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/helpdesk.svg",
        imgText: "Help desk",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/Guided%20Selling.svg",
        imgText: "Guided Selling",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/HR%20Support.svg",
        imgText: "HR Support",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/Event%20Booking.svg",
        imgText: "Event Booking",
      },
    ],
    subText: "And many more..",
  };
  const AvatarData = {
    title: "Two Avatars",

    list: [
      {
        imgSrc: "https://nxt.tarento.com/img/thor_avatars_01.svg",
        title: "AI Assistant",

        description:
          "THOR AI Assistant is highly personalized and deeply integrated to the business domain & IT systems. Core capabilities of the Assistant falls in 3 main categories: Answers, Alerts and Automation.",
        videoSrc: "https://nxt.tarento.com/videos/thor_v5.mp4",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/chatbot.svg",
        title: "Chatbot",

        description:
          "THOR bot is an AI powered chatbot that is very easy to integrate and simple to manage. Thor bot has multi channel integration capabilities and is available on wide variety of channels including web, mobile web, native mobile apps like Telegram & Whatsapp.",
        videoSrc: "https://nxt.tarento.com/videos/Chatbot_Generic_v4.mp4",
      },
    ],
    subText: (
      <>
        {" "}
        THOR has two avatars - As an AI Assistant for business domain and <br />
        as multi-channel chatbot.
      </>
    ),
  };
  const MutliChannelData = {
    imgSrc: "https://nxt.tarento.com/img/multichannel.png",
    title: "Multi channel engagement",
    subTitle: "Engage your users across the spectrum.",

    list: [
      {
        title: "Chat widget for Web and Mobile ",
        description: "Chat widget that can be embedded in web and mobile web",
      },
      {
        title: " Mobile Application",
        description: "Simple integration with native mobile apps",
      },
      {
        title: "Messaging applications",
        description:
          "Use Telegram and WhatsApp messengers to expand your reach",
      },
    ],
  };

  return (
    <main className="">
      <HeroBannerForTDI data={heroBannerData} />
      <Avatars data={AvatarData} />
      <Features data={FeaturesData} />
      <MultiChannel data={MutliChannelData} />
      <CaseStudies data={CaseStudyData} />
      <UseCases data={UseCaseData} />
      <Footer data={footerData} />
    </main>
  );
};

export default ThorPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - THOR - AI Powered Assistant and Chatbot::</title>
    <link rel="canonical" href="https://nxt.tarento.com/" />
    <meta name="title" content="NXT Tarento" />
    <meta
      name="description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nxt.tarento.com/thor" />
    <meta
      property="og:title"
      content="::NXT Tarento - THOR - AI Powered Assistant and Chatbot::"
    />
    <meta
      property="og:description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="" />
    <meta property="twitter:url" content="https://nxt.tarento.com/thor" />
    <meta
      property="twitter:title"
      content="::NXT Tarento - THOR - AI Powered Assistant and Chatbot::"
    />
    <meta
      property="twitter:description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta property="twitter:image" content="" />
  </>
);
