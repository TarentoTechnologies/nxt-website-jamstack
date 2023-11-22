import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import boltImg from "../../static/images/bolt_thumb.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import leadBgImg from "../../static/images/innovation/Bitmap.jpg";
import forgingInnovation from "../../static/images/innovation/forging_innovation.svg";
import innovationHero from "../../static/images/innovation/innovation_hero.svg";
import leadImg from "../../static/images/innovation/lead.svg";
import innoStoryImg from "../../static/images/innovation/map.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import boltLogoSecondary from "../../static/images/tech_bolt_dark.svg";
import rainImg from "../../static/images/tech_rain_dark.svg";
import thorImg from "../../static/images/tech_thor_dark.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { StoryBanner } from "../components/banners/StoryBanner";
import { Footer } from "../components/footer/Footer";
import { ForgingInnovationLayout } from "../layouts/innovation/components/ForgingInnovationLayout";
import { AcceleratorsLayout } from "../layouts/tech/components/AcceleratorsLayout";
import { ContactUsLayout } from "../layouts/tech/components/ContactUsLayout";

const InnovationPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    title: "Art of seeing what is invisible to others",
    img: innovationHero,
    subtext: "NXT is all about innovation. Swimming downstream is no fun.",
    description:
      "Conforming to present is not our cup of tea. we love to challenge the future and keep innovation.",
  };

  const forgingInnovationData = {
    heading: "Forging Innovation",
    desc: "Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Learn more about the ways companies today can innovate and how innovation can take your business to the next level.",
    img: forgingInnovation,
    cardData: [
      {
        title: "TECHNOLOGY",
        desc: "Our tech stack is crafted compact to abide by our technology serving principles to build for the future!",
        bgColor: "blue",
      },
      {
        title: "BUSINESS",
        desc: "Deep-rooted analysis and strategic planning helps to turn complex ideas into reality.",
        bgColor: "green",
      },
      {
        title: "DESIGN",
        desc: "Conviction in our design process helps us come up with simple and delightful experiences.",
        bgColor: "pink",
      },
    ],
  };

  const innovationStoryBannerData = {
    variant: "innovation",
    title: "Innovation Story",
    subTitle: "",
    bgImg: {},
    image: innoStoryImg,
    subText: {
      LevelOneHeading: "Analytics dashboard for India's covid response",
      LevelTwoHeading: "",
      LevelOneDesc:
        "During the initial stages of the pandemic, India faced an unprecedented challenge in covid management with its diverse and massive population. Tarento was tasked with enabling country leadership with data driven decision making capabilities in a very short span of time.",
      LevelTwoDesc:
        "NXT took up the challenge and deployed our technology accelerators, leveraged GIS data from ISRO and used data from Ministry of health and Ministry of education and created a realtime dashboard that showcases cases, recovery, and fatality data, Assets and trained resources data by location. Data was granular at district level and aggregated to state and country level. Access privileges were given by state and at country level. First version of the platform was developed and launched in 5 days.",
      LevelThreeDesc:
        "The platform enabled the government to view the data on a daily basis and by geography and formulate policy and mobilization decisions with ease. Visualizations from the platform were used for daily briefing for the Prime minister.",
    },
    withCTA: false,
    CTAlabel: "Find out more",
    CTAlink: "mailto:hello@tarento.com;",
  };

  const leadStoryBannerData = {
    variant: "lead",
    title: "LEAD Program",
    subTitle: "LEAN . AGILE . DESIGN THINKING",
    bgImg: leadBgImg,
    image: leadImg,
    subText: {
      LevelOneHeading: "",
      LevelTwoHeading: "",
      LevelOneDesc:
        "Design Thinking driven 'discovery & solutioning' program that helps businesses tackle complex problems and enables informed decision making in a short time.",
      LevelTwoDesc:
        "LEAD drives innovation by enabling cross functional thinking across 'business', 'technology' and 'design' using the best of 'Lean', 'Agile' and 'Design thinking'.",
      LevelThreeDesc: "",
    },
    withCTA: true,
    CTAlabel: "Find out more",
    CTAlink: "lead.html",
  };

  const acceleratorsLayoutData = {
    heading: "Accelerators",
    cardData: [
      {
        title: "BOLT - Data platform",
        bgImg: boltImg,
        logo: boltLogoSecondary,
      },
      {
        title: "Rain - Analytics",
        bgImg: boltImg,
        logo: rainImg,
      },
      {
        title: "THOR - AI Assistant & Chatbots",
        bgImg: boltImg,
        logo: thorImg,
      },
      {
        title: "Pulz",
        bgImg: boltImg,
        logo: thorImg,
      },
    ],
  };

  const contactUsData = {
    heading: "Are you interested?",
    desc: "Does this pack look interesting to you? Get in touch with us to know more. Send us a mail with the subject 'Technology' by clicking the button below",
    CTAlabel: "Contact us",
    CTAlink: "mailto:hello@tarento.com;",
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
      <HeroBannerForTDI
        description={heroBannerData.description}
        img={heroBannerData.img}
        title={heroBannerData.title}
      />
      <ForgingInnovationLayout data={forgingInnovationData} />
      <StoryBanner data={innovationStoryBannerData} />
      <StoryBanner data={leadStoryBannerData} />
      <AcceleratorsLayout data={acceleratorsLayoutData} />
      <ContactUsLayout data={contactUsData} />
      <Footer data={footerData} />
    </main>
  );
};

export default InnovationPage;

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
