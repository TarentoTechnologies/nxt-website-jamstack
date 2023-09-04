import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HeroBanner } from "../components/banners/HeroBanner";
import mainLogo from "../../static/images/logo-main.svg";
import headLogo from "../../static/images/logo-head.svg";
import { TriCardLayout } from "../layouts/home/components/TriCardLayout";
import { PyramidBanner } from "../components/banners/PyramidBanner";
import pyramidImage from "../../static/images/pyramid.svg";
import { ProductCardLayout } from "../layouts/home/components/ProductCardLayout";
import { Footer } from "../components/footer/Footer";
import NXTlogo from "../../static/images/logo-inner.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import boltImg from "../../static/images/bolt_thumb.svg";
import boltLogo from "../../static/images/bolt_dark.svg";
import rainImg from "../../static/images/rain_thumb.svg";
import rainLogo from "../../static/images/rain.svg";
import thorImg from "../../static/images/thor_thumb.svg";
import thorLogo from "../../static/images/thor_dark.svg";
import govTechImg from "../../static/images/govtech_thumb.svg";
import govTechLogo from "../../static/images/govTech_icon.svg";
import techLogo from "../../static/images/technology.svg";
import designLogo from "../../static/images/design.svg";
import innovationLogo from "../../static/images/inovation.svg";

const IndexPage: React.FC<PageProps> = () => {
  const triCardData = [
    {
      title: "TECHNOLOGY",
      logo: techLogo,
      bgColor: "blue",
    },
    {
      title: "DESIGN",
      logo: designLogo,
      bgColor: "green",
    },
    {
      title: "INNOVATION",
      logo: innovationLogo,
      bgColor: "violet",
    },
  ];

  const productCardData = [
    {
      title: "BOLT - Data platform",
      bgImg: boltImg,
      logo: boltLogo,
    },
    {
      title: "RAIN - Analytics",
      bgImg: rainImg,
      logo: rainLogo,
    },
    {
      title: "THOR - AI Assistant & Chatbots",
      bgImg: thorImg,
      logo: thorLogo,
    },
    {
      title: "Gov Tech",
      bgImg: govTechImg,
      logo: govTechLogo,
    },
    {
      title: "Customer Experience Pack",
      bgImg: govTechImg,
      logo: govTechLogo,
    },
  ];

  return (
    <main className="">
      <HeroBanner logoMain={mainLogo} logoHead={headLogo} />
      <TriCardLayout data={triCardData} />
      <PyramidBanner
        title={"Data Pyramid"}
        description={
          "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform."
        }
        pyramidImg={pyramidImage}
        btnDescr="Read more"
      />
      <ProductCardLayout data={productCardData} />
      <Footer nxtLogoImg={NXTlogo} companyLogoImg={TarentoLogo} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>::NXT Tarento - Technology design and Innovation::</title>
  </>
);
