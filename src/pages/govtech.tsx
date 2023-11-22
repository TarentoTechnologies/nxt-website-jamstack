import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import { ContactUsLayout, DigitalPlatform } from "../layouts/govtech";

const GovTechPage: React.FC<PageProps> = () => {
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
  const heroBannerData = {
    title: "Gov Tech",
    img: "https://nxt.tarento.com/img/gov_tech.svg",
    subtext: "Words by one of the greatest sociologists - Daniel Bell",
    description:
      "Cutting edge solutions with best in class open source technologies for efficient and secure governance.",
  };
  const DigitalPlatformData = {
    heading: "Country Scale Digital Platforms and Solutions",
    list: [
      {
        bgImg: "https://nxt.tarento.com/img/translation.svg",
        title: "Anuvaad Translation",
        logoDarkSrc: "https://nxt.tarento.com/img/anuvad_dark_logo.svg",
        logoLightSrc: "https://nxt.tarento.com/img/anuvad_light_logo.svg",
        description: (
          <>
            AI Powered translation platform for <br />
            Indian languages. Used by Hon.
            <br />
            Supreme Court of India for Suvaas <br />
            project.{" "}
          </>
        ),
      },
      {
        bgImg: "https://nxt.tarento.com/img/translation.svg",
        title: "Anuvaad Translation",
        logoDarkSrc: "https://nxt.tarento.com/img/anuvad_dark_logo.svg",
        logoLightSrc: "https://nxt.tarento.com/img/anuvad_light_logo.svg",
        description: (
          <>
            AI Powered translation platform for <br />
            Indian languages. Used by Hon.
            <br />
            Supreme Court of India for Suvaas <br />
            project.{" "}
          </>
        ),
      },
      {
        bgImg: "https://nxt.tarento.com/img/translation.svg",
        title: "Anuvaad Translation",
        logoDarkSrc: "https://nxt.tarento.com/img/anuvad_dark_logo.svg",
        logoLightSrc: "https://nxt.tarento.com/img/anuvad_light_logo.svg",
        description: (
          <>
            AI Powered translation platform for <br />
            Indian languages. Used by Hon.
            <br />
            Supreme Court of India for Suvaas <br />
            project.{" "}
          </>
        ),
      },
      {
        bgImg: "https://nxt.tarento.com/img/translation.svg",
        title: "Anuvaad Translation",
        logoDarkSrc: "https://nxt.tarento.com/img/anuvad_dark_logo.svg",
        logoLightSrc: "https://nxt.tarento.com/img/anuvad_light_logo.svg",
        description: (
          <>
            AI Powered translation platform for <br />
            Indian languages. Used by Hon.
            <br />
            Supreme Court of India for Suvaas <br />
            project.{" "}
          </>
        ),
      },
      {
        bgImg: "https://nxt.tarento.com/img/translation.svg",
        title: "Anuvaad Translation",
        logoDarkSrc: "https://nxt.tarento.com/img/anuvad_dark_logo.svg",
        logoLightSrc: "https://nxt.tarento.com/img/anuvad_light_logo.svg",
        description: (
          <>
            AI Powered translation platform for <br />
            Indian languages. Used by Hon.
            <br />
            Supreme Court of India for Suvaas <br />
            project.{" "}
          </>
        ),
      },
    ],
    desc: "Proven platforms that can go country scale. Can be deployed in short notice and customized to fit needs of government agencies. With fully in-house hosting, you have the total control of the data.",
  };
  const ContactUsData = {
    heading: "Are you interested?",
    desc: "Does this pack look interesting to you? Get in touch with us to know more. Send us a mail with the subject “GovTech” by clicking the button below",
    CTAlabel: "Contact us",
    CTAlink: undefined,
  };
  return (
    <main className="">
      <HeroBannerForTDI
        title={heroBannerData.title}
        description={heroBannerData.description}
        img={heroBannerData.img}
        govTech={true}
      />
      <DigitalPlatform
        heading={DigitalPlatformData.heading}
        desc={DigitalPlatformData.desc}
        list={DigitalPlatformData.list}
      />
      <ContactUsLayout
        heading={ContactUsData.heading}
        desc={ContactUsData.desc}
        CTAlabel={ContactUsData.CTAlabel}
        CTAlink={ContactUsData.CTAlink}
      />
      <Footer data={footerData} />
    </main>
  );
};

export default GovTechPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Gov Tech - Cutting edge solutions::</title>
    <link rel="canonical" href="https://nxt.tarento.com/data-platform" />
    <meta
      name="title"
      content="::NXT Tarento - Gov Tech - Cutting edge solutions::"
    />
    <meta
      name="description"
      content="Cutting edge solutions with best in class open source
    technologies for efficient and secure governance."
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
      content="::NXT Tarento - Gov Tech - Cutting edge solutions::"
    />
    <meta
      property="og:description"
      content="Cutting edge solutions with best in class open source
    technologies for efficient and secure governance."
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
      content="::NXT Tarento - Gov Tech - Cutting edge solutions::"
    />
    <meta
      property="twitter:description"
      content="Cutting edge solutions with best in class open source
    technologies for efficient and secure governance."
    />
    <meta property="twitter:image" content="" />
  </>
);
