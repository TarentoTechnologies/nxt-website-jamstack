import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import { Seo } from "../../components/seo/Seo";
import { ThorInteractive } from "../../layouts/thor-demo";
import { langSelected as langSelectedAtom } from "../../states/atoms";

interface THORDemoPageProps {
  data: any;
}

const THORDemoPage: React.FC<PageProps> = ({ data }: THORDemoPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  return (
    <main className="">
      <ThorInteractive />
    </main>
  );
};

export const query = graphql`
  query THORDemoApp {
    en: strapiDemoApp(locale: { eq: "en" }, Slug: { eq: "THOR-demo" }) {
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

export default THORDemoPage;

export const Head: HeadFC = ({ data }: THORDemoPageProps) => {
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
