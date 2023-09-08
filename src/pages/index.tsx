import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HeroBanner } from "../components/banners/HeroBanner";
import mainLogo from "../../static/images/logo-main.svg";
import headLogo from "../../static/images/logo-head.svg";
import { TriCardLayout } from "../layouts/home/components/TriCardLayout";
import { PyramidBanner } from "../components/banners/PyramidBanner";
import pyramidImage from "../../static/images/pyramid.svg";
import { ProductCardLayout } from "../layouts/home/components/ProductCardLayout";
import { Footer } from "../components/footer/Footer";
import NXTlogo from "../../static/images/logo-inner.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import boltImg from "../../static/images/bolt_thumb.svg";
import boltLogo from "../../static/images/bolt_dark.svg";
import rainImg from "../../static/images/rain_thumb.svg";
import rainLogo from "../../static/images/rain.svg";
import thorImg from "../../static/images/thor_thumb.svg";
import thorLogo from "../../static/images/thor_dark.svg";
import govTechImg from "../../static/images/govtech_thumb.svg";
import govTechLogo from "../../static/images/govTech_icon.svg";
import techLogo from "../../static/images/technology.svg";
import designLogo from "../../static/images/design.svg";
import innovationLogo from "../../static/images/inovation.svg";

const IndexPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    logoMain: mainLogo,
    logoHead: headLogo,
    logoMainTitle: "NXT-main-logo",
    logoHeadTitle: "NXT-head-logo",
  };

  const triCardData = [
    {
      title: "TECHNOLOGY",
      logo: techLogo,
      bgColor: "blue",
    },
    {
      title: "DESIGN",
      logo: designLogo,
      bgColor: "green",
    },
    {
      title: "INNOVATION",
      logo: innovationLogo,
      bgColor: "violet",
    },
  ];

  const pyramidBannerData = {
    title: "Data Pyramid",
    description:
      "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
    pyramidImg: pyramidImage,
    btnDescr: "Read more",
  };

  const productCardData = [
    {
      title: "BOLT - Data platform",
      bgImg: boltImg,
      logo: boltLogo,
    },
    {
      title: "RAIN - Analytics",
      bgImg: rainImg,
      logo: rainLogo,
    },
    {
      title: "THOR - AI Assistant & Chatbots",
      bgImg: thorImg,
      logo: thorLogo,
    },
    {
      title: "Gov Tech",
      bgImg: govTechImg,
      logo: govTechLogo,
    },
    {
      title: "Customer Experience Pack",
      bgImg: govTechImg,
      logo: govTechLogo,
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
      <HeroBanner data={heroBannerData} />
      <TriCardLayout data={triCardData} />
      <PyramidBanner data={pyramidBannerData} />
      <ProductCardLayout data={productCardData} />
      <Footer data={footerData} />
    </main>
  );
};

export default IndexPage;

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
