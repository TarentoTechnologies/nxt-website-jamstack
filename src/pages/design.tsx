import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import { DesignProcessBannerLayout } from "../layouts/design/components/DesignProcessBannerLayout";
import { DesignProcessLayout } from "../layouts/design/components/DesignProcessLayout";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface DesignPageProps {
  data: any;
}

const DesignPage: React.FC<PageProps> = ({ data }: DesignPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#designMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        title={data[currentLang]?.HeroBanner?.Title}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
      />
      <section id="designMain">
        <DesignProcessLayout
          heading={data[currentLang]?.ProcessTitle}
          desc={data[currentLang]?.ProcessDescription}
          cardData={data[currentLang]?.DesignProcess}
        />
        <DesignProcessBannerLayout data={data[currentLang]?.KeyInformation} />
      </section>
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query DesignPage {
    en: strapiDesign(locale: { eq: "en" }) {
      HeroBanner {
        id
        withLogo
        isImage
        Title
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
            url
          }
        }
      }
      DesignProcess {
        Title
        id
        Image {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      ProcessTitle
      ProcessDescription
      KeyInformation {
        id
        Title
        DescriptionAlignment
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Image {
          alternativeText
          id
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
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

export default DesignPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Design::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}design/`} />
    <meta name="title" content="NXT Tarento - Design" />
    <meta
      name="description"
      content="At Tarento, we believe in the power of design thinking. We follow a four step design process to shape and guide our work and thoughts to improve the outcome."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${process.env.GATSBY_SITE_URL}design/`} />
    <meta property="og:title" content="NXT Tarento - Design" />
    <meta
      property="og:description"
      content="At Tarento, we believe in the power of design thinking. We follow a four step design process to shape and guide our work and thoughts to improve the outcome."
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/b01f50406c5f668090a5b40210fff276/5fae0/deliver_e8944227f3.png`}
    />
    <meta property="og:site_name" content="Design" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}design/`}
    />
    <meta property="twitter:title" content="NXT Tarento - Design" />
    <meta
      property="twitter:description"
      content="At Tarento, we believe in the power of design thinking. We follow a four step design process to shape and guide our work and thoughts to improve the outcome."
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/b01f50406c5f668090a5b40210fff276/5fae0/deliver_e8944227f3.png`}
    />
  </>
);
