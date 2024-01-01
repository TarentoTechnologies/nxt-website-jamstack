import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { HowItWorks, Stories, VideoSection } from "../layouts/aurora";
import { FooterSection } from "../layouts/common";
import { InternalApps } from "../layouts/internal-apps";
import { FeaturesLayout } from "../layouts/rain";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface AppsPageProps {
  data: any;
}

const AppsPage: React.FC<PageProps> = ({ data }: AppsPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        title={data[currentLang]?.HeroBanner?.Title}
        subText={data[currentLang]?.HeroBanner?.SubText}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Img?.alternativeText}
        subTextBold
      />
      <InternalApps
        title={data[currentLang]?.SectionTitle}
        appData={data[currentLang]?.Applications}
      />
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query AppsPage {
    en: strapiNxtApplication(locale: { eq: "en" }) {
      HeroBanner {
        id
        Title
        SubText
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Img {
          alternativeText
          caption
          localFile {
            url
          }
        }
        withLogo
        isImage
      }
      Applications {
        id
        AppTitle
        AppDescription
        Logo {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        iOSAppLInk
        AndoridAppLink {
          localFile {
            url
          }
        }
      }
      SectionTitle
    }
    enFooterSection: strapiFooterSection(locale: { eq: "en" }) {
      id
      Footer {
        id
        PrimaryLogo {
          alternativeText
          caption
          localFile {
            url
          }
        }
        SecondaryLogo {
          alternativeText
          caption
          localFile {
            url
          }
        }
        PrimaryDescription {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        PrimaryLevelOneHeading
        PrimaryLevelOneList {
          id
          Label
          Link
        }
        PrimaryLevelTwoHeading
        PrimaryLevelTwoList {
          id
          Link
          Label
        }
        SecondaryLevelOneHeading
        SecondaryLevelOneList {
          id
          Link
          Label
        }
        SecondaryLevelTwoHeading
        SecondaryLevelTwoList {
          id
          Link
          Label
        }
        Copyright
        PrimaryLogoLink
        SecondaryLogoLink
      }
    }
  }
`;

export default AppsPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Apps::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}apps/`} />
    <meta name="title" content="NXT Tarento - Apps" />
    <meta
      name="description"
      content="Your one-stop destination for exclusive app installations and resources tailored specifically for our valued team members."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${process.env.GATSBY_SITE_URL}apps/`} />
    <meta property="og:title" content="NXT Tarento - Apps" />
    <meta
      property="og:description"
      content="Your one-stop destination for exclusive app installations and resources tailored specifically for our valued team members."
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/4af750352a6c177c7f80d9ed351d244d/6998c/tech_solution_d8d031719f.png`}
    />
    <meta property="og:site_name" content="NXT Apps" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}apps/`}
    />
    <meta property="twitter:title" content="NXT Tarento - Apps" />
    <meta
      property="twitter:description"
      content="Your one-stop destination for exclusive app installations and resources tailored specifically for our valued team members."
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/4af750352a6c177c7f80d9ed351d244d/6998c/tech_solution_d8d031719f.png`}
    />
  </>
);
