import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import techHero from "../../static/images/tech-hero.png";
import rainLogo from "../../static/images/rain.svg";

const RainPage: React.FC<PageProps> = () => {
  const heroBannerData = {
    title:
      "Technology, like art, is a soaring exercise of the human imagination",
    img: techHero,
    subtext: "Words by one of the greatest sociologists - Daniel Bell",
    description:
      "Technology is akin to language in the world of contributing ideas.It's a key arsenal for innovation.",
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
