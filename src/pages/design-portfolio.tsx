import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import techHero from "../../static/images/tech-hero.png";
import {
  AllOtherClients,
  AreYouInterested,
  HeroBanner,
  Showcase,
} from "../layouts/design-portfolio";
import { Footer } from "../components/footer/Footer";

const DesignPortfolio: React.FC<PageProps> = () => {
  const heroBannerData = {
    title:
      "Creativity is thinking up new things.  Innovation is doing new things.",
    img: techHero,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Maecenas sollicitudin porttitor gravida. Donec elementum tincidunt rutrum. Vivamus et ligula libero.",
  };

  const showCaseData = {
    heading: "Showcase",
    list: [
      {
        id: 0,
        title: "iGOT - Karmayogi​",
        description:
          "iGOT Karmayogi is an online solutioning platform, developed as an integral part of the Digital India stack for capacity building of all government employees. It will provide anytime-anywhere-any device learning to train about 30 million users which was hitherto not achievable through traditional measures.",
        imgSrc: "https://picsum.photos/seed/picsum/570/345",
        imgAlt: "iGOT - Karmayogi",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
      {
        id: 1,
        title: "mAadhaar",
        description:
          "With the goal of reaching out to large numbers of smartphone users, the new mAadhaar is released by the Unique Identification Authority of India. The App features an array of Aadhaar services and a personalized section for the Aadhaar holder who can carry their Aadhaar information in form of a soft copy, instead of carrying a physical copy all the time",
        imgSrc: "https://picsum.photos/seed/picsum/570/345",
        imgAlt: "mAadhaar",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
      {
        id: 2,
        title: "ASK Portal",
        description:
          "'Aadhaar Seva Kendra' or ASK is a single stop destination for all Aadhaar services for the residents. Managed directly by UIDAI, the ASK offer dedicated Aadhaar enrolment and update services to residents in a state-of-the-art environment.",
        imgSrc: "",
        imgAlt: "",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
    ],
  };

  const allOtherClientsData = {
    heading: "All other clients",
    ctaText: "Load more",
    list: [
      {
        id: 0,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "CIBoost",
        tag: "Real estate",
        tagVariant: "blue",
        title: "CIBoost",
        description:
          "CIBoost is a collective intelligence platform.  A team efficiency enhancement tool that will revolutionize team performance as we know it! Built on a methodology that has been proved to increase performance by up to 2x.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 1,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Tasks",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Tasks",
        description:
          "Tasks is designed to make you more productive by better managing your time. This is based on the technique followed by the legendary General and former president of the the United States Dwight D. Eisenhower. This method was made popular by Stephen Covey in his popular title “The 7 Habits of Highly Effective People”.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 2,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Invo",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Invo",
        description:
          "Invo simplifies the employees' everyday life, automates routines and structures all information through one user-friendly workspace. We worked on Invo Connect which is a seamlessly integrated solution for Microsoft Office 365. Using artificial intelligence, the application allows you to search for and save the files you receive by email, directly from your Outlook inbox.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 3,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "My match box",
        tag: "Real estate",
        tagVariant: "blue",
        title: "My match box",
        description:
          "The real time booking app  helps to rent out hot desks,meeting rooms and boardrooms on hourly basis.The listed properties are equipped with wifi ,seating and other essential services required for a working environment",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 4,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Samtrygg",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Samtrygg",
        description:
          "Samtrygg is a marketplace for secure housing rental. Samtrygg's model provides a safer alternative to tenants and landlords by giving landlords a payment guarantee, second-hand insurance and secure leases. Samtrygg takes an active role in helping both parties follow the rules that have been set and act as a financial intermediary to minimize the risk of fraud",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 5,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Property Guru",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Property Guru",
        description:
          "PropertyGuru Group is Southeast Asia’s pioneering and most trusted property  technology company. It aims at making finding a home a straightforward and  transparent process for everyone involved. This project involved redesign of the agent performance management system",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 6,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Suppilog",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Suppilog",
        description:
          "Suppilog is digital whole seller that brings the benefits of sharing economy into B2B trading and was titled the 'Uber of consumer good business' by the leading Finnish business newspaper Kauppalehti. Suppilog enables direct selling of goods from marketers to retailers over all channels and categories. The business ecosystems consists of Suppilog.fi trading platform, integrated logistics partners, companies that sell and buy consumer products.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 7,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "LuLu",
        tag: "Real estate",
        tagVariant: "blue",
        title: "LuLu",
        description:
          "The platform provides the customers with the choice  to shop for electronics,decor,grocery etc from the comfort of their homes.It also serves as a platform to address consumer grievances and provide real time offers and news .It also supports  hasslefree online payment methods.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 8,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "BPL",
        tag: "Real estate",
        tagVariant: "blue",
        title: "BPL",
        description:
          "Focused leader in consumer electronics and healthcare equipment",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
    ],
  };

  const areYouInterestedData = {
    heading: "Are you interested?",
    desc: "Innovation is now more important than ever in Today’s world. To stand out ina crowded market, business leaders need to focus. on different ways they can keep up with evolving demand.",
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
      <HeroBanner heroBannerData={heroBannerData} />
      <Showcase data={showCaseData} />
      <AllOtherClients data={allOtherClientsData} />
      <AreYouInterested data={areYouInterestedData} />
      <Footer data={footerData} />
    </main>
  );
};

export default DesignPortfolio;

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
