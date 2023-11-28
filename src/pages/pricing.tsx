import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { Footer } from "../components/footer/Footer";
import { HeroText, PricingList } from "../layouts/pricing";
import { ContactUsLayout } from "../layouts/pricing/components/ContactUsLayout";

const PricingPage: React.FC<PageProps> = () => {
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
  const pricingListData = [
    {
      title: "RAIN",
      logo: "https://nxt.tarento.com/img/rain_with_circle.svg",
      description: "Real time analytics and insights from your business data.",
      basePrice: "€25K",
      supportPrice: "€3000 per year",
      supportText: "Support",
      supportSubText: "(Optional)",
      baseList: ["Full perpetual license", "100 hours for implementation"],
      supportList: ["Security fixes", "  Bug fixes", "OS compatibility"],
    },
    {
      title: "BOLT",
      logo: "https://nxt.tarento.com/img/rain_with_circle.svg",
      description: "Real time analytics and insights from your business data.",
      basePrice: "€25K",
      supportPrice: "€3000 per year",
      supportText: "Support",
      supportSubText: "(Optional)",
      baseList: ["Full perpetual license", "100 hours for implementation"],
      supportList: ["Security fixes", "  Bug fixes", "OS compatibility"],
    },
    {
      title: "RAIN",
      logo: "https://nxt.tarento.com/img/rain_with_circle.svg",
      description: "Real time analytics and insights from your business data.",
      basePrice: "€25K",
      supportPrice: "€3000 per year",
      supportText: "Support",
      supportSubText: "(Optional)",
      baseList: ["Full perpetual license", "100 hours for implementation"],
      supportList: ["Security fixes", "Bug fixes", "OS compatibility"],
    },
    {
      title: "THOR Chatbot(SaaS)",
      logo: "https://nxt.tarento.com/img/chatbot.svg",
      description:
        "Intelligent assistant for your business. Multi channel domain specific chatbot to engage your users.",
      basePrice: "€15K",
      supportPrice: "€650 per month",
      supportText: "Subscription",
      supportSubText: "",
      baseList: [
        "25 scenarios",
        "More than 80% accuracy in 4 weeks",
        "2 weeks time to market",
      ],
      supportList: ["Up to 1 Million interactions per month"],
    },
    {
      title: "Pulz",
      logo: "https://nxt.tarento.com/img/aurora_with_circle.svg",
      description:
        "Know the pulse of your customer with Pulz feedback & micro survey framework",
      basePrice: "€15K",
      supportPrice: "€28 per hour",
      supportText: "Support",
      supportSubText: "(Optional)",
      baseList: [" Full perpetual license"],
      supportList: [" Security fixes", "Bug fixes", "OS compatibility"],
    },
  ];

  const bundlesData = [
    {
      title: "RAIN+BOLT",
      logo: "https://nxt.tarento.com/img/rain+bolt.svg",
      description: "Real time analytics and insights from your business data.",
      basePrice: "€25K",
      supportPrice: "€3000 per year",
      supportText: "Support",
      supportSubText: "(Optional)",
      baseList: ["Full perpetual license", "100 hours for implementation"],
      supportList: ["Security fixes", "  Bug fixes", "OS compatibility"],
    },
    {
      title: "RAIN+BOLT +THOR",
      logo: "https://nxt.tarento.com/img/rain+bolt+thor.svg",
      description: "Real time analytics and insights from your business data.",
      basePrice: "€25K",
      supportPrice: "€3000 per year",
      supportText: "Support",
      supportSubText: "(Optional)",
      baseList: ["Full perpetual license", "100 hours for implementation"],
      supportList: ["Security fixes", "  Bug fixes", "OS compatibility"],
    },
    {
      title: "RAIN+BOLT +THOR+",
      spTitle: "LEAD",
      logo: "https://nxt.tarento.com/img/rain+bolt+thor.svg",
      baseList: ["Full perpetual license", "4 Lead Workshops"],
      withBtn: true,
      CTAlabel: "Contact us",
      CTAlink: "mailto:hello@tarento.com;",
    },
  ];

  return (
    <main className="">
      <HeroText
        title={"The right price for you"}
        desc={
          "At NXT we try to bring Innovation to everyone. Make cutting edge technology more affordable and accessible to all. We apply AI to solve real world problems, we enable businesses to leverage data and make informed decisions. We help you scale with cutting edge technology, design and innovation."
        }
      />
      <PricingList
        heading={"Accelerators"}
        pricingData={pricingListData}
        additionalInfo={
          "*Additional customization's and integration effort at €28 per hour"
        }
      />
      <PricingList
        heading={"Bundles"}
        pricingData={bundlesData}
        additionalInfo=""
      />
      <ContactUsLayout
        heading1="Are you interested?"
        desc1="Do these accelerators look interesting to you? Get in touch with us to know how to buy any of them. Click on the button below to send us a mail."
        CTAlabel1="Contact us"
        CTAlink1="mailto:hello@tarento.com;"
        heading2="Are you a Reseller?"
        desc2="We collaborate with resellers around the world. Want to join our community? Contact us to know more about us and what we offer."
        CTAlabel2="Contact us"
        CTAlink2="mailto:hello@tarento.com;"
      />
      <Footer data={footerData} />
    </main>
  );
};

export default PricingPage;

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
