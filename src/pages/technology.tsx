import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { TechPrinciplesLayout } from "../layouts/tech/components/TechPrinciplesLayout";
import { StoryBanner } from "../components/banners/StoryBanner";
import { TechStackLayout } from "../layouts/tech/components/TechStackLayout";
import { AcceleratorsLayout } from "../layouts/tech/components/AcceleratorsLayout";
import { ContactUsLayout } from "../layouts/tech/components/ContactUsLayout";
import { Footer } from "../components/footer/Footer";
import techHero from "../../static/images/tech-hero.png";
import pCard1 from "../../static/images/tech-1.png";
import pCard2 from "../../static/images/tech-2.png";
import pCard3 from "../../static/images/tech-3.png";
import pCard4 from "../../static/images/tech-4.png";
import pCard5 from "../../static/images/tech-5.png";
import pCard6 from "../../static/images/tech-6.png";
import techStory from "../../static/images/tech-solution.png";
import techStack1 from "../../static/images/technology/Bitmap.png";
import techStack2 from "../../static/images/technology/s2.png";
import techStack3 from "../../static/images/technology/3.png";
import techStack4 from "../../static/images/technology/4.png";
import techStack5 from "../../static/images/technology/5.png";
import techStack6 from "../../static/images/technology/6.png";
import techStack7 from "../../static/images/technology/7.png";
import techStack8 from "../../static/images/technology/8.png";
import techStack9 from "../../static/images/technology/9.png";
import techStack10 from "../../static/images/technology/10.png";
import techStack11 from "../../static/images/technology/11.svg";
import techStack12 from "../../static/images/technology/12.png";
import techStack13 from "../../static/images/technology/13.png";
import techStack14 from "../../static/images/technology/14.png";
import techStack15 from "../../static/images/technology/15.png";
import techStack16 from "../../static/images/technology/16.png";
import techStack17 from "../../static/images/technology/17.png";
import techStack18 from "../../static/images/technology/18.png";
import techStack19 from "../../static/images/technology/19.png";
import techStack20 from "../../static/images/technology/20.png";
import techStack21 from "../../static/images/technology/21.png";
import techStack22 from "../../static/images/technology/22.png";
import techStack24 from "../../static/images/technology/24.png";
import techStack25 from "../../static/images/technology/25.png";
import techStack26 from "../../static/images/technology/26.png";
import techStack27 from "../../static/images/technology/27.png";
import techStack28 from "../../static/images/technology/28.png";
import techStack29 from "../../static/images/technology/29.png";
import techStack30 from "../../static/images/technology/30.png";
import techStack31 from "../../static/images/technology/31.png";
import techStack32 from "../../static/images/technology/32.png";
import techStack33 from "../../static/images/technology/33.png";
import techStack34 from "../../static/images/technology/34.png";
import techStack35 from "../../static/images/technology/35.png";
import techStack36 from "../../static/images/technology/36.png";
import techStack37 from "../../static/images/technology/37.svg";
import boltLogoSecondary from "../../static/images/tech_bolt_dark.svg";
import boltImg from "../../static/images/bolt_thumb.svg";
import rainImg from "../../static/images/tech_rain_dark.svg";
import thorImg from "../../static/images/tech_thor_dark.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import TarentoLogo from "../../static/images/company-logo.svg";

const TechnologyPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    title:
      "Technology, like art, is a soaring exercise of the human imagination",
    img: techHero,
    subtext: "Words by one of the greatest sociologists - Daniel Bell",
    description:
      "Technology is akin to language in the world of contributing ideas.It's a key arsenal for innovation.",
  };

  const techPrinciplesData = {
    heading: "Our Technology Principles",
    desc: "Our tech stack is crafted compact to abide by our technology serving principles to build for the future!",
    subHeading: "The key features that make our tech stack distinguishable :",
    cardData: [
      {
        title: "Built for scale",
        logo: pCard1,
        bgColor: "green",
      },
      {
        title: "Generalised",
        logo: pCard2,
        bgColor: "red",
      },
      {
        title: "Extensible",
        logo: pCard3,
        bgColor: "orange",
      },
      {
        title: "Open",
        logo: pCard4,
        bgColor: "blue",
      },
      {
        title: "Cutting edge",
        logo: pCard5,
        bgColor: "italianBlue",
      },
      {
        title: "Affordable",
        logo: pCard6,
        bgColor: "violet",
      },
    ],
  };

  const techStoryBannerData = {
    variant: "tech",
    title: "Tech Solutions",
    image: techStory,
    subText: {
      LevelOneHeading: "Customer Experience Pack",
      LevelTwoHeading: "Empowering customer experience with data & Insights",
      LevelOneDesc:
        "Aurora customer experience platform brings in the best of data engineering, analytics and user experience design to enable a superior customer support experience.",
    },
    withCTA: true,
    CTAlabel: "Find out more",
    CTAlink: "mailto:hello@tarento.com;",
  };

  const techStackData = {
    heading: "Tech Stack",
    logoList: [
      {
        name: "Nginx",
        logo: techStack1,
      },
      {
        name: "Node BB",
        logo: techStack2,
      },
      {
        name: "redis",
        logo: techStack3,
      },
      {
        name: "node js",
        logo: techStack4,
      },
      {
        name: "angular",
        logo: techStack5,
      },
      {
        name: "grafana",
        logo: techStack6,
      },
      {
        name: "keycloak",
        logo: techStack7,
      },
      {
        name: "prometheus",
        logo: techStack8,
      },
      {
        name: "html css js",
        logo: techStack9,
      },
      {
        name: "play",
        logo: techStack10,
      },
      {
        name: "akka",
        logo: techStack11,
      },
      {
        name: "airflow",
        logo: techStack12,
      },
      {
        name: "scala",
        logo: techStack13,
      },
      {
        name: "neo4j",
        logo: techStack14,
      },
      {
        name: "spring",
        logo: techStack15,
      },
      {
        name: "flutter",
        logo: techStack16,
      },
      {
        name: "jenkins",
        logo: techStack17,
      },
      {
        name: "kong",
        logo: techStack18,
      },
      {
        name: "superset",
        logo: techStack19,
      },
      {
        name: "spark",
        logo: techStack20,
      },
      {
        name: "kafka",
        logo: techStack21,
      },
      {
        name: "python",
        logo: techStack22,
      },
      {
        name: "druid",
        logo: techStack24,
      },
      {
        name: "flink",
        logo: techStack25,
      },
      {
        name: "kubernetes",
        logo: techStack26,
      },
      {
        name: "docker",
        logo: techStack27,
      },
      {
        name: "postgresql",
        logo: techStack28,
      },
      {
        name: "circle ci",
        logo: techStack29,
      },
      {
        name: "rasa",
        logo: techStack30,
      },
      {
        name: "cassandra",
        logo: techStack31,
      },
      {
        name: "elasticserach",
        logo: techStack32,
      },
      {
        name: "ansible",
        logo: techStack33,
      },
      {
        name: "kibana",
        logo: techStack34,
      },
      {
        name: "java",
        logo: techStack35,
      },
      {
        name: "react",
        logo: techStack36,
      },
      {
        name: "sonarqube",
        logo: techStack37,
      },
    ],
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
      <HeroBannerForTDI data={heroBannerData} />
      <TechPrinciplesLayout data={techPrinciplesData} />
      <StoryBanner data={techStoryBannerData} />
      <TechStackLayout data={techStackData} />
      <AcceleratorsLayout data={acceleratorsLayoutData} />
      <ContactUsLayout data={contactUsData} />
      <Footer data={footerData} />
    </main>
  );
};

export default TechnologyPage;

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
