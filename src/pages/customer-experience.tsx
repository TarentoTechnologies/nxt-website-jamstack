import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import {
  AI,
  Feature,
  Form,
  OtherSolution,
} from "../layouts/customer-experience";

const CustomerExperiencePage: React.FC<PageProps> = () => {
  const keyInsightsData = {
    title: "Key Insights",
    list: [
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
    ],
  };
  const FeatureData = {
    title: "Feature",
    list: [
      {
        logo: "https://nxt.tarento.com/img/featureImg-01.png",
        title: "CXO Insights Platform",
        bgColor: "white",
      },
      {
        logo: "https://nxt.tarento.com/img/featureImg-01.png",
        title: "CXO Insights Platform",
        bgColor: "white",
      },
      {
        logo: "https://nxt.tarento.com/img/featureImg-01.png",
        title: "CXO Insights Platform",
        bgColor: "white",
      },
      {
        logo: "https://nxt.tarento.com/img/featureImg-01.png",
        title: "CXO Insights Platform",
        bgColor: "white",
      },
      {
        logo: "https://nxt.tarento.com/img/featureImg-01.png",
        title: "CXO Insights Platform",
        bgColor: "white",
      },
      {
        logo: "https://nxt.tarento.com/img/featureImg-01.png",
        title: "CXO Insights Platform",
        bgColor: "white",
      },
    ],
  };
  const HowItWorksData = {
    title:
      "Artificial Intelligence for the next generation customer experience",
    imgSrc: "https://nxt.tarento.com/img/aurora_ai.svg",
    imgCaption: "Artificial Intelligence",
  };
  const FormData = {
    title: "Every business can benefit from the mastery of the data",
    subTitle: `
    <p>
      Onboard and take your business to the next level.
      <br /> Send a message to
      <b>
        <a href="mailto:hello@tarento.com?subject=Pulse Demo" >
          hello@tarento.com
        </a>
      </b>
      and we will contact you within one business day.
    </p>
  `,
    buttonText: "Request a demo",
    buttonLink: "mailto:hello@tarento.com?subject=Pulse Demo",
    imgSrc: "https://nxt.tarento.com/img/data_QRCode.png",
    imgCaption: "QR Code Scanner",
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
        title: "Pulz",
        bgImg: "https://nxt.tarento.com/img/pulz.svg",
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
      "Proven platforms that can go country scale. Can be deployed in short notice and customised to fit needs of government agencies.Will fully in-house hosting, you have the total control of the data.",
  };
  return (
    <main className="">
      <HeroBannerForTDI
        data={{
          description:
            "Aurora customer experience platform brings in the best of data engineering, analytics and user experience design to enable a superior customer support experience.",
          img: "https://nxt.tarento.com/img/cx_pack_illustration.svg",
          subtext: "Words by one of the greatest sociologists - Daniel Bell",
          title: "Customer Experience Pack",
        }}
      />
      <AI data={HowItWorksData} />
      <OtherSolution data={OtherSolutionData} />
      <Feature data={FeatureData} />
      <Form data={FormData} />
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
