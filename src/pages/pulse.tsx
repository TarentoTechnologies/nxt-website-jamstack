import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import heroImg from "../../static/images/pulseImg.jpg";
import pulseProcessImg from "../../static/images/pulseProcess.jpg";
import pulseQRcode from "../../static/images/pulse_QRCode.jpg";
import keyImg1 from "../../static/images/pulse_img01.png";
import keyImg2 from "../../static/images/pulse_img02.png";
import keyImg3 from "../../static/images/pulse_img03.png";
import keyImg4 from "../../static/images/pulse_img04.png";
import keyImg5 from "../../static/images/pulse_img05.png";
import keyImg6 from "../../static/images/pulse_img06.png";
import keyImg7 from "../../static/images/pulse_img07.png";
import keyImg8 from "../../static/images/pulse_img08.png";
import { HeroBannerForAccelerators } from "../components/banners/HeroBannerForAccelerators";
import { Footer } from "../components/footer/Footer";
import {
  GetInTouch,
  HowItWorks,
  KeyInsights,
  Plans,
} from "../layouts/pulse/index";

const PulsePage: React.FC<PageProps> = () => {
  const heroBannerData = {
    title: "Know the Pulse of your Customer",
    img: heroImg,
    description:
      "Make Informed decisions. Take your business to the next level.",
  };

  const keyInsightsCards = [
    {
      imgSrc: keyImg1,
      imgAltText: "trend",
    },
    {
      imgSrc: keyImg2,
      imgAltText: "overall",
    },
    {
      imgSrc: keyImg3,
      imgAltText: "Week day trend",
    },
    {
      imgSrc: keyImg4,
      imgAltText: "pattern",
    },
    {
      imgSrc: keyImg5,
      imgAltText: "distribution",
    },
    {
      imgSrc: keyImg6,
      imgAltText: "customer feedback",
    },
    {
      imgSrc: keyImg7,
      imgAltText: "top 10 stores",
    },
    {
      imgSrc: keyImg8,
      imgAltText: "bottom 10 stores",
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
      <HeroBannerForAccelerators data={heroBannerData} />
      <HowItWorks
        heading="How it Works"
        imgSrc={pulseProcessImg}
        levelOneText="Collect data and feedback from your customers across geography"
        levelTwoText="Process and generate insights in realtime"
        levelThreeText="Make the insights available at your fingerprints so that you can make right decisions, act proactively"
      />
      <KeyInsights heading="Key Insights" cardList={keyInsightsCards} />
      <Plans
        heading="Plans for every business"
        subText="Plans that are tailored to suit big, established business as well as young fast growing ones."
        levelOnePlan={{
          title: "Fully on premise",
          list: [
            "Flexibility to host the platform fully in-house",
            "Customise and extend to your business need",
            "Total control of your data",
            "Perpetual licence option for total freedom",
            "Suitable for large businesses",
          ],
        }}
        levelTwoPlan={{
          title: "As a Service",
          list: [
            "On board with least hassles",
            "No worries of infrastructure",
            "Apps that meet your brand",
            "Onboard more stores as needed",
            "Suitable for young, fast growing businesses",
          ],
        }}
      />
      <GetInTouch
        heading="Get in Touch"
        subText={
          '<p>Onboard and take you business to the next level.<br> Send a message to <b><a href="mailto:hello@tarento.com?subject=Pulse Demo" rel="canonical">hello@tarento.com</a></b> and we will contact you within one business day. </p>'
        }
        btnLabel="Request a Demo"
        btnLink="mailto:hello@tarento.com?subject=Pulse Demo"
        imgSrc={pulseQRcode}
      />
      <Footer data={footerData} />
    </main>
  );
};

export default PulsePage;

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
