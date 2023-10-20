import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import bannerImg4 from "../../static/images/deliver.png";
import deliverImg from "../../static/images/deliver.svg";
import designImg from "../../static/images/design-icon.svg";
import bannerImg3 from "../../static/images/design_process.png";
import discoverImg from "../../static/images/discover-img.svg";
import bannerImg1 from "../../static/images/discover.png";
import ideateImg from "../../static/images/ideate-img.svg";
import bannerImg2 from "../../static/images/ideate.png";
import designHero from "../../static/images/invoation-img.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import { DesignProcessBannerLayout } from "../layouts/design/components/DesignProcessBannerLayout";
import { DesignProcessLayout } from "../layouts/design/components/DesignProcessLayout";

const DesignPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    title: "Design can be simple. That's why it is so complicated",
    img: designHero,
    subtext: "Words by one of the greatest graphic designers, Paul Rand.",
    description:
      "Conviction in our design process helps us come up with simple and delightful experiences.",
  };

  const designProcessData = {
    heading: "Our design process",
    desc: "At Tarento, we believe in the power of design thinking. We follow a four step design process to shape and guide our work and thoughts to improve the outcome.",
    cardData: [
      {
        title: "Discover",
        icon: discoverImg,
      },
      {
        title: "Ideate",
        icon: ideateImg,
      },
      {
        title: "Design",
        icon: designImg,
      },
      {
        title: "Deliver",
        icon: deliverImg,
      },
    ],
  };

  const designProcessBannerData = [
    {
      heading: "Discover",
      levelOneDesc:
        "In the discovery stage, we work closely with the client to define our understanding of the problem.",
      subHeading: "Primary and Secondary Research",
      levelTwoDesc:
        "To diverge and understand more about the problem area, we conduct user research and secondary research from any source available. We create personas to identify our users, map user journeys to find the pain points.",
      img: bannerImg1,
      bgGray: false,
    },
    {
      heading: "Ideate",
      levelOneDesc:
        "Ideation stage usually involves a lot of sketching, sticky notes, jotting concepts and brainstorming. We use any method that helps us stay creative while ideating.",
      subHeading: "Iterate Iterate Iterate",
      levelTwoDesc:
        "We like to make our hands dirty and express our concepts in the form of quick wires, sketches, information architecture etc. We constantly evaluate and evolve our concepts in this stage through iterations.",
      img: bannerImg2,
      bgGray: true,
    },
    {
      heading: "Design",
      levelOneDesc:
        "This is the stage when our solution takes multiple forms and goes through evaluations and get finalized.",
      subHeading: "Prototype- Test - Repeat",
      levelTwoDesc:
        "We create wireframes, paper prototypes, low fidelity digital prototypes and test them to crack the usability perspective.",
      levelThreeDesc:
        "Later, we make high fidelity prototypes and finalize the flow as well the visual style. The interactions and animations are also decided in this stage and are also shown in the prototype according to the nature of each project.",
      img: bannerImg3,
      bgGray: false,
    },
    {
      heading: "Deliver",
      levelOneDesc:
        "Designer’s work is not done yet. We hand off our designs with the same passion we designed them with, making it easy for the developer to focus on his/her job.",
      subHeading: "Working Handshake",
      levelTwoDesc:
        "We create wireframes, paper prototypes, low fidelity digital prototypes and test them to crack the usability perspective.",
      levelThreeDesc:
        "We deliver the pixel perfect visual designs, specifications , visual and experience style guide and an HTML prototype if it comes to that.",
      img: bannerImg4,
      bgGray: true,
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
        description={heroBannerData.description}
        img={heroBannerData.img}
        title={heroBannerData.title}
      />
      <DesignProcessLayout data={designProcessData} />
      <DesignProcessBannerLayout data={designProcessBannerData} />
      <Footer data={footerData} />
    </main>
  );
};

export default DesignPage;

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
