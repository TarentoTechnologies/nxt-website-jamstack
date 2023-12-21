import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import featureImg1 from "../../static/images/aurora_feature_1.png";
import featureImg2 from "../../static/images/aurora_feature_2.png";
import featureImg3 from "../../static/images/aurora_feature_3.png";
import featureImg4 from "../../static/images/aurora_feature_4.png";
import featureImg5 from "../../static/images/aurora_feature_5.png";
import featureImg6 from "../../static/images/aurora_feature_6.png";
import heroImg from "../../static/images/aurora_header.svg";
import auroraWorking from "../../static/images/aurora_how_it_works.png";
import TarentoLogo from "../../static/images/company-logo.svg";
import navbarImg from "../../static/images/logo-inner.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import storyImg2 from "../../static/images/photo3.jpg";
import storyImg1 from "../../static/images/story_1.png";
import auroraVideo from "../../static/videos/aurora_video_v5.mp4";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { HowItWorks, Stories, VideoSection } from "../layouts/aurora";
import { FeaturesLayout } from "../layouts/rain";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface AuroraPageProps {
  data: any;
}

const AuroraPage: React.FC<PageProps> = ({ data }: AuroraPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const heroBannerData = {
    title: "Aurora - Customer Experience Platform",
    img: heroImg,
    subtext: "Empowering customer experience with data & Insights",
    description:
      "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
  };

  const featureCards = [
    {
      Heading: "Connect to any source, manage from one place",
      SubText:
        "Aurora can be configured to accept tickets from multiple sources including email, mobile applications, QR codes, web portals etc.",
      Img: featureImg1,
    },
    {
      Heading: "Reply directly regardless of the type of source",
      SubText:
        "From Aurora desk, the user can reply to any ticket, using an intuitive chat interface, regardless of the source platform from which the ticket was raised.",
      Img: featureImg2,
    },
    {
      Heading: "Be more informed with full history",
      SubText:
        "User can access the full history of activities to make an informed decision with short and effective back and forth communication.",
      Img: featureImg3,
    },
    {
      Heading: "Manage access, visibility and much more with admin",
      SubText:
        "The administration module lets the admin user control almost everything easily without any help.",
      Img: featureImg4,
    },
    {
      Heading: "Better organisation with tags, pins, progress indicators etc.",
      SubText:
        "Have a huge number of feedback/tickets? Aurora has the right tools that let you make it a habit to better organize items.",
      Img: featureImg5,
    },
    {
      Heading: "Learn from feedback - get real-time insights",
      SubText:
        "Just solving concerns does not always help. One needs to identify patterns and take proactive decisions inorder to be effective. The analytics capability built into Aurora generates visualizations and insights to help you with that.",
      Img: featureImg6,
    },
  ];

  const footerData = {
    nxtLogoImg: NXTlogo,
    nxtLogoImgTitle: "NXT-logo",
    companyLogoImg: TarentoLogo,
    companyLogoImgTitle: "Tarento-logo",
    description:
      "NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento. We take pride in being unconventional with our approaches while retaining the passion with which we work.",
    mailId: "hello@tarento.com",
    levelOneHeading: "Direct Links",
    levelOneList: [
      { title: "Home", href: "nxt.html" },
      { title: "Technology", href: "technology.html" },
      { title: "Design", href: "design-process.html" },
      { title: "Innovation", href: "nxt-innovation.html" },
      { title: "Pricing", href: "pricing.html" },
    ],
    levelTwoHeading: "Tech & Innovations",
    levelTwoList: [
      { title: "Bolt - Data Platform", href: "data-platform.html" },
      { title: "Rain - Analytics", href: "rain.html" },
      { title: "Thor - Chatbot", href: "thor.html" },
      { title: "GovTech", href: "govtech.html" },
      { title: "Customer Experience", href: "customer-experience.html" },
    ],
    levelThreeHeading: "Direct Links",
    levelThreeList: [
      { title: "Home", href: "https://www.tarento.com/" },
      { title: "About us", href: "https://www.tarento.com/about/" },
      { title: "Services", href: "https://www.tarento.com/services/" },
      { title: "Careers", href: "https://www.tarento.com/careers/" },
    ],
    levelFourHeading: "Programmes",
    levelFourList: [
      { title: "Lead", href: "https://www.tarento.com/lead/" },
      { title: "Blixt", href: "https://www.tarento.com/blixt/" },
    ],
    rightsText: "All rights reserved © 2023 Tarento Technologies.",
  };

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
        isAurora
      />
      <HowItWorks
        heading={data[currentLang]?.WorkingSectionTitle}
        imgSrc={data[currentLang]?.WorkingImg}
      />
      <VideoSection
        heading={data[currentLang]?.VideoData?.Title}
        listData={data[currentLang]?.VideoData?.KeyPoints}
        videoSrc={data[currentLang]?.AuroraVideo?.localFile?.url}
      />
      <FeaturesLayout
        title={data[currentLang]?.FeatureSectionTitle}
        cardsData={data[currentLang]?.FeatureCards}
        isImage={false}
      />
      <Stories
        title={data[currentLang]?.StorySectionTitle}
        cardsData={data[currentLang]?.StoryCards}
      />
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query AuroraPage {
    en: strapiAurora(locale: { eq: "en" }) {
      HeroBanner {
        id
        withLogo
        isImage
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
          localFile {
            url
          }
          alternativeText
        }
      }
      WorkingSectionTitle
      WorkingImg {
        localFile {
          childImageSharp {
            gatsbyImageData(formats: PNG)
          }
        }
        alternativeText
        caption
      }
      AuroraVideo {
        localFile {
          url
        }
        alternativeText
      }
      VideoData {
        Title
        KeyPoints {
          ListItem
        }
      }
      FeatureSectionTitle
      FeatureCards {
        Heading
        SubText
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
          alternativeText
          caption
        }
      }
      StorySectionTitle
      StoryCards {
        Title
        Description {
          data {
            Description
          }
        }
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, height: 326)
            }
          }
          alternativeText
          caption
        }
      }
    }
  }
`;

export default AuroraPage;

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
