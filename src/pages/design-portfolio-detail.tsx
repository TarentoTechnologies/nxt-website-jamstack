import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import techHero from "../../static/images/tech-hero.png";
import { Footer } from "../components/footer/Footer";
import {
  AllOtherClients,
  AreYouInterested,
  HeroBanner,
  Showcase,
} from "../layouts/design-portfolio";
import {
  About,
  Highlight,
  RelatedPortfolio,
  TagSection,
} from "../layouts/design-portfolio-detail";

const DesignPortfolioDetail: React.FC<PageProps> = () => {
  const heroBannerData = {
    title: "Bihar Museum",
    img: techHero,
    description:
      "Bihar Museum is a museum located in Patna. It was partially opened in August 2015. 'The children's museum', the main entrance area, and an orientation theatre were the only parts opened to the public in August 2015. Later, in October 2017 remaining galleries were also opened.",
  };

  const aboutData = {
    title: "About CIBoost",
    description:
      "Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand.",
    columnOneTitle: "Industry",
    columnOneValue: "Government",
    columnTwoTitle: "Geography",
    columnTwoValue: "India",
    columnThreeTitle: "Platform",
    columnThreeValue: "Web",
    columnFourTitle: "Link",
    columnFourValue: "https://www.biharmuseum.org/",
  };

  const tagSectionData = {
    title: "The Design tools and Technology that we use to support CIBoost",
    tagsList: [
      {
        id: 0,
        value: "Sketch",
      },
      {
        id: 1,
        value: "Photoshop",
      },
      {
        id: 2,
        value: "HTML",
      },
      {
        id: 3,
        value: "React",
      },
      {
        id: 4,
        value: "PHP",
      },
    ],
  };

  const relatedPortfolioData = {
    title: "Related Portfolio",
    list: [
      {
        id: 0,
        title: "Spinverse​",
        tag: "Gov",
        description:
          "CIBoost is a collective intelligence platform.  A team efficiency enhancement tool that will revolutionize team performance as we know it! Built on a methodology that has been proved to increase performance by up to 2x.",
        imgSrc: "https://picsum.photos/560/300?random=1",
        imgAlt: "Spinverse",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
      {
        id: 1,
        title: "CellMark",
        tag: "Gov",
        description:
          "CellMark is an employee-owned independent supply chain services company. We are here to make your business operations easier and support your trade.",
        imgSrc: "https://picsum.photos/560/300?random=2",
        imgAlt: "CellMark",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
    ],
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

  return (
    <main className="">
      <HeroBanner heroBannerData={heroBannerData} />
      <About data={aboutData} />
      {/* <Highlight /> */}
      <TagSection data={tagSectionData} />
      <RelatedPortfolio data={relatedPortfolioData} />
      <Footer data={footerData} />
    </main>
  );
};

export default DesignPortfolioDetail;

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
