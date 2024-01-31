import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
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
      <ul className="skip-links">
        <li>
          <a href="#appsMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
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
      <section id="appsMain">
        <InternalApps
          title={data[currentLang]?.SectionTitle}
          appData={data[currentLang]?.Applications}
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
      seo {
        metaTitle
        metaDescription
        canonicalURL
        metaViewport
        keywords
        metaImage {
          localFile {
            url
          }
        }
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

export default AppsPage;

export const Head: HeadFC = ({ data }: AppsPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);
  return (
    <Seo
      metaTitle={data[currentLang]?.seo?.metaTitle}
      metaDesc={data[currentLang]?.seo?.metaDescription}
      metaImg={data[currentLang]?.seo?.metaImage?.localFile?.url}
      canonicalUrl={data[currentLang]?.seo?.canonicalURL}
      metaViewport={data[currentLang]?.seo?.metaViewport}
      keywords={data[currentLang]?.seo?.keywords}
    />
  );
};
