import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import { Seo } from "../components/seo/Seo";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface DesignHackathonPageProps {
  data: any;
}

const DesignHackathonPage: React.FC<PageProps> = ({ data }: DesignHackathonPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  return (
    <main className="">
      <iframe
        title="NXT | Creative Spark | Design Hackathon"
        className="creativeSpark"
        src={data[currentLang]?.AppURL}
        sandbox="allow-scripts allow-same-origin allow-popups"
        referrerPolicy="same-origin"
        height="100%"
        width="100%"
        style={{
          height: "100vh",
        }}
      ></iframe>
    </main>
  );
};

export const query = graphql`
  query CreativeSpark {
    en: strapiDemoApp(locale: { eq: "en" }, Slug: { eq: "CreativeSpark-DesignHackathon" }) {
      id
      Slug
      AppURL
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
  }
`;

export default DesignHackathonPage;

export const Head: HeadFC = ({ data }: DesignHackathonPageProps) => {
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
