import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import boltImg from "../../static/images/bolt_thumb.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import {
  AI,
  ContactUs,
  Feature,
  OtherSolution,
  UserEngagement,
} from "../layouts/customer-experience";

const CustomerExperiencePage: React.FC<PageProps> = () => {
  const FeatureData = {
    title: "Good customer experience requires more than just a good product",
    list: [
      {
        title: "Intuitive Experience",
        description:
          "Make the experience as intuitive as possible. Avoid chances for errors, confusion. Ensure that your users have sufficient self help materials when they want to know more. Capture telemetry to understand user behaviour anonymously.",
        logo: "https://nxt.tarento.com/img/experience.svg",
      },
      {
        title: "Intuitive Experience",
        description:
          "Make the experience as intuitive as possible. Avoid chances for errors, confusion. Ensure that your users have sufficient self help materials when they want to know more. Capture telemetry to understand user behaviour anonymously.",
        logo: "https://nxt.tarento.com/img/experience.svg",
      },
      {
        title: "Intuitive Experience",
        description:
          "Make the experience as intuitive as possible. Avoid chances for errors, confusion. Ensure that your users have sufficient self help materials when they want to know more. Capture telemetry to understand user behaviour anonymously.",
        logo: "https://nxt.tarento.com/img/experience.svg",
      },
      {
        title: "Intuitive Experience",
        description:
          "Make the experience as intuitive as possible. Avoid chances for errors, confusion. Ensure that your users have sufficient self help materials when they want to know more. Capture telemetry to understand user behaviour anonymously.",
        logo: "https://nxt.tarento.com/img/experience.svg",
      },
    ],
  };
  const HowItWorksData = {
    title:
      "Artificial Intelligence for the next generation customer experience",
    imgSrc: "https://nxt.tarento.com/img/aurora_ai.svg",
    imgCaption: "Artificial Intelligence",
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
      { title: "Bolt - Data Platform", href: "/data-platform" },
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
  const OtherSolutionData = {
    title: "Other Platforms and Solutions",
    list: [
      {
        title: "Pulz",
        bgImg: "https://nxt.tarento.com/img/pulz.svg",
        logo: "https://nxt.tarento.com/img/energySaving-icon.svg",
        link: "/pulz",
        isLink: "true",
      },
      {
        title: "BOLT",
        bgImg: boltImg,
        logo: "https://nxt.tarento.com/img/energySaving-icon.svg",
        link: "/pulz",
        isLink: "true",
      },
      {
        title: "Pulz",
        bgImg: "https://nxt.tarento.com/img/pulz.svg",
        logo: "https://nxt.tarento.com/img/energySaving-icon.svg",
        link: "/pulz",
        isLink: "true",
      },
    ],
    description:
      "Proven platforms that can go country scale. Can be deployed in short notice and customised to fit needs of government agencies. Will fully in-house hosting, you have the total control of the data.",
  };
  const HeroBannerData = {
    description:
      "Aurora customer experience platform brings in the best of data engineering, analytics and user experience design to enable a superior customer support experience.",
    img: "https://nxt.tarento.com/img/cx_pack_illustration.svg",
    title: "Customer Experience Pack",
    subText: "Words by one of the greatest sociologists - Daniel Bell",
  };
  const contactUsData = {
    desc: "Does this pack look interesting to you? Get in touch with us to know more. Send us a mail with the subject “Customer Experience” by clicking the button below",
    CTAlink: "mailto:hello@tarento.com",
    heading: "Are you interested?",
    CTAlabel: "Contact Us",
  };
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
  return (
    <main className="">
      <HeroBannerForTDI
        description={HeroBannerData.description}
        img={HeroBannerData.img}
        title={HeroBannerData.title}
        subText={HeroBannerData.subText}
      />
      <Feature title={FeatureData.title} list={FeatureData.list} />
      <AI
        title={HowItWorksData.title}
        imgCaption={HowItWorksData.imgCaption}
        imgSrc={HowItWorksData.imgSrc}
      />
      <UserEngagement
        title={UserEnagagementData.title}
        imgSrc={UserEnagagementData.imgSrc}
        ctaText={UserEnagagementData.ctaText}
        ctaLink={UserEnagagementData.ctaLink}
        list={UserEnagagementData.list}
      />
      <OtherSolution
        title={OtherSolutionData.title}
        list={OtherSolutionData.list}
        description={OtherSolutionData.description}
      />
      <ContactUs
        heading={contactUsData.heading}
        CTAlabel={contactUsData.CTAlabel}
        CTAlink={contactUsData.CTAlink}
        desc={contactUsData.desc}
      />
      <Footer data={footerData} />
    </main>
  );
};

export default CustomerExperiencePage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Customer Experience Pack::</title>
    <link rel="canonical" href="https://nxt.tarento.com/data-platform" />
    <meta name="title" content="::NXT Tarento - Customer Experience Pack::" />
    <meta
      name="description"
      content="Aurora customer experience platform brings in the best of data engineering, analytics and user experience 
    design to enable a superior customer support experience."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nxt.tarento.com/data-platform" />
    <meta
      property="og:title"
      content="::NXT Tarento - Customer Experience Pack::"
    />
    <meta
      property="og:description"
      content="Aurora customer experience platform brings in the best of data engineering, analytics and user experience 
    design to enable a superior customer support experience."
    />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="" />
    <meta
      property="twitter:url"
      content="https://nxt.tarento.com/data-platform"
    />
    <meta
      property="twitter:title"
      content="::NXT Tarento - Customer Experience Pack::"
    />
    <meta
      property="twitter:description"
      content="Aurora customer experience platform brings in the best of data engineering, analytics and user experience 
    design to enable a superior customer support experience."
    />
    <meta property="twitter:image" content="" />
  </>
);
