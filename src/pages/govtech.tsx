import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import { ContactUsLayout, DigitalPlatform } from "../layouts/govtech";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface GovTechPageProps {
  data: any;
}

const GovTechPage: React.FC<PageProps> = ({ data }: GovTechPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#govtechMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        title={data[currentLang]?.HeroBanner?.Title}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Img?.alternativeText}
        description={data[currentLang]?.HeroBanner?.Description}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
        govTech
      />
      <section id="govtechMain">
        <DigitalPlatform
          heading={data[currentLang]?.DigitalPlatformsTitle}
          desc={data[currentLang]?.DigitalPlatformDescription}
          list={data[currentLang]?.PlatformsList}
        />
        <ContactUsLayout
          heading={data[currentLang]?.AreYouInterested?.Title}
          desc={data[currentLang]?.AreYouInterested?.Description}
          CTAlabel={data[currentLang]?.AreYouInterested?.CTAText}
          CTAlink={data[currentLang]?.AreYouInterested?.CTALink}
          isCTAMail={data[currentLang]?.AreYouInterested?.isMail}
        />
      </section>
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query GovTechPage {
    en: strapiGovTech(locale: { eq: "en" }) {
      HeroBanner {
        id
        Title
        isImage
        withLogo
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Img {
          caption
          alternativeText
          localFile {
            url
          }
        }
      }
      DigitalPlatformsTitle
      DigitalPlatformDescription
      PlatformsList {
        id
        Title
        Description
        BackgroundImage {
          alternativeText
          caption
          localFile {
            url
          }
        }
        LogoDark {
          alternativeText
          caption
          localFile {
            url
          }
        }
        LogoLight {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      AreYouInterested {
        id
        isMail
        Title
        Description
        CTAText
        CTALink
      }
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

export default GovTechPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Gov Tech - Cutting edge solutions::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}govtech/`} />
    <meta
      name="title"
      content="::NXT Tarento - Gov Tech - Cutting edge solutions::"
    />
    <meta
      name="description"
      content="Cutting edge solutions with best in class open source
    technologies for efficient and secure governance."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content={`${process.env.GATSBY_SITE_URL}govtech/`}
    />
    <meta
      property="og:title"
      content="::NXT Tarento - Gov Tech - Cutting edge solutions::"
    />
    <meta
      property="og:description"
      content="Cutting edge solutions with best in class open source
    technologies for efficient and secure governance."
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/4af750352a6c177c7f80d9ed351d244d/6998c/tech_solution_d8d031719f.png`}
    />
    <meta property="og:site_name" content="Gov Tech" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}govtech/`}
    />
    <meta
      property="twitter:title"
      content="::NXT Tarento - Gov Tech - Cutting edge solutions::"
    />
    <meta
      property="twitter:description"
      content="Cutting edge solutions with best in class open source
    technologies for efficient and secure governance."
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/4af750352a6c177c7f80d9ed351d244d/6998c/tech_solution_d8d031719f.png`}
    />
  </>
);
