import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import cardImg1 from "../../static/images/lead/Idea_to_concept.png";
import sprintImg2 from "../../static/images/lead/Inception.svg";
import leadMap from "../../static/images/lead/Map.svg";
import sprintImg1 from "../../static/images/lead/Overhaul.svg";
import step1 from "../../static/images/lead/Step1.svg";
import step2 from "../../static/images/lead/Step2.svg";
import step3 from "../../static/images/lead/Step3.svg";
import leadImg from "../../static/images/lead/lead_hero_graphic.svg";
import leadLogo from "../../static/images/lead/lead_logo.png";
import cardImg5 from "../../static/images/lead/minimum_risks.png";
import cardImg3 from "../../static/images/lead/mvm.png";
import cardImg4 from "../../static/images/lead/tangible_results.png";
import cardImg2 from "../../static/images/lead/tech_design_business.png";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import {
  HeroSection,
  LeadCountries,
  LeadSprints,
  StepSection,
  VideoSection,
} from "../layouts/lead";
import { ContactUsLayout } from "../layouts/tech/components/ContactUsLayout";

const LeadPage: React.FC<PageProps> = () => {
  const leadCardList = [
    {
      title: "Idea to concept to clarity in just 4 weeks.",
      img: cardImg1,
      subText:
        "Your time to make idea a reality should be protected & LEAD process is specifically designed to do that.",
      bgColor: "light violet",
    },
    {
      title:
        "Tech, Design & Business thinking as a core premise of the solution.",
      img: cardImg2,
      subText:
        "Your success lies at the cross section of these three core innovation disciplines.",
      bgColor: "grey",
    },
    {
      title: "Minimum Viable Mindset.",
      img: cardImg3,
      subText:
        "Getting right things done is more important than getting things done hence effective prioritization is the key.",
      bgColor: "yellow",
    },
    {
      title: "Tangible Results.",
      img: cardImg4,
      subText:
        "LEAD results in an actionable outcome i.e. validated artefacts to give you enough confidence to take next step.",
      bgColor: "blue",
    },
    {
      title: "Minimizing Risks & Uncertainties.",
      img: cardImg5,
      subText:
        "You most riskiest assumptions, uncertainties get its due attention in LEAD to improve your chances of success.",
      bgColor: "violet",
    },
  ];

  const sprintCardData = [
    {
      heading: "Overhaul Sprint",
      description:
        "Improvement - With the purpose of redesign and revamp. while we focus on understanding the current landscape of the system to create a much advanced version of the same(technical, design and business) we make sure it stays relevant & familiar to the improve resistance-free adoption.",
      imgSrc: sprintImg1,
    },
    {
      heading: "Inception Sprint",
      description:
        "From The Scratch - To build new experiences ground-up. We take utmost care to dive deep into problem space by employing first principles to figure out the fundamental truths that goes ignored otherwise.",
      imgSrc: sprintImg2,
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
        title="Powering digital trasformation with innovation"
        img={leadImg}
        imgAltText="LEAD"
        subText="Smallest Nudge | Biggest Effect | Desired Impact"
        description="Design Thinking driven 'discovery & solutioning' program that helps businesses tackle complex problems and enables informed decision making in a short time. LEAD drives innovation by enabling cross functional thinking across 'business', 'technology' and 'design' using the best of 'Lean', 'Agile' and 'Design thinking'."
        logo={leadLogo}
        withLogo={true}
      />
      <HeroSection
        title="What’s the big LEAD?"
        description="Virtuous cycle of LEAD by nature is designed to encourage Clarity > Confidence > Control. A
        well executed LEAD sprint would ensure abundant clarity upfront regarding product
        development, that could give you enough confidence to sit with control behind the wheel of
        product dev cycle."
        cardList={leadCardList}
      />
      <StepSection
        title="Step 1: LEAD Process"
        description="When empathy meets expertise - In simple words, in design thinking we force ourselves to
        solve the problems our users really have, not the ones we imagine."
        imgSrc={step1}
        cardData={{
          heading: "LEAD process linchpin",
          keyPoints: [
            "Design thinking encourages us to live in our user’s reality.",
            "Lean prepares us to focus on value delivery with minimum viable mindset.",
            "Agile fosters necessary fluency, flexibility and feedback in execution.",
          ],
        }}
        bgGrey
      />
      <StepSection
        title="Step 2: LEAD Team"
        description="The power of cross fuctional collaboration - 3 key perspectives collaborate with clients to
        bring out a solution that is desirable from an end user perspective, feasible from a tech
        perspective and finally, viable from a business point of view."
        imgSrc={step2}
        cardData={{
          heading: "LEAD process linchpin",
          keyPoints: [
            "Most problems are messy in nature, so, more ways that we can think about, how to frame the problem and how to integrate different perspectives, richer our understanding of the problem will be & better we would be at solving it.",
            "Bringing in design and tecnical thinking from day one.",
          ],
        }}
      />
      <StepSection
        title="Step 3: LEAD Sprint Structure"
        description="We believe, a well executed LEAD journey has all the potential to acquaint us with the right
        destination and an effective path to reach it. We have put in enough care and passion to
        craft this journey by having been through this multiple times & having reflected on this
        several times."
        imgSrc={step3}
        cardData={{
          heading: "Our 4 LEAD workshops for the sprint structure",
          keyPoints: [
            "Pre-decided LEAD theme (Immersion, Ideation or Validation etc)",
            "Tailored & detailed agenda",
            "Cross-functional participation",
            "Collaborative execution",
          ],
        }}
        bgGrey
      />
      <VideoSection videoSrc="https://www.youtube.com/embed/jrxB_PPKMAQ" />
      <LeadCountries
        title="25+ LEAD Sprints, spaning over 5 countries"
        description="We have a long history of executing LEAD with interesting startups and some of the titans of
        the industry. With clients spanning the global market, across multiple industries in both
        enterprise and consumer space"
        imgSrc={leadMap}
        cardData={{
          heading: "Our Nordic-Indian expertise brings a global mindset.",
          keyPoints: [
            "Aritco",
            "Invo",
            "Murphy Oil",
            "Appilexure",
            "Finlead logiticks",
            "Finnish Swimming Federation",
            "Funmed",
            "Kuvakeskus-Hynninen",
            "Aadhaar UIDAI Unified App",
            "Muru Dining",
            "Puuni",
            "Simpleman",
            "Suppilog",
            "Unidor",
          ],
        }}
      />
      <LeadSprints
        title="A bit more about our different LEAD sprints"
        cardData={sprintCardData}
      />
      <ContactUsLayout
        heading="Are you interested?"
        desc="Whether you need to digitalize a business process, or create a new product from scratch or revamp your existing product/process, our LEAD sprint has got you covered.Get in touch with us to know more."
        CTAlabel="Contact Us"
        CTAlink="mailto:hello@tarento.com;"
        isCTAMail
      />
      <Footer data={footerData} />
    </main>
  );
};

export default LeadPage;

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
