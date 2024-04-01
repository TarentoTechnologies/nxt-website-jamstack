import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import navbarImg from "../../static/images/logo-inner.svg";
import techHero from "../../static/images/tech-hero.png";
import { BannerWithCTA } from "../components";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import {
  AllOtherClients,
  AreYouInterested,
  HeroBanner,
  Showcase,
} from "../layouts/design-portfolio";
import {
  About,
  GallerySection,
  RelatedPortfolio,
  TagSection,
} from "../layouts/design-portfolio-detail";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface DesignPortfolioDetailProps {
  data: any;
}

const DesignPortfolioDetail: React.FC<PageProps> = ({
  data,
}: DesignPortfolioDetailProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  const currentBottomBanner = currentLang + "BottomBanner";

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBanner
        heroBannerData={data[currentLang]?.HeroBanner}
        aboutSectionData={data[currentLang]?.AboutSection}
        isImg
      />
      <GallerySection
        imageList={data[currentLang]?.GallerySection?.ImageList}
        sliderLeftImg={
          data[currentLang]?.GallerySection?.SliderLeftImg?.localFile?.url
        }
        sliderRightImg={
          data[currentLang]?.GallerySection?.SliderRightImg?.localFile?.url
        }
      />
      <TagSection data={data[currentLang]?.BannerWithTagSection} />
      <RelatedPortfolio
        data={data[currentLang]?.RelatedPortfolios}
        sectionTitle={data[currentLang]?.SectionFourTitle}
        portfolioPath="/design-portfolio/"
      />
      <BannerWithCTA
        title={data[currentBottomBanner]?.BottomBanner?.Title}
        bgImg={data[currentBottomBanner]?.BottomBanner?.BgImg?.localFile?.url}
        CTAtext={data[currentBottomBanner]?.BottomBanner?.CTAButton?.Label}
        CTAlink={data[currentBottomBanner]?.BottomBanner?.CTAButton?.Link}
        isCTAExternal={data[currentBottomBanner]?.BottomBanner?.isCTAExternal}
      />
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query DesignPortfolio($slug: String!) {
    en: strapiDesignPortfolio(Slug: { eq: $slug }, locale: { eq: "en" }) {
      id
      HeroBanner {
        id
        Title
        Image {
          localFile {
            url
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
        }
        Desc {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        isAgencyDetail
        isListingPage
        withBreadCrumbs
        BreadCrumbLabel
        BreadCrumbLink
      }
      AboutSection {
        id
        Title
        Description {
          data {
            Description
            childMarkdownRemark {
              html
            }
          }
        }
        ColumnOneTitle
        ColumnOneValue
        ColumnTwoTitle
        ColumnTwoValue
        ColumnThreeTitle
        ColumnThreeValue
        ColumnFourTitle
        ColumnFourLink
      }
      BannerWithTagSection {
        id
        Title
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        Tags {
          id
          Label
        }
      }
      SectionFourTitle
      RelatedPortfolios {
        id
        Title
        Tag
        Description
        CTAText
        CTALink
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
      }
      GallerySection {
        SliderLeftImg {
          localFile {
            url
          }
        }
        SliderRightImg {
          localFile {
            url
          }
        }
        ImageList {
          Image {
            localFile {
              url
            }
          }
        }
      }
    }
    enBottomBanner: strapiDesignPortfolioListing(locale: { eq: "en" }) {
      BottomBanner {
        Title
        CTAButton {
          Label
          Link
        }
        BgImg {
          localFile {
            url
          }
        }
        isCTAExternal
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

export default DesignPortfolioDetail;

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
