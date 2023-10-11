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
import { HeroBannerForAccelerators } from "../components/banners/HeroBannerForAccelerators";
import { KeyInsights } from "../layouts/data-platform";

const DataPlatformPage: React.FC<PageProps> = () => {
  const keyInsightsData = {
    title: "Key Insights",
    list: [
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
      {
        imgSrc: "https://nxt.tarento.com/img/data-img01.jpg",
        imgCaption: "CXO Insights Platform",
      },
    ],
  };

  return (
    <main className="">
      <HeroBannerForAccelerators
        data={{
          title: "Data. Information. Insight.",

          img: "https://nxt.tarento.com/img/data-platform.jpg",
          imgAltText: "data-platform",
          subText: " Supercharge your business with the power of Data.",
          description:
            " Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
          logosrc: "https://nxt.tarento.com/img/bolt_light.svg",
        }}
      />
      <KeyInsights data={keyInsightsData} />
    </main>
  );
};

export default DataPlatformPage;

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
