import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import rainHero from "../../static/images/ai-img.svg";
import rainLogo from "../../static/images/rain.svg";

const RainPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    title: "Realtime analytics and insights",
    img: rainHero,
    subtext: "Supercharge your business with the power of Data.",
    description:
      "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
    withLogo: true,
    logo: rainLogo,
  };

  return (
    <main className="">
      <HeroBannerForTDI data={heroBannerData} />
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
