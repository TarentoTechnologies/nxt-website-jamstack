import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForAccelerators } from "../components/banners/HeroBannerForAccelerators";
import { Footer } from "../components/footer/Footer";
import {
  Feature,
  Form,
  KeyInsights,
  WorkingProcess,
} from "../layouts/data-platform";

const DataPlatformPage: React.FC<PageProps> = () => {
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
    title: "How it Works ",
    imgSrc: "https://nxt.tarento.com/img/dataProcess.jpg",
    imgCaption: "data process",
    subTitleOne: "Ability to collect data from diverse sources.",
    subTitleTwo:
      "Data processing - Ingest, validate, transform, enrich, and store.",
    subTitleThree:
      "Build insights &amp; Intelligence, predict &amp; plan. Use the processed and enriched data for wide range of business use cases.",
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

  return (
    <main className="">
      <HeroBannerForAccelerators
        data={{
          title: "Data. Information. Insight.",
          img: "https://nxt.tarento.com/img/data-platform.jpg",
          imgAltText: "data-platform",
          subText: " Supercharge your business with the power of Data.",
          description:
            " Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
          logosrc: "https://nxt.tarento.com/img/bolt_light.svg",
          withLogo: true,
        }}
      />
      <WorkingProcess data={HowItWorksData} />
      <KeyInsights data={keyInsightsData} />
      <Feature data={FeatureData} />
      <Form data={FormData} />
      <Footer data={footerData} />
    </main>
  );
};

export default DataPlatformPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::Tarento - NXT - BOLT Data Information Insight.::</title>
    <link rel="canonical" href="https://nxt.tarento.com/data-platform" />
    <meta
      name="title"
      content="::Tarento - NXT - BOLT Data Information Insight.::"
    />
    <meta
      name="description"
      content="Make reliable, data driven decisions. Take your business to the next level with our data-platform."
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
      content="::Tarento - NXT - BOLT Data Information Insight::"
    />
    <meta
      property="og:description"
      content="Make reliable, data driven decisions. Take your business to the next level with our data-platform."
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
      content="::Tarento - NXT - BOLT Data Information Insight::"
    />
    <meta
      property="twitter:description"
      content="Make reliable, data driven decisions. Take your business to the next level with our data-platform."
    />
    <meta property="twitter:image" content="" />
  </>
);
