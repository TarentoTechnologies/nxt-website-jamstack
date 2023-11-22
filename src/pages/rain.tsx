import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import rainHero from "../../static/images/ai-img.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import featureImg1 from "../../static/images/features 1.jpg";
import featureImg2 from "../../static/images/features 2.jpg";
import featureImg3 from "../../static/images/features 3.jpg";
import featureImg4 from "../../static/images/features 4.jpg";
import featureImg5 from "../../static/images/features 5.jpg";
import featureImg6 from "../../static/images/features 6.jpg";
import NXTlogo from "../../static/images/logo-inner.svg";
import rainLogo from "../../static/images/rain.svg";
import rainData from "../../static/images/rain_data.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import {
  FeaturesLayout,
  ReferencesLayout,
  WorkingLayout,
} from "../layouts/rain";

const RainPage: React.FC<PageProps> = () => {
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
        title="Realtime analytics and insights"
        img={rainHero}
        subText="Supercharge your business with the power of Data."
        description="Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform."
        withLogo={true}
        logo={rainLogo}
      />
      <WorkingLayout
        title="How does RAIN work?"
        desc="Collect data from diverse sources, process and visualize. Make
relevant visualizations available to the users based on their roles on
preferred channels - Mobile or Web."
        img={rainData}
      />
      <FeaturesLayout
        title={"Features"}
        cardsData={[
          {
            heading:
              "Create your own dashboards with your favourite visualization",
            subText:
              "Visualizations ranging from a simple bar chart to map visualizations. User has the freedom to create multiple dashboards with different collections of visulizations.",
            img: featureImg1,
          },
          {
            heading: "Dig deep using filters, drill downs and more",
            subText:
              "Make more of the data and analyse by using default date filter and custom filters, drill-downs and drill - throughs.",
            img: featureImg2,
          },
          {
            heading: "Manage access, visibility and much more through admin",
            subText:
              "An integrated Admin interface is available where user roles, access, dashboard layout, filters, reports etc. can be controlled.",
            img: featureImg3,
          },
          {
            heading: "Create forms to source data",
            subText:
              "Users can create forms which can collect different types of data and the same data can be fetched by the data pipelines to show realtime visualizations.",
            img: featureImg4,
          },
          {
            heading: "Create, download and share reports and visualizations",
            subText:
              "User can create reports, download or share visualizations/reports in multiple formats.",
            img: featureImg5,
          },
          {
            heading: "Customize and make use of themes",
            subText:
              "RAIN comes by default in light and dark theme. It has been designed to enable quick and easy customization as well.",
            img: featureImg6,
          },
        ]}
      />
      <ReferencesLayout
        title={"References"}
        cardsData={[
          {
            heading: "eGovernments",
            p1: "A Decision Support System (DSS) is a composite tool that collects, organizes and analyzes business data to facilitate quality decision-making for management, operations and planning.",
            p2: "Using RAIN Accelerator, Distributed Data from Multiple Data Sources are visualized on a Classic Intuitive Design which has Role Based Access, Custom Logical Filters, Insights, Archive Data Comparisons, Mobile Responsive UI and an option to share and download.",
            p3: "With a Data Pipeline as its backbone, instant real-time insightful data of eGov's Smart City Suite was visualized to enable decision making more targeted and effective.",
          },
          {
            heading: "iGOT Dashboards",
            p1: "Using RAIN platform (Data Pipeline & Analytics System), we consolidated data from different sources to single source of data assets which would be more accessible, actionable, auditable source of reference for future operations (The very first turbocharge of data was done with 300,000 records from multiple sources).",
            p2: "At this point, we used our custom visualization engine capabilities of RAIN to draw effective visualization which can give authorities a most detailed, clear and vivid picture of health workers and professionals getting trained on Integrated Government Online Training (iGOT) platform",
          },
        ]}
      />
      <Footer data={footerData} />
    </main>
  );
};

export default RainPage;

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
