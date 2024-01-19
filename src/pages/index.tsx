import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import { HeroBanner } from "../components/banners/HeroBanner";
import { PyramidBanner } from "../components/banners/PyramidBanner";
import { Seo } from "../components/seo/Seo";
import { FooterSection } from "../layouts/common";
import {
  AgencyPortfolio,
  CTALayout,
  DesignPortfolio,
  OurProgramme,
} from "../layouts/home";
import { ProductCardLayout } from "../layouts/home/components/ProductCardLayout";
import { TriCardLayout } from "../layouts/home/components/TriCardLayout";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface IndexPageProps {
  data: any;
}

const IndexPage: React.FC<PageProps> = ({ data }: IndexPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentDesignPortfolio = currentLang + "DesignPortfolios";
  const currentAgencyPortfolio = currentLang + "AgencyPortfolios";
  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#homeMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <HeroBanner data={data[currentLang]?.HeroBanner} />
      <section id="homeMain">
        <TriCardLayout data={data[currentLang]?.TriCards} />
        <PyramidBanner
          title={data[currentLang]?.PyramidTitle}
          description={data[currentLang]?.PyramidDescription}
          pyramidImg={data[currentLang]?.PyramidImage.localFile.url}
          btnDescr={data[currentLang]?.PyramidCTAText}
          btnLink={data[currentLang]?.PyramidCTALink}
        />
        <ProductCardLayout data={data[currentLang]?.AcceleratorCards} />
        <OurProgramme
          sectionTitle={data[currentLang]?.ProgrammeSectionTitle}
          cards={data[currentLang]?.ProgrammeCards}
        />
        {/* <AgencyPortfolio
        title={data[currentLang]?.HighlighterOneTitle}
        description={data[currentLang]?.HighlighterOneDescription}
        ctaText={data[currentLang]?.HighlighterOneCTAText}
        ctaLink={data[currentLang]?.HighlighterOneCTALink}
        agencyPortfolioData={data[currentAgencyPortfolio]?.nodes}
      />
      <DesignPortfolio
        title={data[currentLang]?.HighlighterTwoTitle}
        description={data[currentLang]?.HighlighterTwoDescription}
        ctaText={data[currentLang]?.HighlighterTwoCTAText}
        ctaLink={data[currentLang]?.HighlighterTwoCTALink}
        designPortfolioData={data[currentDesignPortfolio]?.nodes}
      /> */}
        <CTALayout data={data[currentLang]?.CTA} />
      </section>
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query HomePage {
    en: strapiHome(locale: { eq: "en" }) {
      HeroBanner {
        PrimaryImage {
          alternativeText
          caption
          id
          localFile {
            url
          }
        }
        SecondaryImage {
          alternativeText
          caption
          id
          localFile {
            url
          }
        }
      }
      TriCards {
        id
        Title
        Icon {
          localFile {
            url
          }
        }
        CTALink
        BackgroundColor
      }
      PyramidTitle
      PyramidDescription
      PyramidImage {
        localFile {
          url
        }
      }
      PyramidCTAText
      PyramidCTALink
      ProgrammeSectionTitle
      AcceleratorCards {
        id
        Title
        Link
        Logo {
          localFile {
            url
          }
        }
        BackgroundImage {
          localFile {
            url
          }
        }
        customBgPosition
      }
      ProgrammeCards {
        id
        Title
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        Description
        CTAText
        CTALink
        isCTAExternal
      }
      HighlighterOneTitle
      HighlighterOneDescription
      HighlighterOneCTAText
      HighlighterOneCTALink
      HighlighterTwoTitle
      HighlighterTwoDescription
      HighlighterTwoCTAText
      HighlighterTwoCTALink
      CTA {
        id
        Title
        Description
        CTAText
        CTALink
      }
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
    enDesignPortfolios: allStrapiDesignPortfolio(
      filter: { locale: { eq: "en" } }
      sort: { updatedAt: DESC }
      limit: 3
    ) {
      nodes {
        PortfolioTag
        HeroSection {
          id
          Title
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: PNG, placeholder: BLURRED)
              }
            }
          }
          Description
        }
        id
        Slug
        CTATextForDisplay
      }
    }
    enAgencyPortfolios: allStrapiAgencyPortfolio(
      filter: { locale: { eq: "en" } }
      sort: { updatedAt: DESC }
      limit: 3
    ) {
      nodes {
        PortfolioTag
        HeroSection {
          id
          Title
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: PNG, placeholder: BLURRED)
              }
            }
          }
          Description
        }
        id
        Slug
        CTATextForDisplay
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

export default IndexPage;

export const Head: HeadFC = ({ data }: IndexPageProps) => {
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
